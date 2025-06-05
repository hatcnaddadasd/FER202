import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function HeaderWithBorderBox() {
  return (
    <Container className="my-4">
      <div className="custom-border-box p-3 bg-white mx-auto">
        <Row className="align-items-center">
          {/* Logo bên trái */}
          <Col xs={12} md={5} className="text-center text-md-start">
            <Image
              src="logofpt.jpg"
              alt="Logo"
              fluid
              className="custom-logo"
            />
          </Col>

          {/* Văn bản bên phải */}
          <Col xs={12} md={7} className="text-center text-md-end mt-3 mt-md-0">
            <h4 className="mb-1">Hoai Nguyen-FPT DaNang</h4>
            <p className="hehe mb-0 text-end">Moblie: 0982827763</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HeaderWithBorderBox;
