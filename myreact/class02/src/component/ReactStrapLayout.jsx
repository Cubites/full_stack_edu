import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReactStrapForm from './ReactStrapForm'
import ReactStrapModal from './ReactStrapModal'
import ReactStrapNavbox from './ReactStrapNavbar'
import ReactStrapPagenation from './ReactStrapPagenation'

const ReactStrapLayout = () => {
  const [pageNum, setPageNum] = useState(1);
  const [pageMax, setPageMax] = useState(20);
  return (
    <Container>
      <Row>
        <ReactStrapNavbox />
        <ReactStrapForm />
        <ReactStrapModal />
        <ReactStrapPagenation pageNum={pageNum} setPageNum={setPageNum} pageMax={pageMax} />
      </Row>
    </Container>
  )
}

export default ReactStrapLayout