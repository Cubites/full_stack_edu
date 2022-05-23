import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import CookieLogin from './CookieLogin';

const CookieSave = () => {
  useEffect(() => {
    const setCookies = (cname, cvalue, exdays) => {
      const d = new Date();
      d.setMinutes(d.getMinutes + 60);
      cookie.save(cname, cvalue, {path: '/', d})
    }
    setCookies('userId', 'Lees');
    setCookies('userPass', 'a123456');
  }, []);

  return (
    <div>
      <CookieLogin />
    </div>
  )
}

export default CookieSave

// const [inputId, setInputId] = useState('');
// const [inputPass, setInputPass] = useState('');
// useEffect(() => {
//   const userId = 'james';
//   const userPass = 'james123';
//   cookie.save('userId', userId, {path: '/'});
//   cookie.save('userPass', userPass, {path: '/'});
// })
// const login = () => {
//   if(cookie.load('userId') !== inputId){
//     alert('아이디가 다릅니다');
//   }else if(cookie.load('userPass') !== inputPass){
//     alert('비밀번호가 다릅니다');
//   }else{
//     alert('로그인');
//   }
// }
// return (
//   <form style={{width: '300px', textAlign: 'right'}}>
//     Id : <input type="text" name="userId" id="userId" onChange={e => setInputId(e.target.value)}/><br />
//     Password : <input type="password" name="userPass" id="userPass" onChange={e => setInputPass(e.target.value)} />
//     <button type="submit" onClick={() => login()}>로그인</button>
//   </form>
// )


// cookie.save('userId', 'James', {
//   path: '/',
//   expires,
//   // secure: true, // 웹서버가 https로 통신할 경우만 저장
//   // httpOnly: true // 쿠키가 비정상적으로 접속하는 경우를 막는 옵션
// });
// setTimeout(function(){
//   alert(cookie.load('userId'));
// }, 1000);