import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute';
import LaptopDetail from './components/LaptopDetail';
import NotFound from './components/NotFound';
import LoginPage from './components/LoginPage';
import LaptopList from './components/LaptopList';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />

        <Route
          path="/laptops"
          element={<PrivateRoute user={user}><LaptopList /></PrivateRoute>}
        />
        <Route
          path="/laptops/:id"
          element={<PrivateRoute user={user}><LaptopDetail /></PrivateRoute>}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
