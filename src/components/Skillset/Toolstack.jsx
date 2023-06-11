import React from "react";
import { Col, Row } from "react-bootstrap";


import {
  SiVisualstudiocode,
  SiGithub,
  SiAdobephotoshop,
  SiCanva,
  SiYoutube,
  SiGooglecalendar,
  SiGoogleanalytics,
  SiYoutubestudio,
  SiAnydesk,
  SiBootstrap
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYoutube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecalendar />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnydesk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYoutubestudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
          <br />

          
      
    </Row>
  );
}

export default Toolstack;
