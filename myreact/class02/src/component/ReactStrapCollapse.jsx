import React from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap'

const ReactStrapCollapse = () => {
  return (
    <div>
      <Button color="danger" id="toggle">
        펼치기/접기
      </Button>
      <UncontrolledCollapse toggler='#toggle'>
        <Card>
          <CardBody>
            이곳은 토글러 안입니다.
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  )
}

export default ReactStrapCollapse