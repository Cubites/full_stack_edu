import React, { useEffect } from 'react';
import cookie from 'react-cookies';

const CookieSave = () => {
  useEffect(() => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save('userid', 'reactCookieMan', {
      path: '/',
      expires
    });
  },[]);
  return (
    <div>CookieSave</div>
  )
}

export default CookieSave