import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const ValidatedLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);  
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // Validate Email
  useEffect(() => {
    setEmailValid(isValidEmail(email));
  }, [email]);

  // Validate Password
  useEffect(() => {
    setPasswordValid(password.length >= 8);
  }, [password]);

  const isFormValid = emailValid && passwordValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      {/* Email Field */}
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          isInvalid={emailTouched && !emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ. Vui lòng nhập lại!
        </Form.Control.Feedback>
      </Form.Group>

      {/* Password Field */}
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          isInvalid={passwordTouched && !passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự!
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
};

export default ValidatedLoginForm;
