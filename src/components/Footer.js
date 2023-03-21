import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://www.instagram.com/bpcshoptr/"
              style={{ color: "white", fontSize: "24px" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li className="social-icons">
            <span style={{ marginRight: "10px" }}></span>
            <a
              href="https://www.hepsiburada.com/magaza/bpcshop"
              style={{ color: "white", fontSize: "24px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineShopping />
            </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
