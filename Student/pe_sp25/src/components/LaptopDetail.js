import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const LaptopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // 👈 Hook để điều hướng
  const [laptop, setLaptop] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    axios.get(`http://localhost:3001/Laptops/${id}`)
      .then(res => {
        setLaptop(res.data);
      })
      .catch(() => {
        setError('Laptop not found');
      });
  }, [id]);

  if (error) return <h2>{error}</h2>;
  if (!laptop) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={laptop.image} alt={laptop.model} width="300" />
      <h3>{laptop.brand} {laptop.model}</h3>
      <p><strong>Year:</strong> {laptop.year}</p>
      <p><strong>Price:</strong> {laptop.price}</p>
      <p><strong>Description:</strong> {laptop.description || 'No description available'}</p>

      <Button
        variant="primary"
        className="mt-3"
        onClick={() => navigate('/laptops')}
      >
        Back to Laptop List
      </Button>
    </div>
  );
};

export default LaptopDetail;
