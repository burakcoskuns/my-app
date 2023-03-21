import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">BPC Altyapı&Otomasyon LTD.STI. </span>
           from <span className="purple"> Istanbul, Türkiye.</span>
            <br /> As BPC, The advancement of technology and increasing demands from businesses require processes to be made more efficient, faster, and error-free. To achieve this, it is important to select the most suitable technologies and develop automation software on top of these technologies.

These technologies and software help to perform processes more quickly and accurately, reducing the need for human involvement and preventing process errors. For example, an automation software can be used for an accounting process. This software enables automatic closure of accounts, report generation, and other operations. This reduces the possibility of human errors and ensures that processes are completed more quickly and efficiently. Similarly, an automotive manufacturer can automate sales and distribution processes. For instance, sales and distribution data can be stored in a database and reports can be automatically generated. This reduces the need for human involvement and lowers the probability of process errors.

In conclusion, utilizing the most suitable technologies and automation software helps businesses to make their processes more efficient, faster, and error-free. This increases the efficiency and profitability of the business, providing a competitive advantage
            <br />
            <br />
            Apart from coding, some other activities that we love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Installation of applied visual products
            </li>
            <li className="about-activity">
              <ImPointRight /> Infrastructure support
            </li>
            <li className="about-activity">
              <ImPointRight /> Implementation of applied projects such as commissioning
            </li>
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
