import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  Modal,
  Spinner,
} from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy dữ liệu:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async () => {
    if (!postToDelete || !postToDelete.id) {
      console.warn("Không có bài viết nào được chọn để xóa.");
      return;
    }

    try {
      console.log("Xóa bài viết ID:", postToDelete.id);
      await axios.delete(`http://localhost:3000/posts/${postToDelete.id}`);
      setData(data.filter((p) => p.id !== postToDelete.id));
      setShowConfirm(false);
      setPostToDelete(null); // Reset lại
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };


  if (loading) return <Spinner animation="border" className="m-3" />;

  return (
    <Container className="mt-4">
      <h2>Danh sách bài viết</h2>
      <Button as={Link} to="/create" variant="primary" className="mb-3">
        + Tạo bài viết mới
      </Button>
      <Row>
        {data.map((post) => (
          <Col key={post.id} sm={12} md={6} lg={4} className="mb-3">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>

                <div className="mt-auto">
                  <Button
                    as={Link}
                    to={`/edit/${post.id}`}
                    variant="warning"
                    size="sm"
                    className="me-2"
                  >
                    Chỉnh sửa
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setPostToDelete(post);
                      setShowConfirm(true);
                    }}
                  >
                    Xóa
                  </Button>
                </div>
              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>

      {/* Modal xác nhận xóa */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa bài viết này?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>Hủy</Button>
          <Button variant="danger" onClick={handleDelete}>Xóa</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PostList;
