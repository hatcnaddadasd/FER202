import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/HomestayList';
import ProductDetail from './components/HomestayDetail';
import AddProductPage from './components/AddHomestayPage';
import EditProduct from './components/EditHomestay'; // ✅ Thêm dòng này

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/homestays/:id" element={<ProductDetail />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/edit/:id" element={<EditProduct />} /> {/* ✅ Thêm route này */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
