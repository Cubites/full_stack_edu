import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ChildComp2 extends Component {
  render() {
    let message1 = '';
    if(this.props.boolValue === false){
        message1 = 'boolValue 기본값이 false 입니다.';
    }

    let message2 = '';
    if(this.props.boolValueWithoutDefault == false){
        message2 = 'boolValueWithoutDefault 기본값이 false 입니다.';
    }
    return (
      <div className='message-container'>ChildComp2
        <p>{message1}</p>
        <p>{message2}</p>
      </div>
    )
  }
}

// 변수형 선언
ChildComp2.propTypes = {
    boolValue : PropTypes.bool,
    boolValueWithoutDefault : PropTypes.bool
}

// 기본값 선언하는 예제
// 입력값이 없으면 기본값이 undefined가 되어 message1, 2에 아무 값도 나오지 않음 >> 때문에 기본값을 선언함
ChildComp2.defaultProps = {
    boolValue : false,
    boolValueWithoutDefault : false
}