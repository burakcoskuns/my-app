import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import lufthansa from "../../Assets/Projects/lufthansa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects we've worked on recently.
        </p>
        <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              //title="Gram Games"
              description="Our project achieved Gmail to Office 365 migration, server room setup, WLC device installation, IoT product procurement, and employee onboarding/offboarding automation. This enhanced communication, network management, operational efficiency, and streamlined HR processes, advancing our digital transformation."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={lufthansa}
              isBlog={false}
              //title="Lufthansa Airlines"
              description="We are performing maintenance and replacements of the uninterruptible power supplies (UPS) in the server rooms of Lufthansa Airline's Istanbul headquarters."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              //title="Mitsubishi-Corporation"
              description="Our project encompassed renovating meeting rooms, relocating the server room, establishing a fiber internet link between Istanbul and Japan, setting up radio link internet backups, implementing backup procedures in the server room, and upgrading WLC and access points throughout."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              //title="Gi Group"
              description="We have successfully executed a project involving the infrastructure design for webinar and meeting rooms, procurement of visual equipment, and implementation of cabling infrastructure."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              //title="Uncosoft"
              description="We have adeptly completed a project that included remote office setup support, ISP configuration, user network authorization and automated department management, Active Directory workflow management, and the setup and management of Exchange DAG structures"
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              //title="Rollic Games"
              description="We have successfully completed a project that involved setting up an Istanbul office, installing Nutanix Server OnPrem software and integrating it with the head office, organizing meeting rooms and procuring necessary equipment, integrating Zoom meeting devices with the head office, terminating the ISP line, and installing RadioLink secondary gateway systems."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              //title="Vivise"
              description="We have successfully completed a project that encompassed end-user support, automation of Jira processes, document management, managing Airtable processes, and the installation and automation of the Microsoft Power BI Tool."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
