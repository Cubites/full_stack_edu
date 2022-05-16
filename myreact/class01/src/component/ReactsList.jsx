import React from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

const ReactsList = () => {
  const ListArray = [
    <ListGroupItem action active>Cras justo odio<Badge pill>14</Badge></ListGroupItem>,
    <ListGroupItem action color="success">react<Badge pill>10</Badge></ListGroupItem>,
    <ListGroupItem action color="warning">2022<Badge pill>8</Badge></ListGroupItem>,
    <ListGroupItem action color="info">Array map<Badge pill>3</Badge></ListGroupItem>
  ];
  return (
    <ListGroup>
      {
        ListArray.map((list) => list)
      }
    </ListGroup>
  )
}

export default ReactsList