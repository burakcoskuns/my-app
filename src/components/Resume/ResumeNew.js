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

  const summary = `
BPC Altyapı ve Otomasyon, sektör ve alanlarda üreten/hizmet veren firmalara bilgi teknolojileri ve donanımsal ürün tedariği sağlayan, yerinde uygulama ve satış sonrası destek hizmetleri sunan, proje bazlı çalışabilen bir bilgi işlem-altyapı çözüm ortağı ve EPC (engineering procurement construction) firmasıdır. İlave olarak, görüntüleme sistemlerinde kullanılan LED panel ve projeksiyon cihazları uygulamaları haricinde yazılımsal otomasyon hizmeti ve desteği de sağlamaktadır.

Hizmetler ve Ürünler:
- Görüntüleme Sistemleri ve IT ürünleri
- Bağlantı ve IoT Ekipmanı
- Server Donanım Gereksinimleri
- Yazılım - Otomasyon

Uygulama Alanları:
- Ofisler, hastaneler, okullar
- Toplantı, sınıf ve sunum salonları
- Perakende çalışma sahaları
- Kurum server odaları
- İç-dış mekan LED reklam panelleri
- Videowall, dış mekan uygulamalar

Hizmet süreci, donanım ürünlerinin seçilmesi, yerinde kablolama uygulamalarının yapılması, sistemin test edilip kullanıma hazır hale getirilerek nihai kullanıcıya teslim edilmesini kapsar.

Örnek projeler ve müşteri geri bildirimleri, BPC Altyapı ve Otomasyon'un güvenilir ve maliyet optimizasyonu sağlayan bir iş ortağı olduğunu göstermektedir.

İletişim Bilgileri:
Bpc Altyapı ve Otomasyon Sistemleri Ltd.Şti.
TR Adres: Cihangir mah. İleri sk. No:24 Avcılar İstanbul
Çağrı Arslan - Proje Satış Mühendisi +(90)5336128286
Burak Coşkun - Satış Müh. & IT Developer +(90)5332811654 / +(1)8628727072
Mail: info@bpcaltyapi.com
  `;


  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          You can find the detailed presentation file about our company attached below. BPC Infrastructure and Automation Systems are designed to meet the technological needs of businesses and to increase the efficiency and accuracy of their processes. Our fundamental philosophy is to organize the structuring of businesses in line with their corporate identities, to use the most suitable technologies with the right products and prices at the right time, and to produce automation software for these systems. As a result, business processes become faster, more efficient, and more accurate. In addition, the need for human resources is reduced and the likelihood of process errors is minimized. This provides a competitive advantage by increasing the efficiency and profitability of businesses. BPC Infrastructure and Automation Systems help businesses meet their technological needs and increase the efficiency and accuracy of their processes. This helps businesses increase their competitive advantage and aim to organize their structure in line with their corporate identities.
          <br />
          <a href={presentationUrl} download="Detailed Slide and/or PPT File">
            Detailed Slide and/or PPT File
          </a>{" "}
          as an attachment.
        </p>
        <p style={{ marginTop: "20px", textAlign: "center" }}>{summary}</p>
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