import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    const {
        name,
        age,
        job,
        city
    } = this.props.objValue;

    return (
      <>
        <div>이름 : {name}</div>
        <div>나이 : {this.props.objValue.age}</div>
        <div>직업 : {job}</div>
        <div>사는곳: {city}</div>
        <ul>
            {
                this.props.arrValue.map((data) => (
                    // key 값이 없으면 에러 발생, html 코드에는 출력되지 않음
                    <li key={data.id}>{data.name} / {data.age} / {data.job} / {data.city}</li>
                ))
            }
        </ul>
      </>
    )
  }
}
