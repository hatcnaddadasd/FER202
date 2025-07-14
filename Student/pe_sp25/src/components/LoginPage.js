import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const res = await axios.get('http://localhost:3001/UserAccounts', {
        params: { username, password },
      });

      if (res.data.length === 0) {
        setError('Invalid username or password!');
        return;
      }

      const user = res.data[0];
      if (user.status !== 'active') {
        setError('Account is inactive.');
        return;
      }

      setUser(user);
      navigate('/laptops');
    } catch {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button type="submit" className="w-100">Login</Button>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      </Form>
    </Container>
  );
};

LoginPage.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginPage;
