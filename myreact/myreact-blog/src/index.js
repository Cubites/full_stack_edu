import React from 'react';
// import ReactDOM, { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App></App>);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);