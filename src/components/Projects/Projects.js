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
import rwe from "../../Assets/Projects/rwe.png";
import yandex from "../../Assets/Projects/yandex.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              //title="Gram Games"
              description="Our project successfully managed the migration from Gmail to Office 365, set up our server room, installed WLC devices, procured IoT products, and automated employee onboarding/offboarding. This significantly improved communication, network management, operational efficiency, and streamlined HR processes, marking a key advancement in our digital transformation and setting the stage for future tech innovations."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={lufthansa}
              isBlog={false}
              //title="Lufthansa Airlines"
              description="We are currently undertaking a comprehensive maintenance and replacement project for the uninterruptible power supplies (UPS) in the server rooms at Lufthansa Airline's Istanbul headquarters. This critical project involves a thorough inspection, servicing, and upgrading of the UPS systems to ensure a high level of reliability and efficiency. Our focus is on enhancing the operational stability of these vital systems, which play a crucial role in maintaining continuous power supply and protecting valuable data against power disruptions. The aim is to bolster the resilience of Lufthansa's technological infrastructure, thereby supporting uninterrupted airline operations and services."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              //title="Mitsubishi-Corporation"
              description="Our project was an extensive endeavor that involved multiple critical components. Firstly, we undertook the renovation of meeting rooms to foster a more collaborative and technologically advanced environment. Secondly, we relocated the server room to a more secure and efficient location, ensuring better data management and safety. Thirdly, a significant part of our project was establishing a high-speed fiber internet link between Istanbul and Japan, greatly enhancing our global connectivity and communication capabilities. Additionally, we set up robust radio link internet backups as a fail-safe measure to maintain uninterrupted internet access. Another crucial aspect was implementing comprehensive backup procedures in the server room, which are essential for data protection and recovery. Lastly, the project included upgrading Wireless LAN Controllers (WLC) and access points throughout the facility, significantly improving our wireless network's coverage and performance. This project not only upgraded our technical capabilities but also played a pivotal role in modernizing our infrastructure for future technological advancements."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              //title="Gi Group"
              description="We have successfully completed a comprehensive project that involved designing infrastructure for webinar and meeting rooms, procuring advanced visual equipment, and implementing a robust cabling infrastructure. This project focused on creating functional and aesthetically pleasing webinar spaces, selecting high-quality projectors and screens for clarity and ease of digital integration, and installing sophisticated cabling systems for high-speed data transmission and secure connections. Our aim was to enhance our capacity for professional webinars and meetings, ensuring user-friendly interfaces and providing our team with the necessary training to utilize these new facilities effectively."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              //title="Uncosoft"
              description="We have adeptly completed a comprehensive project encompassing several key IT components. This included providing support for remote office setups, ensuring seamless integration and functionality for our teams working off-site. We also handled ISP configuration, optimizing our internet service setup to enhance connectivity and reliability. A crucial part of the project was user network authorization and implementing automated systems for efficient department management. Additionally, we focused on Active Directory workflow management, streamlining user access and security protocols. Finally, the project involved the setup and management of Exchange Database Availability Group (DAG) structures, ensuring robust and resilient email communication systems. Each of these components was integral in upgrading our IT infrastructure to meet modern operational demands."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              //title="Rollic Games"
              description="We have successfully completed a comprehensive project that involved setting up a new Istanbul office, installing Nutanix Server OnPrem software, and fully integrating it with our head office's systems. Additionally, we organized and equipped meeting rooms, integrating advanced Zoom meeting devices with the head office for seamless communication. The project also included terminating the existing ISP line and expertly installing RadioLink secondary gateway systems for enhanced network reliability and connectivity."
            />
          </Col>

          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              //title="Vivise"
              description="We have successfully completed an extensive project that encompassed comprehensive end-user support, the automation of Jira processes for improved workflow, effective document management systems, managing and optimizing Airtable processes, along with the installation and advanced automation of the Microsoft Power BI Tool for enhanced data analysis."
            />
          </Col>
          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={rwe}
              isBlog={false}
              //title="rwe"
              description="RWE, a nuclear energy company, recently undertook a significant project in their Istanbul office. This involved relocating the server room between floors, labeling cables for easy identification, and upgrading the IPS lines to enhance network performance. In the new server room, halogen-free cables were installed to ensure higher safety standards. Additionally, these cables were subjected to rigorous fire-resistant tests to ensure they meet the necessary safety requirements."
            />
          </Col>
          <Col md={4} lg={3} className="project-card">
            <ProjectCard
              imgPath={yandex}
              isBlog={false}
              //title="Yandex"
              description="We are collaborating with the Yandex team, providing support for their internal and cloud systems. Our recent endeavors include testing their network cables using the Fluke Network Testing process, which has led to the initiation of their cable certification. Additionally, we are assisting them in transitioning the database of their finance system from an internal setup to a cloud-based infrastructure."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
