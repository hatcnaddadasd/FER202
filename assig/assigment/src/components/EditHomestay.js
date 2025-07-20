import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditHomestayPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [Homestay, setHomestay] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:9999/homestays/${id}`)
      .then(response => {
        setHomestay(response.data);
      })
      .catch(() => {
        alert('Lỗi khi tải dữ liệu sản phẩm!');
      });
  }, [id]);

  const validate = () => {
    const newErrors = {};

    if (!Homestay.name) newErrors.name = 'Tên không được để trống';
    if (!Homestay.description) newErrors.description = 'Mô tả không được để trống';
    if (!Homestay.price) newErrors.price = 'Giá không được để trống';
    if (!Homestay.currentPrice) newErrors.currentPrice = 'Giá KM không được để trống';
    if (!Homestay.image) newErrors.image = 'Ảnh không được để trống';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHomestay({ ...Homestay, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setShowAlert(true);
      return;
    }

    try {
      await axios.put(`http://localhost:9999/homestays/${id}`, Homestay);
      setSuccessMessage('✅ Cập nhật thành công!');
      setShowAlert(false);
            navigate(`/homestays/${id}`);
    } catch (error) {
      alert('Lỗi khi cập nhật sản phẩm!');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cập nhật sản phẩm</h2>

      {showAlert && Object.keys(errors).length > 0 && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <ul className="mb-0">
            {Object.values(errors).map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      {successMessage && (
        <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
          {successMessage}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={Homestay.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={Homestay.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="price" className="mb-3">
          <Form.Label>Giá</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={Homestay.price}
            onChange={handleChange}
            isInvalid={!!errors.price}
          />
          <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="currentPrice" className="mb-3">
          <Form.Label>Giá khuyến mãi</Form.Label>
          <Form.Control
            type="text"
            name="currentPrice"
            value={Homestay.currentPrice}
            onChange={handleChange}
            isInvalid={!!errors.currentPrice}
          />
          <Form.Control.Feedback type="invalid">{errors.currentPrice}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="image" className="mb-3">
          <Form.Label>Ảnh</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={Homestay.image}
            onChange={handleChange}
            isInvalid={!!errors.image}
          />
          <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Lưu thay đổi
        </Button>
      </Form>
    </div>
  );
};

export default EditHomestayPage;
