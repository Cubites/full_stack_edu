import React from 'react'
import { Alert, UncontrolledAlert } from 'reactstrap'

const Alerts = () => {
  return (
    <div>
      <Alert color="primary">
        Simple Alert [ color: primary ]
      </Alert>
      <UncontrolledAlert color="danger">
        UncontrolledAlert [ color: danger ]
      </UncontrolledAlert>
    </div>
  )
}

export default Alerts