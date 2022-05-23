import React from 'react';
import cookie from 'react-cookies';

const CookieLogin = () => {
  const loginSubmit = (e) => {
    e.preventDefault();
    let uid = document.getElementById('userId').value;
    let upass = document.getElementById('userPass').value;
    if(uid !== cookie.load('userId')){
        alert('아이디가 다릅니다');
    }else if(upass !== cookie.load('userPass')){
        alert('비밀번호가 다릅니다');
    }else{
        alert('로그인');
    }
  }
  return (
    <form onSubmit={loginSubmit} style={{width: '300px', height: '100px', textAlign: 'right', border: '1px solid #333'}}>
      <input type="text" name="userId" id="userId" placeholder='아이디' />
      <br />
      <input type="password" name="userPass" id="userPass" placeholder='비밀번호' />
      <br />
      <button type="submit">전송</button>
    </form>
  )
}

export default CookieLogin