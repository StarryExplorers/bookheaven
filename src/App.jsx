import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './pages/Dashboard';
import Reader from './pages/Reader';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reader/:bookId" element={<Reader />} />
    </Routes>
  );
}

export default App;
