import React from 'react'
import { useInput } from '../lib/lib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faMobile } from '@fortawesome/free-solid-svg-icons';
import Address from '../component/Address';

const Register = () => {
  return (
  <div className="RWrapper">
    <h2 className="text-center mb-5">
      회원가입
    </h2>
    <div className="input-group mb-3">
      <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
      <input type="text" className='form-control' placeholder='이름' />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
      <input type="text" className='form-control' placeholder='이메일' />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
      <input type="text" className='form-control' placeholder='비밀번호' />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
      <input type="text" className='form-control' placeholder='비밀번호확인' />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text"><FontAwesomeIcon icon={faMobile} /></span>
      <input type="text" className='form-control' placeholder='전화번호' />
    </div>
    <Address />
  </div>
  )
}

// const Register = () => {
//   return (
//     <article className="text-center mt-5">
//       <h1>회원가입</h1>
//       <form className='container mt-5 text-center d-flex justify-content-center'>
//         <div className='px-3'>
//           <p className="py-1 mb-3">아이디</p>
//           <p className="py-1 mb-3">이메일</p>
//           <p className="py-1 mb-3">비밀번호</p>
//           <p className="py-1 mb-3">비밀번호 확인</p>
//           <p className="py-1 mb-3">전화번호</p>
//           <p className="py-1 mb-3">주소</p>
//         </div>
//         <div>
//           <input type="id" className='d-block mb-3' style={{height: "32px"}} />
//           <input type="email" className='d-block mb-3' style={{height: "32px"}} />
//           <input type="password" className='d-block mb-3' style={{height: "32px"}} />
//           <input type="password" className='d-block mb-3' style={{height: "32px"}} />
//           <p className='d-flex' style={{height: "32px"}}>
//             <input type="id" className='d-block mb-3' style={{height: "32px", width: "69px"}} />
//             <input type="id" className='d-block mb-3 mx-2' style={{height: "32px", width: "69px"}} />
//             <input type="id" className='d-block mb-3' style={{height: "32px", width: "69px"}} />
//           </p>
//           <input type="id" className='d-block mb-3' style={{height: "32px"}} />
//         </div>
//       </form>
      
//       <button type="button" className='btn btn-success'>확인</button>
//     </article>
//   )
// }

export default Register