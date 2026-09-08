import { Row, Col, Card } from "react-bootstrap";

interface Video {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  videoUrl: string;
}

interface SermonCardsListProps {
  videos: Video[];
}

export default function SermonCardsList({ videos }: SermonCardsListProps) {
  if (videos.length === 0) {
    return (
      <Col className="text-center py-5">
        <p className="fs-5 text-muted">No sermons found matching your criteria.</p>
      </Col>
    );
  }

  return (
    <Row className="g-4">
      {videos.map((video) => (
        <Col key={video.id} md={6} lg={4}>
          <Card className="h-100 shadow-sm border-0">
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={video.thumbnail} alt={video.title} />
            </a>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fs-6 fw-bold text-dark mb-2">
                {video.title}
              </Card.Title>
              <Card.Text className="text-muted small mb-3">
                {new Date(video.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Card.Text>
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning text-dark mt-auto fw-bold btn-sm"
              >
                Watch on YouTube
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}