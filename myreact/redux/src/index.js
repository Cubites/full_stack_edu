import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const exam = 60;

const reducer = (state = exam, action) => {
  switch(action.type){
    case 'workHard':
      state++;
      return state;
    case 'sleepHard':
      state--;
      return state;
    default: return state
  }
}
let store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
