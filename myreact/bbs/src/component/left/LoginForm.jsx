import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LoginForm = () => {
  return (
    <form>
      <div className="card">
        <article className="card-body">
          <a href="#" className="float-right btn btn-outline-primary">회원가입</a>
          <h3 className="card-title mb-4 mt-1">로그인</h3>
          <p>
            <a href="#" className="btn btn-block btn-outline-info">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="#" className="btn btn-block btn-outline-info">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <hr />
            <div className="form-group">
              <input type="text" name="userId" className="form-control" placeholder='아이디' />
            </div>
            <div className="form-group">
              <input type="text" name="userPass" className="form-control" placeholder='비밀번호' />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">로그인</button>
                </div>
              </div>
              <div className="col-md-6">
                <a href="#" className="small">비밀번호 찾기</a>
              </div>
            </div>
          </p>
        </article>
      </div>
    </form>
  )
}

export default LoginForm