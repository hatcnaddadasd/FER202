import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Container, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLaptops, setFilteredLaptops] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/Laptops')
      .then(res => {
        setLaptops(res.data);
        setFilteredLaptops(res.data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  // 🔄 Tự động cập nhật khi searchTerm thay đổi
  useEffect(() => {
    const keyword = searchTerm.toLowerCase();
    if (keyword === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter(l =>
        l.brand.toLowerCase().includes(keyword) ||
        l.model.toLowerCase().includes(keyword)
      );
      setFilteredLaptops(filtered);
    }
  }, [searchTerm, laptops]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Laptop List</h2>

      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Search by brand or model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 👈 Không cần nút Search
        />
      </InputGroup>

      <Row xs={1} md={2} lg={4}>
        {filteredLaptops.map(laptop => (
          <Col key={laptop.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={laptop.image} height="180" />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {laptop.year}<br />
                  <strong>Price:</strong> {laptop.price}
                </Card.Text>
                <Link to={`/laptops/${laptop.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredLaptops.length === 0 && (
        <p className="text-center mt-3 text-danger">No laptops found.</p>
      )}
    </Container>
  );
};

export default LaptopList;
