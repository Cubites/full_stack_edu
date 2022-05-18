import React, { Component } from 'react'

export default class FetchGet extends Component {
  /*
    비동기 함수에 동기적인 기능을 추가하여 하위 명령이 미리 실행하는 것을 방지하는 문법
    async : 실행함수에 async를 추가
    await : 동기적으로 처리돼야하는 함수 구문 앞에 await를 추가
  */
  componentDidMount = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const body = await response.json();
    console.log(body);
  }
  render() {
    return (
      <div>FetchGet</div>
    )
  }
}
