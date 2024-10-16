import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import QRCode from "../../Assets/QRCode.png"; // QR kodunun proje içindeki yolu

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

      {/* Ürünler ve Hizmetler Bölümü */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="products-services">
          <h4 className="service-heading purple">Products and Services</h4>
          <ul className="service-list" style={{ listStyleType: "none" }}>
            <li>Display Systems and IT Products</li>
            <li>Smart Office and Home Automation</li>
            <li>Connectivity and IoT Equipment</li>
            <li>Server Hardware Requirements</li>
            <li>Software - Automation</li>
          </ul>
        </div>
      </Row>

      {/* Uygulama Alanları Bölümü */}
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

      {/* Proje Örnekleri ve Müşteri Geri Bildirimleri Bölümü */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="products-services">
          <h4 className="service-heading purple">Project Examples and Customer Feedback</h4>
          <ul className="service-list" style={{ listStyleType: "none" }}>
            <li>Our projects and customer feedback demonstrate that BPC Infrastructure and Automation is a reliable and cost-optimizing business partner.</li>
            <li>Our service process includes the selection of hardware products, on-site cable applications, system testing, and delivery to the end-user.</li>
          </ul>
        </div>
      </Row>

      {/* Sunum İndirme Butonu */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          <strong style={{ color: "#7e3b8e" }}>
           You can access the BPC Infrastructure & Automation Company Slide File here:
          </strong>
          <br />
          <br />
          <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" />
        </p>
        <Button
          variant="primary"
          onClick={downloadPresentation}
          style={{ maxWidth: "250px", marginTop: "20px" }}
        >
          Click here to download the Turkish presentation
        </Button>
      </Row>

      {/* QR Kodu Eklenen Bölüm */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          <strong style={{ color: "#7e3b8e" }}>
            Scan the QR code for our company references and projects.
          </strong>
          <br /><br />
          <a href="https://www.canva.com/design/DAFkS5xT0rM/-z6GLwKgLrF4hAB4ELaE0Q/view?utm_content=DAFkS5xT0rM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer">
            <img src={QRCode} alt="BPC Altyapı&Otomasyon QR Kodu" style={{ width: "250px", height: "250px" }} />
          </a>
        </p>
      </Row>
    </Container>
  );
}

export default Presentation;
