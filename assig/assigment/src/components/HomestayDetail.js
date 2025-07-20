import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const HomestayDetail = () => {
  const { id } = useParams();
  const [Homestay, setHomestay] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9999/homestays/${id}`)
      .then(res => setHomestay(res.data))
      .catch(() => console.log('Lỗi khi tải sản phẩm'));
  }, [id]);

  if (!Homestay) return <p className="text-center mt-5">Đang tải...</p>;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg text-center">
            {Homestay?.image && Homestay.image.trim() !== '' && (
              <Card.Img
                variant="top"
                src={Homestay.image}
                alt={Homestay.name}
                style={{ height: '300px', objectFit: 'contain', padding: '1rem' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            )}
            <Card.Body>
              <Card.Title className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {Homestay.name}
              </Card.Title>
              <Card.Text className="mb-2" style={{ fontStyle: 'italic' }}>
                {Homestay.description}
              </Card.Text>
              <Card.Text className="mb-4">
                <del className="text-muted me-2">{Homestay.price}</del>
                <strong className="text-success">{Homestay.currentPrice}</strong>
              </Card.Text>
              <div className="d-flex justify-content-center gap-3">
                <Button as={Link} to={`/edit/${Homestay.id}`} variant="warning">
                  Chỉnh sửa
                </Button>
                <Button variant="secondary" onClick={() => navigate('/')}>
                  Về trang chủ
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomestayDetail;
