// 필수 react 구동 모듈
import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

//초기 화면을 구성하는 사용자 코드
import App from './App';

import './index.css';

// let img = document.createElement('img');
// img.setAttribute('src', 'https://placeimg.com/125/125/any');
// let El = document.createElement('p');
// El.innerText = '반가워요 react!!';
// let Wel = document.createElement('div');
// Wel.append(img);
// Wel.append(El);
// const root = document.getElementById("root");
// root.append(Wel);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);