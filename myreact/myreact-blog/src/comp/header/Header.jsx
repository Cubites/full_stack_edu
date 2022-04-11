import './header.css';

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Game & Music</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="images/banner.jpg" alt="banner" className="headerImg" />
    </div>
  )
}
