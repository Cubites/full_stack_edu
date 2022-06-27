import React from 'react';
import './App.css';
import './css/grid.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App