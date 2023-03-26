import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

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
    <div className="summary">
      <h3>About BPC Altyapı ve Otomasyon</h3>
      <p>
        BPC Altyapı ve Otomasyon is an engineering procurement construction (EPC) firm and IT infrastructure solution partner. We supply hardware and software products and provide on-site implementation and after-sales support services to companies in various sectors and fields.
      </p>
    </div>
  </Row>

  <Row style={{ justifyContent: "center", position: "relative" }}>
    <div className="products-services">
      <h4 className="service-heading">Products and Services</h4>
      <ul className="service-list">
        Görüntüleme Sistemleri ve IT ürünleri
        <li>Bağlantı ve IoT Ekipmanı</li>
        <li>Server Donanım Gereksinimleri</li>
        <li>Yazılım - Otomasyon</li>
      </ul>
    </div>

    <div className="application-areas">
      <h4>Application Areas</h4>
      <ul>
        <li>Offices, hospitals, schools</li>
        <li>Meeting, classroom, and presentation rooms</li>
        <li>Retail work areas</li>
        <li>Corporate server rooms</li>
        <li>Indoor and outdoor LED advertising panels</li>
        <li>Videowalls and outdoor applications</li>
      </ul>
    </div>
  </Row>

  <Row style={{ justifyContent: "center", position: "relative" }}>
    <div className="service-process">
      <h4>Service Process</h4>
      <p>
        Our service process includes selecting hardware products, on-site cabling implementations, testing the system, and delivering it to the end-user.
      </p>
    </div>

    <div className="customer-feedback">
      <h4>Examples of Projects and Customer Feedback</h4>
      <p>
        Our projects and customer feedback demonstrate that BPC Altyapı ve Otomasyon is a reliable and cost-optimizing business partner.
      </p>
    </div>
  </Row>

  <Row style={{ justifyContent: "center", position: "relative" }}>
    <div className="contact-information">
      <h4>Contact Information</h4>
      <p>
        Bpc Altyapı ve Otomasyon Sistemleri Ltd.Şti.<br />
        TR Address: Cihangir Mah. İleri Sk. No:24 Avcılar Istanbul<br />
        Çağrı Arslan - Proje Satış Mühendisi +(90)5336128286<br />
        Burak Coşkun - Satış Müh. & IT Developer +(90)5332811654 / +(1)8628727072<br />
Mail: info@bpcaltyapi.com
</p>
</div>
<Button
variant="primary"
onClick={downloadPresentation}
style={{ maxWidth: "250px", marginTop: "20px" }}
>
Download Presentation
</Button>
</Row>
</Container>
);
}

export default Presentation;
