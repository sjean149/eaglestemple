import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const SermonCardsList = () => {
  const [videos, setVideos] = useState([]);

  const API_KEY = "AIzaSyBpRSSilNcn8xzX4lqLT61UCfn_rcFWIXo";
  const CHANNEL_ID = "UCpYxcXAYhtXBoatthM2hnHg";

  useEffect(() => {
    async function getVideos() {
      try {
        // Get the uploads playlist ID
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );

        const channelData = await channelRes.json();

        const uploadsPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Fetch the uploaded videos
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`
        );

        const videosData = await videosRes.json();

        console.log(videosData);

        setVideos(videosData.items);
      } catch (err) {
        console.error(err);
      }
    }

    getVideos();
  }, []);

  return (
    <>
      {videos.map((video) => (
        <Card
          key={video.snippet.resourceId.videoId}
          className="mb-5"
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            src={
              video.snippet.thumbnails.high?.url ||
              video.snippet.thumbnails.medium?.url ||
              video.snippet.thumbnails.default?.url
            }
          />
          
          <Card.Body className="text-white">
            <Card.Title>{video.snippet.title}</Card.Title>

            <div className="d-flex justify-content-between align-items-center">
              <Card.Text className="mb-0">Pastor Bernard Jean-Mary</Card.Text>



              <span>|</span>

              <Card.Text className="mb-0">
                {new Date(video.snippet.publishedAt).toLocaleDateString()}


              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default SermonCardsList;

/*
const MessageCard = () => {
  const sermonName = "Academy And Benefits In Christ";
  const speakerName = "Pastor Bernard Jean-Mary";
  const date = "07/26"

  const videoYT = (
    <iframe
      width="696"
      height="391"
      src="https://www.youtube.com/embed/Ra927pjrz64"
      title={sermonName}
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullscreen
    ></iframe>
  );


  return (
    <>
      <Card className="mb-5" style={{ width: "18rem" }}>
        <Ratio aspectRatio="16x9">
          {videoYT}
        </Ratio>

        <Card.Body className="text-white">
          <Card.Title>{sermonName}</Card.Title>

          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="mb-0">{speakerName}</Card.Text>
            <span>|</span>
            <Card.Text className="mb-0">{date}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};


export default MessageCard;