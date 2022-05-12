import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const FbLogin = () => {
  return (
    <a href="#" className="btn btn-block btn-outline-info btn-faceboox">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
  )
}

export default FbLogin