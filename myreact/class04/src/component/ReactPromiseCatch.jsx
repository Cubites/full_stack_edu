import React, { Component } from 'react'
/*
  promise를 사용해 파라미터로 2개의 함수로 받을 경우 첫번재 함수는 이행, 두번째 함수는 거부
  (이행: resolve, 거부: reject)
  거부함수를 실행하면서 강제 에러를 발생시켜 봄
  promise 동작 중 거부 함수가 실행되면 이행상태가 되지 못하여 then함수는 실행되지 않음
*/
export default class ReactPromiseCatch extends Component {
  componentDidMount(){
    new Promise((resolve, reject) => {
      reject(Error('Error Info'));
    })
      .then(result => console.log("then : " + result))
      .catch(result => console.log("catch : " + result));
  }
  render() {
    return (
      <div>ReactPromiseCatch</div>
    )
  }
}
