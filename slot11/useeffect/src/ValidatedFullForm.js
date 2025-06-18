import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function ValidatedFullForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    agreed: false,
  });

  const nameValid = name.trim().length >= 3;
  const genderValid = gender !== "";
  const countryValid = country !== "";
  const agreedValid = agreed === true;

  const isFormValid = nameValid && genderValid && countryValid && agreedValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      {/* Name */}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          isInvalid={touched.name && !nameValid}
        />
        <Form.Control.Feedback type="invalid">
          Name must be at least 3 characters long
        </Form.Control.Feedback>
      </Form.Group>

      {/* Gender */}
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <div onBlur={() => setTouched((t) => ({ ...t, gender: true }))}>
          <Form.Check
            inline
            type="radio"
            label="Male"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Other"
            name="gender"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {touched.gender && !genderValid && (
          <div className="text-danger">Please select a gender</div>
        )}
      </Form.Group>

      {/* Country */}
      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, country: true }))}
          isInvalid={touched.country && !countryValid}
          isValid={touched.country && countryValid}
        >
          <option value="">-- Select a country --</option>
          <option>Hà Nội</option>
          <option>Đà Nẵng</option>
          <option>TP. Hồ Chí Minh</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select a country
        </Form.Control.Feedback>
      </Form.Group>

      {/* Terms & Conditions */}
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          onBlur={() => setTouched((t) => ({ ...t, agreed: true }))}
          isInvalid={touched.agreed && !agreedValid}
          feedback="You must agree before submitting."
        />
        {touched.agreed && !agreedValid && (
          <div className="text-danger">You must agree to the terms and conditions</div>
        )}
      </Form.Group>

      {/* Submit */}
      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
}

export default ValidatedFullForm;
