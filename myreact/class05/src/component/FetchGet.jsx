import React, { Component } from 'react'

export default class FetchGet extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        a: "react", b: 200
      }
    });
    const body = await response.json();
    alert(body.date);
  }
  render() {
    return (
      <div>FetchGet</div>
    )
  }
}
