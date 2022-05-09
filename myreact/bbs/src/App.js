import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Write from './pages/Write'
import Read from './pages/Read'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="write" element={<Write />} />
        <Route path="edit/:id" element={<Write />} />
        <Route path="read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App