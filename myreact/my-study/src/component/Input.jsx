import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export default class Input extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="추가할 공부를 입력하세요."
          aria-label="추가할 공부"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon">
          입력
        </Button>
      </InputGroup>
    )
  }
}
