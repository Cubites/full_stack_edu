import React, { Component } from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'

export default class ListTodo extends Component {
  render() {
    const TodoLi = this.props.todos.map((todo, i) => {
      return (
      <ListGroup.Item as="li" key={i}> {/* key 값을 지정하지 않으면 에러 *중요* */}
        <Row>
          <Col lg={10} xs={6}>
            {todo}
          </Col>
          <Col lg={2} xs={6} className="text-center">
            <Button variant="warning" className="me-3 px-4">수정</Button>
            <Button variant="danger" className="px-4">삭제</Button>
          </Col>
        </Row>
      </ListGroup.Item>
      )
    });
    return (
      <ListGroup as="ul"> {/* as 로 태그를 지정하지 않으면 div 태그로 만들어짐 */}
        { TodoLi }
      </ListGroup>
    )
  }
}

// export default List;