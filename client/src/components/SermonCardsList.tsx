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
      {videos.map((video) => {
        const text = video.snippet.title;const 
        
        match = text.match(/"([^"]*)"\s+(.+?)\s+\d{1,2}\/\d{1,2}\/\d{2,4}/,);

        const sermonTitle = match?.[1] || "";
        const speaker = match?.[2] || "";

        return (
          <Card
            key={video.snippet.resourceId.videoId}
            className="mb-5"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={video.snippet.thumbnails.high?.url} />

            <Card.Body className="text-white">
              <Card.Title>{sermonTitle}</Card.Title>

              <div className="d-flex justify-content-between align-items-center">
                <Card.Text className="mb-0">{speaker}</Card.Text>

                <span>|</span>

                <Card.Text className="mb-0">
                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default SermonCardsList;
