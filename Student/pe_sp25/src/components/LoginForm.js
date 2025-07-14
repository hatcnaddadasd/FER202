import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const res = await axios.get('http://localhost:3001/UserAccounts', {
        params: { username, password }
      });

      if (res.data.length === 0) {
        setError('Invalid username or password!');
        return;
      }

      const user = res.data[0];

      if (user.status !== 'active') {
        setError('Your account is inactive. Please contact admin.');
        return;
      }

      setUser(user);
      setError('');
      setShowModal(true);
    } catch (err) {
      setError('Cannot connect to server!');
    }
  };

  return (
    <>
      <Form onSubmit={handleLogin} className="p-4 border rounded shadow-sm bg-white" style={{ width: 350, margin: 'auto', marginTop: '100px' }}>
        <h3 className="text-center mb-3">Login</h3>

        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome, <strong>{username}</strong>! <br />
          Role: <strong>{username}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default LoginForm;
