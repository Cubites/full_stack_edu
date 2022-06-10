import React from 'react';
import CookieSave from './components/CookieSave';
import CookieLoad from './components/CookieLoad';
import CookieRemove from './components/CookieRemove';

const App = () => {
  const userid = "cookieSaveMan";
  return (
    <div>
      <CookieSave userid={userid}/>
      <CookieLoad />
      <CookieRemove />
    </div>
  )
}

export default App