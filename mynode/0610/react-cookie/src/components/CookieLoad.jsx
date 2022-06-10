import React from 'react'
import cookie from 'react-cookies'

const CookieLoad = () => {

  return (
    <div>
      반갑습니다. { cookie.load('userid') }님
    </div>
  )
}

export default CookieLoad