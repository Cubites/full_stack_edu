import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginSuccess from './components/LoginSuccess';
import LoginFail from './components/LoginFail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Routes path={"/login"} element={<Login />} />
        <Routes path={"/loginOk"} element={<LoginSuccess />} />
        <Routes path={"/loginNo"} element={<LoginFail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App