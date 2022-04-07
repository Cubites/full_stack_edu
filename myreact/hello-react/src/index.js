import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // './App.js'와 같은 의미
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* 혹은 <App></App>이라 적어도 됨*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
