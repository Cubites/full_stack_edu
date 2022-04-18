import React, { Component } from 'react'

export default class BooleanPlan extends Component {
  render() {
    const message = this.props.cont ? '놀러가자' : '공부하자';
    return (
      <div>{message}</div>
    )
  }
}
