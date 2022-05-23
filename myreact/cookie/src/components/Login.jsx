import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isRemember, setIsRemember] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
  useEffect(() => {
    if(cookies.rememberEmail !== undefined){
      setEmail(cookies.rememberEmail);
      setIsRemember(true);
    }
  })
  const handleOnChange = (e) => {
    setIsRemember(e.target.check);
    if(e.target.check){
      setCookie(e.target.value);
      // setCookie('email', document.getElementById('email').value);
      // input에서 이메일을 가져와 이름은 rememberEmail, 값은 email value로 저장
    }else{
      removeCookie('rememberEmail');
    }
  }

  return (
    <div>
      <input type="email" name="email" />
      <br />
      <label><input type="checkbox" onChange={handleOnChange} checked={isRemember} /> 아이디 저장</label>
    </div>
  )
}

export default Login