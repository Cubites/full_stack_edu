import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const ReactCard = () => {
  return (
    <Card>
      <CardImg top height="350px" src="https://picsum.photos/160/200" alt="Card Image" style={{objectFit: 'cover'}} />
      <CardBody>
        <CardTitle>자동 이미지</CardTitle>
        <CardSubtitle>이번에는 어떤 이미지가 보일까요?</CardSubtitle>
        <CardText>Card 내용 Lorem Ipsum is simply dummy text. zzzz</CardText>
        <Button>버튼</Button>
      </CardBody>
    </Card>
  )
}

export default ReactCard