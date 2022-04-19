import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header text-center my-5">{this.props.title}</h1>
      </div>
    )
  }
}
