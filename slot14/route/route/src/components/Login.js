import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate thông tin đăng nhập
    if (username === 'admin' && password === '123456') {
      navigate('/posts'); // chuyển hướng sau khi đăng nhập thành công
    } else {
      setErrorMsg('Sai tên đăng nhập hoặc mật khẩu!');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Đăng nhập</h2>

      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            value={username}
            placeholder="Nhập tên đăng nhập"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Nhập mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
