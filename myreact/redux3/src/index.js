import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers); // createStore함수를 파라미터로 reducers 폴더 경로를 넘김

const listener = () => {
    ReactDOM.render(
        <App store={store} />, // 위에서 생성한 store 컴포넌트를 app에 전달
        document.getElementById('root') 
    )
}
store.subscribe(listener);
listener();