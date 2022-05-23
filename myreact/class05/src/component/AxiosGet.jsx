import React, { Component } from 'react';
import axios from 'axios';

export default class AxiosGet extends Component {
  componentDidMount(){
    // axios.get('http://date.jsontest.com/')
    //   .then(response => alert(response.data.date))
    axios.post('http://date.jsontest.com/', {
      a: '리엑트', b: 200
    })
      .then(response => alert(response.data.date))
  }
  render() {
    return (
      <div>AxiosGet</div>
    )
  }
}
