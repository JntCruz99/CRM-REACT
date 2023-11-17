import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
