import React from "react";
import Card from "react-bootstrap/Card";
/*import { ImPointRight } from "react-icons/im";*/

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textJustify: "auto" }}>
            <br />BPC Altyapı&Otomasyon: Teknoloji ve İnovasyon İle İş Süreçlerinizi Dönüştürün
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />BPC Altyapı&Otomasyon, İstanbul, Türkiye merkezli bir EPC (engineering procurement construction) firmasıdır. Hedefimiz, tüm sektör ve alanlarda faaliyet gösteren firmalara bilgi teknolojileri ve donanımsal ürün tedariği sağlamak, projelerin uygulanması ve devreye alınması süreçlerinde baştan sona destek vermek ve yazılımsal otomasyon hizmetleri sunarak süreçlerin daha verimli, hızlı ve hatasız hale getirilmesine katkıda bulunmaktır.
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />Deneyimli ve uzman ekibimizle, ofisler, hastaneler, okullar, toplantı ve sunum salonları, perakende çalışma sahaları, kurum server odaları ve iç-dış mekan LED reklam panelleri gibi geniş bir uygulama alanında hizmet vermekteyiz.
            <p style={{ textAlign: "left", textJustify: "auto" }}>
          </p> 
            <br />Görüntüleme sistemleri, IT ürünleri, bağlantı ve IoT ekipmanları, server donanım gereksinimleri ve yazılım otomasyonu gibi kapsamlı hizmetlerimizle, iş süreçlerinizi ve altyapınızı dönüştürerek maliyet optimizasyonu, yeni ihtiyaçlara göre entegrasyon ve iyileştirme konularında size destek oluyoruz.
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />Talep edilen kullanım amacına göre uyumlu tüm donanım ürünlerini seçmekte, yerinde kablolama uygulamalarını gerçekleştirmekte, tüm sistemin testlerini yaparak kullanıma en kolay hale getirerek “tak-çalıştır” durumunda nihai kullanıcıya teslim etmekteyiz.
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />Satış ve kurulum sonrası ek hizmetlerimizle, periyodik bakım, onarım, yazılım güvenliği ve depolama desteği sağlayarak sürekli iyileştirme ve sistemlerin korunmasına önem veriyoruz. Müşteri geri bildirimlerine büyük değer atfederek, güven, donanım ve yazılımların sorunsuz işleyişi konularında süreklilik sağlayan ilişkiler kuruyoruz.
          </p>
          <p style={{ textAlign: "left", textJustify: "auto" }}>
            <br />BPC Altyapı&Otomasyon olarak, "işlerin fark yaratan şekilde inşa edilmesi" için çaba gösteriyoruz. İş süreçlerinizin teknoloji ve inovasyonla dönüşümüne katkı sağlayarak sizlere rekabet avantajı sunmayı hedefliyoruz. Bizimle çalışarak, iş süreçlerinizi daha verimli, hızlı ve hatasız hale getirecek teknolojiler ve otomasyon yazılımları kullanarak iş dünyasında öne çıkabilirsiniz.
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
