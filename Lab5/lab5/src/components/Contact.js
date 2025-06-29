import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'firstName':
            case 'lastName':
                error = value.trim() ? '' : 'Please provide a valid ' + name.toLowerCase() + '.';
                break;
            case 'username':
                error = value.trim() ? '' : 'Please choose a username.';
                break;
            case 'city':
                error = value.trim() ? '' : 'Please provide a valid city.';
                break;
            case 'state':
                error = value.trim() ? '' : 'Please provide a valid state.';
                break;
            case 'zip':
                error = /^\d{5}$/.test(value) ? '' : 'Please provide a valid zip.';
                break;
            case 'terms':
                error = value ? '' : 'You must agree to terms and conditions.';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });

        const error = validateField(name, newValue);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            newErrors[key] = validateField(key, formData[key]);
        });
        setErrors(newErrors);

        if (Object.values(newErrors).every((error) => !error)) {
            setSubmitted(true);
            setTimeout(() => {
                setFormData({
                    firstName: '',
                    lastName: '',
                    username: '',
                    city: '',
                    state: '',
                    zip: '',
                    terms: false,
                });
                setSubmitted(false);
                setErrors({});
            }, 2000);
        }
    };

    return (
        <div className="contact-form container mt-4">
            <h1>Contact Us</h1>
            {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
            <Form onSubmit={handleSubmit} noValidate>
                <div className="row">
                    {/* First Name */}
                    <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                                isValid={formData.firstName && !errors.firstName}
                            />
                            {errors.firstName ? (
                                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                            ) : (
                                formData.firstName && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                                isValid={formData.lastName && !errors.lastName}
                            />
                            {errors.lastName ? (
                                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                            ) : (
                                formData.lastName && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>

                    {/* Username */}
                    <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                isInvalid={!!errors.username}
                                isValid={formData.username && !errors.username}
                            />
                            {errors.username ? (
                                <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                            ) : (
                                formData.username && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    {/* City */}
                    <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                                isValid={formData.city && !errors.city}
                            />
                            {errors.city ? (
                                <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                            ) : (
                                formData.city && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>

                    {/* State */}
                    <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                                isValid={formData.state && !errors.state}
                            />
                            {errors.state ? (
                                <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
                            ) : (
                                formData.state && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>

                    {/* Zip */}
                    <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="formZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                isInvalid={!!errors.zip}
                                isValid={formData.zip && !errors.zip}
                            />
                            {errors.zip ? (
                                <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
                            ) : (
                                formData.zip && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>
                </div>

                {/* Terms */}
                <Form.Group className="mb-3" controlId="formTerms">
                    <Form.Check
                        type="checkbox"
                        name="terms"
                        label="I agree to terms and conditions."
                        checked={formData.terms}
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        isValid={formData.terms && !errors.terms}
                    />
                    {errors.terms ? (
                        <Form.Control.Feedback type="invalid">{errors.terms}</Form.Control.Feedback>
                    ) : (
                        formData.terms && <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit form
                </Button>
            </Form>
        </div>
    );
}

export default Contact;
