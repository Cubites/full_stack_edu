import './settings.css';
import Sidebar from '../../comp/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className="settings container">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <div className="settingsUpdateTitle">Update Your Account</div>
                <div className="settingsUpdateTitle">Delete Account</div>
            </div>
            <form action="./" className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="images/post01.jpg" alt="me" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </label>
                </div>
                <label>UserName</label>
                <input type="text" placeholder="아이디" />
                <label>Email</label>
                <input type="email" placeholder="아이디@email.com" />
                <label>Password</label>
                <input type="text" placeholder="비밀번호" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
