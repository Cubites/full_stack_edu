import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'

/*
  logPrint 라는 함수를 호출, 파라미터로 1과 함수를 전달
  12번째 줄에서 호출된 logPrint 함수는 전달받은 파라미터 param에 자기자신 1을 더해 2를 할당
  2가 된 param 변수를 callback함수에 다시 파라미터로 넣고 함수를 실행
*/

export default class CallbackFunc extends Component {
  componentDidMount(){
    this.logPrint(1, function(return1){
      console.log('return1 : ' + return1);
      this.logPrint(return1, function(return2){
        console.log("return2 : " + return2);
      });
    }.bind(this));
  }
  logPrint(param, callback){
    console.log("logPrint param : " + param);
    param += param;
    callback(param);
  }
  render() {
    return (
      <div>CallbackFunc</div>
    )
  }
}
