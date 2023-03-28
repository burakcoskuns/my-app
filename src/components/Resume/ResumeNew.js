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
          <h4 className="service-heading purple">Ürünler ve Hizmetler</h4>
          <ul className="service-list" style={{ listStyleType: "none" }}>
            <li>Görüntüleme Sistemleri ve IT ürünleri</li>
            <li>Bağlantı ve IoT Ekipmanı</li>
            <li>Server Donanım Gereksinimleri</li>
            <li>Yazılım - Otomasyon</li>
          </ul>
        </div>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="products-services">
          <h4 className="service-heading purple">Uygulama Alanları</h4>
          <ul className="service-list" style={{ listStyleType: "none" }}>
            <li>Ofisler, hastaneler, okullar</li>
            <li>Toplantı, sınıf ve sunum odaları</li>
            <li>Kurumsal sunucu odaları</li>
            <li>İç ve dış mekan LED reklam panoları</li>
            <li>Video duvarları ve açık hava uygulamaları</li>
          </ul>
        </div>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="products-services">
          <h4 className="service-heading purple">Proje Örnekleri ve Müşteri Geri Bildirimleri</h4>
          <ul className="service-list" style={{ listStyleType: "none" }}>
            <li>Projelerimiz ve müşteri geri bildirimleri, BPC Altyapı ve Otomasyon'un güvenilir ve maliyeti optimize eden bir iş ortağı olduğunu göstermektedir.</li>
            <li>Hizmet sürecimiz, donanım ürünlerinin seçimini, yerinde kablo uygulamalarını, sistemin test edilmesini ve son kullanıcıya teslimini içerir.</li>
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
