import './home.css';
import Header from '../header/Header';
import Posts from '../posts/Posts';
import Sidebar from '../sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container home">
          <div className="post">
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
          </div>
          <Sidebar></Sidebar>
      </div>
    </>
  )
}
