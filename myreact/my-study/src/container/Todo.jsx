import React, { Component } from 'react'
// import { Container, Row, Col, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Header from "../component/Header"
import Input from "../component/Input"
import ListTodo from "../component/ListTodo"
import './todo.css'

export default class Todo extends Component {
  constructor(){ // 생성자를 쓰는 이유 > 값을 변경할 수 있기 때문
    super();
    this.state = {
      title : "나의 학습 목록",
      todos : [
        "html, css",
        "바닐라 javascript",
        "reactJS",
        "DataBase",
        "nodeJS"
      ]
    }
  }
  render() {
    return (
      <Container>
        <Header title={this.state.title} />
        <Input />
        
        <hr />
        <ListTodo todos={this.state.todos} />
      </Container>
    )
  }
}