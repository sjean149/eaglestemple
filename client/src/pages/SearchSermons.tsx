import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Badge, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface Sermon {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
}

export default function SearchSermons() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSpeaker, setSelectedSpeaker] = useState("All Speakers");
  const [selectedYear, setSelectedYear] = useState("All Years");
  
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const categories = ["All Categories", "Prophecy", "Doctrinal", "Faith & Healing"];
  const speakers = ["All Speakers", "Bro Bernard", "Bro Bince", "Bro Senora"];
  const years = [
    "All Years",
    "2026",
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
  ];

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const fetchAllChannelSermons = async () => {
    setLoading(true);
    try {
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=EaglesTemple&key=${YOUTUBE_API_KEY}`
      );
      const channelData = await channelRes.json();
      const channelId = channelData.items?.[0]?.id;

      if (!channelId) {
        console.error("Channel not found");
        setLoading(false);
        return;
      }

      let queryParts: string[] = [];
      if (searchTerm.trim()) queryParts.push(searchTerm.trim());
      if (selectedSpeaker !== "All Speakers") {
        if (selectedSpeaker === "Bro Bernard") queryParts.push("Bernard Jean-Mary");
        if (selectedSpeaker === "Bro Bince") queryParts.push("Josue Bince");
        if (selectedSpeaker === "Bro Senora") queryParts.push("Jean Yvon Senora");
      }

      const combinedQuery = queryParts.join(" ");

      let dateFilter = "";
      if (selectedYear !== "All Years") {
        const startOfYear = `${selectedYear}-01-01T00:00:00Z`;
        const endOfYear = `${selectedYear}-12-31T23:59:59Z`;
        dateFilter = `&publishedAfter=${encodeURIComponent(startOfYear)}&publishedBefore=${encodeURIComponent(endOfYear)}`;
      }

      let allFetchedSermons: Sermon[] = [];
      let pageToken = "";
      let hasMorePages = true;
      let pageSafetyCounter = 0;

      while (hasMorePages && pageSafetyCounter < 10) {
        pageSafetyCounter++;
        const tokenQuery = pageToken ? `&pageToken=${pageToken}` : "";
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&q=${encodeURIComponent(
          combinedQuery
        )}${dateFilter}${tokenQuery}&key=${YOUTUBE_API_KEY}`;

        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if (searchData.items && searchData.items.length > 0) {
          const pageItems: Sermon[] = searchData.items.map((item: any, index: number) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            date: new Date(item.snippet.publishedAt).toISOString().split("T")[0],
            location: "Eagles Temple",
            category: categories[(index % (categories.length - 1)) + 1],
            description: item.snippet.description || "Live worship service at Eagles Temple Church.",
            youtubeUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            thumbnailUrl:
              item.snippet.thumbnails.high?.url ||
              item.snippet.thumbnails.medium?.url ||
              `https://img.youtube.com/vi/${item.id.videoId}/hqdefault.jpg`,
          }));

          allFetchedSermons = [...allFetchedSermons, ...pageItems];
        }

        if (searchData.nextPageToken) {
          pageToken = searchData.nextPageToken;
        } else {
          hasMorePages = false;
        }
      }

      setSermons(allFetchedSermons);
    } catch (error) {
      console.error("Failed to retrieve YouTube sermons:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchAllChannelSermons();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, selectedSpeaker, selectedYear]);

  const filteredSermons = sermons.filter(
    (sermon) => selectedCategory === "All Categories" || sermon.category === selectedCategory
  );

  return (
    <section
      className="w-100 py-5 position-relative"
      style={{
        minHeight: "100vh",
        color: "#ffffff",
        backgroundImage: `linear-gradient(135deg, rgba(5, 10, 25, 0.92) 0%, rgba(13, 27, 62, 0.88) 100%), url('/images/bald-eagle.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Embedded Dynamic CSS for Smooth Card Hover Transitions */}
      <style>{`
        .sermon-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .sermon-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #ffc107 !important;
          box-shadow: 0 15px 30px rgba(255, 193, 7, 0.25) !important;
        }
        .sermon-card .card-img-top {
          transition: transform 0.5s ease, filter 0.5s ease;
        }
        .sermon-card:hover .card-img-top {
          transform: scale(1.08);
          filter: brightness(1.1);
        }
        .sermon-card .watch-btn {
          transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }
        .sermon-card:hover .watch-btn {
          background-color: #ffc107 !important;
          color: #050a19 !important;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
        }
      `}</style>

      <Container>
        <div className="text-center mb-5">
          <span
            className="d-inline-block text-uppercase fw-bold mb-2 px-3 py-1 rounded-pill"
            style={{
              color: "#ffc107",
              backgroundColor: "rgba(255, 193, 7, 0.15)",
              letterSpacing: "2px",
              fontSize: "0.85rem",
              border: "1px solid rgba(255, 193, 7, 0.3)",
            }}
          >
            Sermon Archive
          </span>
          <h2 className="fw-bold display-5 mb-3" style={{ fontFamily: "Georgia, serif" }}>
            Search & Explore Messages
          </h2>
        </div>

        {/* Filter Bar Controls */}
        <div
          className="p-4 rounded-4 mb-5 shadow-lg"
          style={{
            backgroundColor: "rgba(13, 27, 62, 0.75)",
            border: "2px solid rgba(255, 193, 7, 0.35)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Row className="g-3 align-items-center">
            {/* Search Input */}
            <Col lg={4} md={12}>
              <Form.Control
                type="text"
                placeholder="Search by keyword, scripture, title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-2.5 px-3 shadow-none text-white border-0"
                style={{ backgroundColor: "rgba(5, 10, 25, 0.85)", borderRadius: "10px" }}
              />
            </Col>

            {/* Speaker Dropdown */}
            <Col lg={3} md={4}>
              <Form.Select
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                className="py-2.5 px-3 shadow-none text-white border-0"
                style={{ backgroundColor: "rgba(5, 10, 25, 0.85)", borderRadius: "10px", cursor: "pointer" }}
              >
                {speakers.map((spk) => (
                  <option key={spk} value={spk} style={{ backgroundColor: "#050a19" }}>
                    {spk}
                  </option>
                ))}
              </Form.Select>
            </Col>

            {/* Year Dropdown */}
            <Col lg={2} md={4}>
              <Form.Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="py-2.5 px-3 shadow-none text-white border-0"
                style={{ backgroundColor: "rgba(5, 10, 25, 0.85)", borderRadius: "10px", cursor: "pointer" }}
              >
                {years.map((yr) => (
                  <option key={yr} value={yr} style={{ backgroundColor: "#050a19" }}>
                    {yr}
                  </option>
                ))}
              </Form.Select>
            </Col>

            {/* Category Dropdown */}
            <Col lg={3} md={4}>
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-2.5 px-3 shadow-none text-white border-0"
                style={{ backgroundColor: "rgba(5, 10, 25, 0.85)", borderRadius: "10px", cursor: "pointer" }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} style={{ backgroundColor: "#050a19" }}>
                    {cat}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </div>

        {/* Results Info Bar */}
        {!loading && (
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white-50">
              Showing <strong>{filteredSermons.length}</strong> messages found
            </p>
          </div>
        )}

        {/* Results / Loading Spinner */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="warning" />
            <p className="mt-3 text-white-50">Loading all matching videos from YouTube...</p>
          </div>
        ) : (
          <Row className="g-4">
            {filteredSermons.length > 0 ? (
              filteredSermons.map((sermon) => (
                <Col key={sermon.id} md={6} lg={4}>
                  <Card
                    className="sermon-card h-100 shadow-lg text-white position-relative overflow-hidden"
                    style={{
                      backgroundColor: "rgba(13, 27, 62, 0.85)",
                      borderRadius: "18px",
                      border: "2px solid rgba(255, 193, 7, 0.3)",
                      backdropFilter: "blur(6px)",
                      cursor: "pointer",
                    }}
                  >
                    <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                      <Card.Img
                        variant="top"
                        src={sermon.thumbnailUrl}
                        alt={sermon.title}
                        className="card-img-top"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(5, 10, 25, 0.1) 0%, rgba(13, 27, 62, 0.95) 100%)",
                        }}
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                        <Badge bg="warning" text="dark" className="px-3 py-2 fw-bold shadow">
                          {sermon.category}
                        </Badge>
                      </div>
                    </div>

                    <Card.Body className="d-flex flex-column justify-content-between p-4">
                      <div>
                        <div className="small fw-semibold mb-2" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                          {sermon.date} • {sermon.location}
                        </div>
                        <Card.Title
                          className="fw-bold mb-2"
                          style={{ fontSize: "1.1rem", fontFamily: "Georgia, serif" }}
                          dangerouslySetInnerHTML={{ __html: sermon.title }}
                        />
                      </div>

                      <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                        <Button
                          href={sermon.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="watch-btn w-100 fw-bold border-0 py-2.5 rounded-pill shadow"
                          style={{ backgroundColor: "#38bdf8", color: "#050a19" }}
                        >
                          Watch on YouTube
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={12} className="text-center py-5">
                <p className="fs-5" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  No videos found matching the selected filters.
                </p>
              </Col>
            )}
          </Row>
        )}
      </Container>
    </section>
  );
}