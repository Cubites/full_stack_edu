import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import CallMiddleWare from './CallMiddleWare'

const store = createStore(reducers, applyMiddleware(CallMiddleWare)); // createStore 함수의 파라미터 값으로 reducers 폴더 경로를 남김

const listener = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App store={store} />
  )
}

store.subscribe(listener);
listener();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
