import React from 'react'
import { Badge, Button } from 'reactstrap'

const Badges = () => {
  return (
    <div>
      <h2>PRODUCT NAME <Badge color="danger">hit</Badge></h2>
      <Button color="primary" outline>Accessor <Badge color="dark">4</Badge></Button>
      <Badge color="warning" pill>pill</Badge>
      <Badge href="#" color="success">GoLink</Badge>
    </div>
  )
}

export default Badges