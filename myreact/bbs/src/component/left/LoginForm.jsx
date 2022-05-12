import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useInput } from '../../lib/lib';
import FbLogin from '../FbLogin';
import TWLogin from '../TWLogin';

const LoginForm = ({ setIsLoggedIn }) => {

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  // 메모리에 저장하는 훅 useMemo, useCallback
  const onSubmitForm = useCallback(() => {
    // console.log(id, password);
    if(id === ''){
      alert('아이디를 입력하세요.');
      return;
    }
    if(password === ''){
      alert('비밀번호를 입력하세요.');
      return;
    }else{
      setIsLoggedIn(true);
    }
  }, [id, password]);

  return (
    <form>
      <div className="card">
        <article className="card-body">
          <Link to="register" className="float-right btn btn-outline-primary">회원가입</Link>
          <h3 className="card-title mb-4 mt-1">로그인</h3>
          <p>
            <TWLogin />
            <FbLogin />
          </p>
          <hr />
          <div className="form-group">
            <input type="text" 
                    name="userId" 
                    value={id}
                    onChange={onChangeId}
                    className="form-control" 
                    placeholder='아이디' />
          </div>
          <div className="form-group">
            <input type="text"
                    name="userPass" 
                    value={password}
                    onChange={onChangePassword}
                    className="form-control" 
                    placeholder='비밀번호' />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <button type="button" onClick={onSubmitForm} className="btn btn-primary btn-block">로그인</button>
              </div>
            </div>
            <div className="col-md-6">
              <a href="#" className="small">비밀번호 찾기</a>
            </div>
          </div>
        </article>
      </div>
    </form>
  )
}

export default LoginForm