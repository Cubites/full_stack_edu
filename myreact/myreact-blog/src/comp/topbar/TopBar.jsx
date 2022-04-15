import './topbar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {
    const user = false;
  return (
    <div className="top">
        <div className='container topInn'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-pinterest-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                {
                    user ? (
                        <ul className="topList">
                            <li className="topListItem"><Link to="/" className="homeLink">list</Link></li>
                            <li className="topListItem"><Link to="/about">about</Link></li>
                            <li className="topListItem"><Link to="/contact">contact</Link></li>
                            <li className="topListItem"><Link to="/write">write</Link></li>
                            <li className="topListItem"><a href="#">Logout</a></li>
                            {/* <li className="topListItem"><a href="#">login</a></li> */}
                        </ul>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem"><Link to="/" className="homeLink">list</Link></li>
                            <li className="topListItem"><Link to="/about">about</Link></li>
                            <li className="topListItem"><Link to="/contact">contact</Link></li>
                            <li className="topListItem"><Link to="/Write">write</Link></li>
                            <li className="topListItem"><Link to="/Login">LOGIN</Link></li>
                            <li className="topListItem"><Link to="/Settings">회원가입</Link></li>
                            
                        </ul>
                    )
                }
            </div>
            <div className="topRight">
                <img src="images/me.jpg" alt="홍길동" className="topImg" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    </div>
  )
}
