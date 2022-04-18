import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChildComp extends Component {
  render() {
    const {
        objValue,
        requiredStringValue
    } = this.props;
    return (
        <>
            <div>객체값 : {objValue.name} , {objValue.age}</div>
            <div>필수값 : {requiredStringValue}</div>
        </>
    )
  }
}

ChildComp.propTypes = { 
    objValue : PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }),
    // string 타입으로 필수로 값이 들어와야 한다고 지정(입력값이 없거나 다른 타입이면 에러 발생)
    requiredStringValue : PropTypes.string.isRequired
}