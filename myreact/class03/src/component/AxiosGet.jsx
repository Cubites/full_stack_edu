import React, { Component } from 'react';
import axios from 'axios';

export default class AxiosGet extends Component {
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(rs => {alert(rs.data)});
  }
  render() {
    return (
      <div>AxiosGet</div>
    )
  }
}
