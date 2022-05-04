import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainList from './pages/MainList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="outer/:page" element={<MainList />} />
        <Route path="dress/:page" element={<MainList />} />
        <Route path="top/:page" element={<MainList />} />
        <Route path="bottom/:page" element={<MainList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App