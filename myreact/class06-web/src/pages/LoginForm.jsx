import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';
import cookie from 'react-cookies';
import Logo from '../logo.png';

const LoginForm = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [isRememberEmail, setIsRememberEmail] = useState(false);

  const validateEmail = (e) => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    emailRegex.test(e.target.value) ? setIsEmail(false) : setIsEmail(true);
    setUserEmail(e.target.value);
  }

  const validatePass = (e) => {
    const PasswordRegex = /^[A-Za-z0-9]{6,12}$/;
    PasswordRegex.test(e.target.value) ? setIsPass(false) : setIsPass(true);
    setUserPass(e.target.value);
  }

  useEffect(() => {
    if(userEmail !== '' && userPass !== ''){
      isEmail === false && isPass === false ? setIsLogin(false) : setIsLogin(true);
    }else{
      setIsLogin(true);
    }
  }, [isEmail, isPass]);

  const submit = () => {}
  useEffect(() => {
    setIsRememberEmail(!isRememberEmail);
    isRememberEmail ? cookie.save('userEmail', userEmail, {path: "/"}) : cookie.remove('userEmail');
  }, [isRememberEmail])

  return (
    <section className='login-main'>
      <div className="mylogo">
        <img src={Logo} alt="logo" />
      </div>
      <h2 className="text-center">로그인</h2>
      <Form className="form" onSubmit={e => submit(e)}>
        <FormGroup>
          <Label for="userEmail">이메일</Label>
          <Input type="email" name="userEmail" id="userEmail" placeholder='example@example.com' onChange={e => validateEmail(e)}/>
          { isEmail ? <FormText color="danger">아이디를 정상적으로 입력해주세요. 아이디는 이메일 형식입니다.</FormText> : '' }
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">비밀번호</Label>
          <Input type="password" name="userPass" id="userPassword" placeholder='*******' onChange={e => validatePass(e)}/>
          { isPass ? <FormText color="danger">비밀번호를 정상적으로 입력해주세요.(영어 대소문자, 숫자만 사용, 6자에서 12자 사이)</FormText> : '' }
        </FormGroup>
        <FormGroup className="text-end">
          <Label>
            <Input 
              type="checkbox"
              name="rememberEmail"
              value="1"
              onChange={() => setIsRememberEmail(!isRememberEmail)} /> 이메일 기억
          </Label>
        </FormGroup>
        <div className="text-center btn-box">
          <Button type="submit" color="primary" block disabled={isLogin}>로그인</Button>
        </div>
      </Form>
    </section>
  )
}

export default LoginForm