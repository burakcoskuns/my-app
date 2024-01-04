import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{ width: '75%', height: 'auto', margin: 'auto' }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '17px', textAlign: 'center' }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center", fontSize: '15px' }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ display: 'block', margin: 'auto' }} 
          >
            <CgWebsite size={15} />
            &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
