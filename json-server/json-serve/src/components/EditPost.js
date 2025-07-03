import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then((res) => {
                if (res.data && res.data.title) {
                    setTitle(res.data.title);
                    setContent(res.data.content);
                    setStatus(""); // clear lỗi cũ nếu có
                } else {
                    setStatus("Không tìm thấy bài viết.");
                }
            })
            .catch((err) => {
                console.error("Lỗi khi gọi API:", err);
                setStatus("Không tìm thấy bài viết.");
            });
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            setStatus("Tiêu đề và nội dung không được để trống!");
            return;
        }

        try {
            await axios.put(`http://localhost:3000/posts/${id}`, { title, content });
            navigate("/");
        } catch (err) {
            setStatus("Lỗi khi cập nhật bài viết.");
        }
    };

    return (
        <Container className="mt-4">
            <h2>Chỉnh sửa bài viết</h2>
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
                <Button type="submit" variant="primary">Cập nhật</Button>
            </Form>
        </Container>
    );
};

EditPost.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default EditPost;
