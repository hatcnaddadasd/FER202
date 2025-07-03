import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setStatus("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      return;
    }

    if (username === "admin" && password === "123") {
      setStatus(`Login successfully with username: ${username}`);
      setTimeout(() => {
        navigate("/posts");
      }, 1500);
    } else {
      setStatus("Sai tên đăng nhập hoặc mật khẩu.");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "400px" }}>
      <h3>Đăng nhập</h3>
      {status && <Alert variant={status.includes("successfully") ? "success" : "danger"}>{status}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
};

export default Login;
