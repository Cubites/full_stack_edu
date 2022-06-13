import React from 'react';
import RestList from './components/RestList';
import Paging from './components/Paging';
import RestWriter from './components/RestWrite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<RestList />}/>
          <Route path="write" element={<RestWriter />}/>
        </Routes>
      </BrowserRouter>
      <Paging />
    </div>
  )
}

export default App