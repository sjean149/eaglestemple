import React from "react";
import { Card, Ratio} from "react-bootstrap";
import { useEffect, useState } from "react";


const SermonCardsList = () => {
  const [playlists, setPlaylists] = useState<any>([]);
  const API_KEY = "AIzaSyBpRSSilNcn8xzX4lqLT61UCfn_rcFWIXo";
  const CHANNEL_ID = "UCpYxcXAYhtXBoatthM2hnHg";
  const YOUTUBE_PLAYLIST_API = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=25&key=${API_KEY}`;
 
  
 useEffect(() => {
   async function getPlaylists() {
     try {
       const res = await fetch(YOUTUBE_PLAYLIST_API);
       const data = await res.json();

       console.log(data);

       if (data.items) {
         setPlaylists(data.items);
       }
     } catch (err) {
       console.error(err);
     }
   }

   getPlaylists();
 }, []);


return (
  <>
    {playlists.map((playlist) => (
      <Card
        key={playlist.id}
        className="mb-5"
        style={{ width: "18rem" }}
      >
        <Ratio aspectRatio="16x9">
          <Card.Img
            variant="top"
            src={playlist.snippet.thumbnails.high?.url}
          />
        </Ratio>

        <Card.Body className="text-white">
          <Card.Title>
            {playlist.snippet.title}
          </Card.Title>

          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="mb-0">
              Pastor
            </Card.Text>

            <span>|</span>

            <Card.Text className="mb-0">
              {new Date(
                playlist.snippet.publishedAt
              ).toLocaleDateString()}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    ))}
  </>
);
}

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
*/