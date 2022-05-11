import React, { useState } from 'react'

const Login = (props) => {
  const [name, setName] = useState('');
  return (
    props.login 
    ?
    <form className='mt-5'>
      <p>{name}님 환영합니다</p>
    </form>
    :
    <form className='mt-5'>
      <input type="text" name="id" placeholder='아이디' className='my-1' onChange={(e) => setName(e.target.value)}/>
      <input type="text" name="password" placeholder='비밀번호' className='my-1' />
      <button onClick={() => props.setLogin(!props.login)}>로그인</button>
    </form>
  )
}

export default Login