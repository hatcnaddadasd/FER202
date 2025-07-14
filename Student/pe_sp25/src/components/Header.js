import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <Container fluid className="bg-light py-2 mb-3">
      <Row className="align-items-center">
        <Col>
          <h5 className="ms-3">Laptop Management</h5>
        </Col>
        <Col className="text-end me-3">
          {user ? (
            <>
              <span className="me-3">👋 Hello, <strong>{user.username}</strong></span>
              <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
