import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faMobile } from '@fortawesome/free-solid-svg-icons';
import Address from '../component/Address';

const Register = () => {
  const [inputValue, setInputValue] = useState({
    userName : '' ,
    userEmail : '',
    userPass: '',
    reUserPass: '',
    userTel : '',
  });
  const { userName, userEmail, userPass, reUserPass, userTel } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name] : value,
    })
  }

  // 이메일 검사 : '@'dhk '.'이 있는지 확인
  const isEmailInput = userEmail.includes('@') && userEmail.includes('.');

  // 비밀번호에 특수문자가 있는지
  const specialLetter = userPass.search(/[`~!@@#$%^&*|\\\'\";:\/?]/gi);

  // 비밀번호 확인
  const isPassEqual = userPass === reUserPass;

  // 비밀번호가 특수문자 1자이상, 전체 5글자 이상 
  const isPasswordInput = userPass.length >= 5 && specialLetter >= 1;
  
  // 모든 input의 value가 1글자 이상
  const isValInput = userName.length >= 1 && userTel.length >= 1;

  // 유효성 확인되면 버튼 활성화
  const getIsActive = isEmailInput && isPasswordInput && isValInput && isPassEqual === true;
  const buttonAbled = () => {
    if(
      !isValInput ||
      !isEmailInput ||
      !isPasswordInput
    ){
      alert('원하는 내용이 아닙니다.')
    }
  }

  return (
  <div className="RWrapper">
    <h2 className="text-center mb-5">
      회원가입
    </h2>
    <form name="registerForm">
      <div className="input-group mb-3">
        <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
        <input type="text" name="userName" className='form-control' placeholder='이름' onChange={handleInput} />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
        <input type="text" name="userEmail" className='form-control' placeholder='이메일' onChange={handleInput} />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
        <input type="password" name="userPass" className='form-control' placeholder='비밀번호' onChange={handleInput} />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
        <input type="password" name="reUserPass" className='form-control' placeholder='비밀번호확인' onChange={handleInput} />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text"><FontAwesomeIcon icon={faMobile} /></span>
        <input type="text" name="usertel" className='form-control' placeholder='전화번호' onChange={handleInput} />
      </div>
      <Address handleInput={handleInput} />
      <div style={{textAlign: 'center', paddingTop: '15px', paddingBottom: '15px'}}>
        <Button color="warning" style={{marginRight: '15px'}}>취소</Button>
        <Button 
          color="primary" 
          style={{marginLeft: '15px'}}
          className={getIsActive ? '' : 'disabled'}
          onClick={buttonAbled}
        >
          등록
        </Button>
      </div>
    </form>
  </div>
  )
}

export default Register