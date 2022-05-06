import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MainList from './pages/MainList';
import Footer from './components/Footer';
import Detail from './pages/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="outer/:page" element={<MainList />} />
        <Route path="dress/:page" element={<MainList />} />
        <Route path="top/:page" element={<MainList />} />
        <Route path="bottom/:page" element={<MainList />} />
        <Route path="detail/:num" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App