import './topbar.css';
// import me from './images/me.jpg';

export default function TopBar() {
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
                <ul className="topList">
                    <li className="topListItem"><a href="#">about</a></li>
                    <li className="topListItem"><a href="#">list</a></li>
                    <li className="topListItem"><a href="#">contact</a></li>
                    <li className="topListItem"><a href="#">write</a></li>
                    <li className="topListItem"><a href="#">login</a></li>
                </ul>
            </div>
            <div className="topRight">
                <img src="images/me.jpg" alt="홍길동" className="topImg" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    </div>
  )
}
