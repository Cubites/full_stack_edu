import React from 'react';
// import ReactDOM from 'react-dom' -- react 18 이전
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // './App.js'와 같은 의미
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');

// ReactDom.render( << react 18 이전
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App /> {/* 혹은 <App></App>이라 적어도 됨*/}
  </React.StrictMode>,
  // document.getElementById('root')  << react 18 이전
);

reportWebVitals();
