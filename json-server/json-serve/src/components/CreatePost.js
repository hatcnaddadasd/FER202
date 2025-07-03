import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            setStatus("Tiêu đề và nội dung không được để trống!");
            return;
        }

        try {
            await axios.post("http://localhost:3000/posts", { title, content });
            navigate("/");
        } catch (err) {
            setStatus("Lỗi khi tạo bài viết.");
        }
    };

    return (
        <Container className="mt-4">
            <h2>Thêm bài viết mới</h2>
            <Button onClick={() => navigate("/")} variant="secondary">
                Quay về trang danh sách
            </Button>
            {status && <Alert variant="danger">{status}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tiêu đề</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Nhập tiêu đề"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nội dung</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Nhập nội dung"
                    />
                </Form.Group>
                <Button type="submit" variant="success">Tạo bài viết</Button>
            </Form>
        </Container>
    );
};

CreatePost.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default CreatePost;
