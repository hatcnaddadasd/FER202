import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Fetch failed:', err));
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">📚 Danh sách bài viết</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map(post => (
          <Col key={post.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title>
                  <Link
                    to={`/post/${post.id}`}
                    className="text-decoration-none text-primary"
                  >
                    {post.title}
                  </Link>
                </Card.Title>
                <Card.Text className="text-muted">
                  {post.content.substring(0, 60)}...
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-light text-end">
                <Link to={`/post/${post.id}`} className="btn btn-sm btn-outline-primary">
                  Xem chi tiết
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Post;
