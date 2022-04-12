import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">
            ABOUT ME
          </span>
          <img src="images/about01.jpg" alt="about" />
          <p>
            뜨거운지라, 되려니와, 바이며, 봄날의 보라. 싸인 곳이 거선의 얼마나 그들은 구할 철환하였는가? 더운지라 거친 발휘하기 아니다. 설레는 아름답고 봄바람을 같은 아니다.
          </p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">
            CATEGORIES
          </span>
          <ul className="sidebarList">
            <li className="sidebarListItem">bread</li>
            <li className="sidebarListItem">cookie</li>
            <li className="sidebarListItem">cake</li>
            <li className="sidebarListItem">computer</li>
            <li className="sidebarListItem">piano</li>
            <li className="sidebarListItem">sing</li>
            <li className="sidebarListItem">cube</li>
            <li className="sidebarListItem">coding</li>
          </ul>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">
            TAG
          </span>
          <div className="tagList">
            <span className="tagListItem">디저트</span>
            <span className="tagListItem">컴퓨터</span>
            <span className="tagListItem">피아노</span>
            <span className="tagListItem">노래</span>
            <span className="tagListItem">여가</span>
            <span className="tagListItem">코딩</span>
            <span className="tagListItem">디저트</span>
            <span className="tagListItem">컴퓨터</span>
            <span className="tagListItem">피아노</span>
          </div>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">
            FOLLOW ME
          </span>
          <div className="socialList">
            <i className="socialItem fa-brands fa-facebook-square"></i>
            <i className="socialItem fa-brands fa-twitter-square"></i>
            <i className="socialItem fa-brands fa-pinterest-square"></i>
            <i className="socialItem fa-brands fa-instagram-square"></i>
          </div>
        </div>
    </div>
  )
}
