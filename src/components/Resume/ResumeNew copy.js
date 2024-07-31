import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";


const presentationUrl =
  "https://docs.google.com/presentation/d/1DPUY7ampNHHfqq4XiZ_rmgWVygHbNqAEbNnztpddR6I/edit?usp=sharing";

function Presentation() {
  const downloadPresentation = () => {
    const link = document.createElement("a");
    link.href = presentationUrl.replace("/edit?usp=sharing", "/export/pdf");
    link.download = "Presentation.pdf";
    link.click();
  };

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="products-services">
          <h4 className="service-heading purple">Products and Services</h4>
          <ul className="service-list" style={{ listStyleType: "none" }}>
            <li>Display Systems and IT Products</li>
            <li>Connectivity and IoT Equipment</li>
            <li>Server Hardware Requirements</li>
            <li>Software - Automation</li>
          </ul>
        </div>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="products-services">
          <h4 className="service-heading purple">Areas of Implementation</h4>
          <ul className="service-list" style={{ listStyleType: "none" }}>
            <li>Offices, hospitals, schools</li>
            <li>Meeting, classroom, and presentation rooms</li>
            <li>Corporate server rooms</li>
            <li>Indoor and outdoor LED advertising panels</li>
            <li>Video walls and outdoor applications</li>
          </ul>
        </div>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="products-services">
          <h4 className="service-heading purple">Project Examples and Customer Feedback</h4>
          <ul className="service-list" style={{ listStyleType: "none" }}>
            <li>Our projects and customer feedback demonstrate that BPC Infrastructure and Automation is a reliable and cost-optimizing business partner.</li>
            <li>Our service process includes the selection of hardware products, on-site cable applications, system testing, and delivery to the end-user.</li>
          </ul>
        </div>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          <strong style={{ color: "#7e3b8e" }}>
            BPC Altyapı&Otomasyon Firma Slayt Dosyası'na buradan ulaşabilirsiniz:
          </strong>
          <br />
          <br />
          <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" />
        </p>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          onClick={downloadPresentation}
          style={{ maxWidth: "250px", marginTop: "20px" }}
        >
          Türkçe Sunum İndirmek İçin Tıklayınız
        </Button>
      </Row>
    </Container>
  );
}

export default Presentation;
