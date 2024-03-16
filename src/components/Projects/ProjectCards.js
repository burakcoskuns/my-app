import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => setShowText(true), 450);
      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [isFlipped]);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
    setShowText(false);
  };

  return (
    <Card 
      className="project-card-view"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', width: '75%' }} // width buraya eklendi
    >
<Card.Img 
  variant="top" 
  src={props.imgPath} 
  alt="card-img" 
  style={{
    width: '100%',
    height: 'auto',
    margin: 'auto',
    transition: 'transform 1s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    opacity: showText ? 0 : 1,
  }}
/>
      {showText && (
        <Card.Body style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '1px',
          zIndex: 1000,
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          <Card.Text style={{ fontSize: '14px', color: 'purple', fontFamily: '"Raleway", sans-serif'}}>
            {props.description}
          </Card.Text>
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
      )}
    </Card>
  );
}

export default ProjectCards;
