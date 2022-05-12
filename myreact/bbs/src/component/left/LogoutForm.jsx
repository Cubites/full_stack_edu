import React, { useCallback } from 'react'

const LogoutForm = ({ setIsLoggedIn }) => {
  const onLogoutForm = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
      <div className="card py-3">
        <article className="card-body text-center">
          <img src="https://picsum.photos/id/237/100/100" alt="" className="rounded-circle" />
          <h3 className="text-center">John Doe</h3>
          <p className="text-center">developer</p>
          <div className="btn-box">
            <button type="button" className="btn btn-success btn-sm mx-1">자세히</button>
            <button type="button" onClick={onLogoutForm} className="btn btn-danger btn-sm mx-1">로그아웃</button>
          </div>
        </article>
      </div>
  )
}

export default LogoutForm