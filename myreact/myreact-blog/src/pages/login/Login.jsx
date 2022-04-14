import './login.css';
import Sidebar from '../../comp/sidebar/Sidebar';

export default function Login() {
  return (
    <div className="loginTotal">
        <div className="login container" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
            backgroundImage: 'url(./images/tod.jpg)',
            backgroundSize: 'cover'
            }}>
            <h1 className="loginTitle">Login</h1>
            <form action="./" className="loginForm">
                <label>Email</label>
                <input type="email" placeholder="이메일을 입력하세요." />

                <label>Password</label>
                <input type="password" placeholder="비밀번호를 입력하세요." />
                <div className="loginBtnbox">
                    <button className="loginSubmit">로그인</button>
                    <br />
                    <button className="loginRegisterButton">회원가입</button>
                </div>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
