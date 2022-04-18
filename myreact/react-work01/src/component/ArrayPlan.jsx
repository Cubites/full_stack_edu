import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ArrayPlan extends Component {
  render() {
    const arrayValue = this.props.arrayValue
    const numValue = this.props.numValue
    const objValue = this.props.objValue
    const nodeValue = this.props.nodeValue
    const funcValue = this.props.funcValue
    return (
      <div>
        {/* <p>{arrayValue}</p> */}
        {/* <p>{numValue}</p> */}
        <p>{objValue}</p>
        {/* <p>{nodeValue}</p> */}
        {/* <p>{funcValue}</p> */}
      </div>
    )
  }
}
