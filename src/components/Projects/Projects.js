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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gram Games"
              description="Gmail-O365 migration, server odası kurulumu, WLC cihazlarının kurulumu ve desteği, IoT ürün satın alımları, çalışan onboarding-offboarding süreçlerinin otomasyonu."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Vivise"
              description="Son kullanıcı desteği, Jira süreçlerinin otomasyonu, döküman yönetimi, Airtable süreçlerinin yönetimi, Microsoft Power BI Tool kurulumu ve otomasyonları"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Özyadın Otomotiv"
              description="İşe giriş-çıkış süreçlerinin otomasyonu, Terminal server yönetimi,disaster recovery uygulaması ve testleri, sunucuya yüklenen satış dosyalarının ilgili satış bölgelerine dağıtılması, stok takip programı entegrasyonu."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Gi Group"
              description="Webinar ve toplantı odaları altyapı tasarımı, görüntü ekipmanı temini ve kablolama altyapı uygulaması."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Uncosoft"
              description="Uzak ofis kurulum desteği, ISP yapılandırılması, kullanıcı network yetkilendirilmesi ve otomatik departman yönetimi, Active Directory workflow yönetimi, Exchange DAG yapısı kurulumu ve yönetimi."
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Rollic Games"
              description="İstanbul ofis kurulumu, Nutanix Server OnPrem software kurulumu ve merkez ofis ile entegrasyonu, toplantı odalarının düzenlenmesi ve ürün tedarikleri, Zoom meeting cihazlarının merkez ofis ile birleştirilmesi, ISP hattı sonlandırılması, RadioLink secondary gateway kurulumları."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
