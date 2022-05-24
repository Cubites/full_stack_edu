import React, { useEffect } from 'react';
import cookie from 'react-cookies';

const CookieLoad = () => {
  useEffect(() => {
    setTimeout(function(){
      cookie.load('userId')
    }, 1000);
  }, []);
  return (
    <div>{cookie.load('userId')}</div>
  )
}

export default CookieLoad