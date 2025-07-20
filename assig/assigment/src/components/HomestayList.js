import React, { useEffect, useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomestayList = () => {
  const [Homestays, setHomestays] = useState([]);
  const [error, setError] = useState('');

  const fetchHomestays = async () => {
    try {
      const res = await axios.get('http://localhost:9999/homestays');
      setHomestays(res.data);
    } catch {
      setError('Không thể tải dữ liệu sản phẩm.');
    }
  };

  useEffect(() => {
    fetchHomestays();
  }, []);

  return (
    <div className="container px-4">
      <h2 className="mb-4 text-center fw-bold">Danh sách Homestay</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <div className="mb-3 text-end">
        <Button variant="primary" as={Link} to="/add">+ Thêm homestay</Button>
      </div>

      <div className="row justify-content-center">
        {Homestays.map(Homestay => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={Homestay.id}>
            <Card className="w-100 shadow rounded-4 text-center">
              {Homestay.image && (
                <Card.Img
                  variant="top"
                  src={Homestay.image}
                  alt={Homestay.name}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem'
                  }}
                />
              )}
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-semibold fs-5">{Homestay.name}</Card.Title>
                  <Card.Text className="text-muted small">{Homestay.description}</Card.Text>
                </div>
                <div>
                  <Card.Text className="my-2">
                    <del className="text-muted">{Homestay.price}đ</del><br />
                    <strong className="text-danger fs-5">{Homestay.currentPrice}đ</strong>

                  </Card.Text>
                  <Button
                    variant="outline-info"
                    as={Link}
                    to={`/homestays/${Homestay.id}`}
                    className="w-100 rounded-pill"
                  >
                    Xem chi tiết
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomestayList;
