import React from 'react';
import cookie from 'react-cookies';

const CookieRemove = () => {
  const cookieRemoveHandler = () => {
    cookie.remove('userid', { path: '/' });
  }
  return (
    <div>
      <button onClick={ cookieRemoveHandler }>쿠키 삭제</button>
    </div>
  )
}

export default CookieRemove