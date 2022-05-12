import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TWLogin = () => {
  return (
    <a href="#" className="btn btn-block btn-outline-info btn-twitter">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  )
}

export default TWLogin