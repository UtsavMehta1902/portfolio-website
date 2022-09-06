import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import githubIcon from "../assets/img/github5.svg";
import cfIcon from '../assets/img/code-forces1.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="align-items-center">
          <Col className="text-center social-links">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/utsav-m/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/UtsavMehta19/"><img src={navIcon2} alt="" /></a>
                <a href="https://codeforces.com/profile/utsavm"><img src={cfIcon} alt="" /></a>
              </div>
              <div className="social-icon-gh">
                <a href="https://github.com/UtsavMehta1902"><img src={githubIcon} alt="" /></a>
              </div>           
          </Col>
          <p className="text-center">Copyright 2022. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  )
}
