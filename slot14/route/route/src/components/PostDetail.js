import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PostDetail;
