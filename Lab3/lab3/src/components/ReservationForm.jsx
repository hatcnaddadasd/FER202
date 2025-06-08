
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Row, Col, Form, Button, Container } from "react-bootstrap";

function ReservationForm() {
  return (
    <div style={{ backgroundColor: '#1a1a1a'}} className="p-5">
      <Container>
      <h2 className=" text-light text-center mt-3 mb-4">Book your table</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label className="text-light">Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-light">Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formServer">
              <Form.Label className="text-light">Select a Server</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Server 1</option>
                <option>Server 2</option>
                <option>Server 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formTextArea">
              <Form.Label className="text-light">Additional Requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter any additional requests"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="warning" type="submit">
          Send Message
        </Button>
      </Form>
      </Container>
    </div>
  );
}

export default ReservationForm;
