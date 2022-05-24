import React, { Component } from 'react';
import { add } from '../actions';

export default class StrAddButton extends Component {
  render() {
    return (
      <input type='button' value='추가200' onClick={this.addString} />
    )
  }
  addString = () => {
    this.props.store.dispatch(add()); // dispatch 함수가 실행되면 리듀서 함수는 액션 값을 참조
  }
}
