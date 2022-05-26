import React from 'react'
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap'

const ReactStrapForm = () => {
  return (
    <Form>
      <Label for="gender">성별</Label>
      <Input type="select" bsSize="sm">
        <option>성별을 선택하시오</option>
        <option value="w">woman</option>
        <option value="m">man</option>
      </Input>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="addr">주소</Label>
            <Input type="text" name="address" id="addr" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="hp">휴대폰번호</Label>
            <Input type="text" name="mobile" id="hp" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="age">나이</Label>
            <Input type="number" name="age" id="age" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default ReactStrapForm