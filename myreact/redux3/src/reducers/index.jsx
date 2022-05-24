import { ADD } from '../actions';
import { combineReducers } from 'redux';

// state 초기값 할당
const initState = {
  str : 'react'
}

const data = (state = initState, action) => {
  switch(action.type) {
    case ADD:
      return state, {
        str: state.str + '200'
      };
    default:
      return state;
  }
}

const App = combineReducers({
  data
})

export default App;