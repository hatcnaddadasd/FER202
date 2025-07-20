import React, { useEffect, useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddHomestayPage = () => {
  const [Homestays, setHomestays] = useState([]);
  const [newHomestay, setNewHomestay] = useState({
    name: '', description: '', price: '', currentPrice: ''
  });
  const [errors, setErrors] = useState({});

  const fetchHomestays = async () => {
    try {
      const res = await axios.get('http://localhost:9999/homestays');
      setHomestays(res.data);
    } catch {
      console.error('Không thể tải dữ liệu sản phẩm.');
    }
  };

  useEffect(() => {
    fetchHomestays();
  }, []);

  const validate = () => {
    const err = {};
    if (!newHomestay.name.trim()) err.name = 'Tên không được để trống';
    if (!newHomestay.description.trim()) err.description = 'Mô tả không được để trống';
    if (!newHomestay.price.trim()) {
      err.price = 'Giá không được để trống';
    } else if (isNaN(newHomestay.price)) {
      err.price = 'Giá phải là số';
    }
    if (!newHomestay.currentPrice.trim()) {
      err.currentPrice = 'Giá KM không được để trống';
    } else if (isNaN(newHomestay.currentPrice)) {
      err.currentPrice = 'Giá KM phải là số';
    }
    return err;
  };

  const handleAdd = async () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await axios.post('http://localhost:9999/homestays', newHomestay);
      setHomestays([...Homestays, res.data]);
      setNewHomestay({ name: '', description: '', price: '', currentPrice: '' });
      setErrors({});
    } catch {
      console.error('Lỗi khi thêm sản phẩm');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9999/homestays/${id}`);
      setHomestays(Homestays.filter(p => p.id !== id));
    } catch {
      console.error('Lỗi khi xoá sản phẩm');
    }
  };

  return (
    <div>
      <h3 className="mb-4">Thêm sản phẩm</h3>
      <div className="mb-3 text-end">
        <Button variant="secondary" as={Link} to="/">Quay lại trang chủ</Button>
      </div>

      <Form className="mb-4">
        <Form.Group className="mb-2">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            value={newHomestay.name}
            onChange={e => setNewHomestay({ ...newHomestay, name: e.target.value })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            value={newHomestay.description}
            onChange={e => setNewHomestay({ ...newHomestay, description: e.target.value })}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            value={newHomestay.price}
            onChange={e => setNewHomestay({ ...newHomestay, price: e.target.value })}
            isInvalid={!!errors.price}
          />
          <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Current Price:</Form.Label>
          <Form.Control
            value={newHomestay.currentPrice}
            onChange={e => setNewHomestay({ ...newHomestay, currentPrice: e.target.value })}
            isInvalid={!!errors.currentPrice}
          />
          <Form.Control.Feedback type="invalid">{errors.currentPrice}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" onClick={handleAdd}>Add Homestay</Button>
      </Form>

      <h4>Danh sách sản phẩm</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Current Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Homestays.map((p, index) => (
            <tr key={p.id}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td><del>{p.price}</del></td>
              <td><strong>{p.currentPrice}</strong></td>
              <td><Button variant="danger" size="sm" onClick={() => handleDelete(p.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AddHomestayPage;
