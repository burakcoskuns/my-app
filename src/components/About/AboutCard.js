import React from "react";
import Card from "react-bootstrap/Card";
/*import { ImPointRight } from "react-icons/im";*/

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textJustify: "auto" }}>
            <br />BPC Infrastructure & Automation: Transforming Your Business Processes with Technology and Innovation
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />With our experienced and expert team, we provide services in a wide range of applications including offices, hospitals, schools, conference and presentation halls, retail workspaces, corporate server rooms, and indoor-outdoor LED advertising panels.
            <p style={{ textAlign: "left", textJustify: "auto" }}>
          </p> 
            <br />With our comprehensive services in display systems, IT products, connectivity and IoT equipment, server hardware requirements, and software automation, we support you in transforming your business processes and infrastructure. Our aim is to achieve cost optimization, integration according to new requirements, and improvements in your operations.
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />We specialize in selecting all hardware products compatible with the requested usage purpose, executing on-site cabling applications, and conducting comprehensive system tests to simplify usability. Our goal is to deliver the system to the end-user in a 'plug-and-play' condition, ensuring ease of use and efficiency.
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />With our additional services following sales and installation, we emphasize continual improvement and protection of systems by providing periodic maintenance, repair, software security, and storage support. We place great value on customer feedback, establishing enduring relationships centered on trust, seamless hardware operation, and software performance.
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />At BPC Infrastructure & Automation, we strive to build business processes in a way that makes a difference. By contributing to the transformation of your business processes through technology and innovation, we aim to provide you with a competitive edge. Working with us, you can leverage technologies and automation software to make your business processes more efficient, faster, and error-free, thus standing out in the business world.
          </p>
          <ul>
            {/*<li className="about-activity">
              <ImPointRight /> Installation of applied visual products
            </li>
            <li className="about-activity">
              <ImPointRight /> Infrastructure support
            </li>
            <li className="about-activity">
              <ImPointRight /> Implementation of applied projects such as commissioning
            </li>*/}
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
