import React from "react";
import { Card, Button, Ratio, Container } from "react-bootstrap";
import RandomIMG from "../assets/congregationpreach.jpg"


/*
const MessageCard = ({ video }) => {
  const snippet = video.snippet;

  const videoId = snippet.resourceId.videoId;
  const title = snippet.title;
  const thumbnail = snippet.thumbnails.high.url;
  const date = new Date(snippet.publishedAt).toLocaleDateString();

  return (
    <Card className="mb-4 bg-dark text-white">
      <Ratio aspectRatio="16x9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allowFullScreen
        />
      </Ratio>

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <div className="d-flex justify-content-between">
          <Card.Text className="mb-0">Pastor Bernard Jean-Mary</Card.Text>

          <Card.Text className="mb-0">{date}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MessageCard;
*/ 


const MessageCard = (props) => {
  const sermonName = "Academy And Benefits In Christ";
  const speakerName = "Pastor Bernard Jean-Mary";
  const date = "07/26"

  const videoYT = (
    <iframe
      width="696"
      height="391"
      src="https://www.youtube.com/embed/Ra927pjrz64"
      title='"Academy And Benefits In Christ" Pastor Bernard Jean-Mary 07/08/26'
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
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


