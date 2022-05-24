import React, { useEffect } from 'react';
import cookie from 'react-cookies';

const CookieSave = () => {
  useEffect(() => {
    const expires = new Date();
    expires.setMinutes(expires.setMinutes() + 60);
    cookie.save('userId', "React", {
      path: '/',
      expires
    });
    // 쿠키 'userId' 경고창으로 출력
    setTimeout(function(){
      alert(cookie.load('userId'));
    });
    // 쿠키 'userId' 삭제
    setTimeout(function(){
      cookie.remove('userId', { path: '/'});
    }, 1500);
    // 쿠키 'userId' 경고창으로 출력 > 'userId'가 삭제되어 undefined 출력
    setTimeout(function(){
      alert(cookie.load('userId'));
    }, 2000);
  }, []);
  return (
    <div>CookieSave</div>
  )
}

export default CookieSave