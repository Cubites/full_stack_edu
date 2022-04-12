import './posts.css';

export default function Posts() {
  return (
    <div className="posts">
      <img src="images/post01.jpg" alt="post01" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Bread</span>
          <span className="postCat">ETC</span>
        </div>
        <p className="postTitle">
          뜨거운지라, 되려니와, 바이며, 봄날의 보라. 싸인 곳이 거선의 얼마나 그들은 구할 철환하였는가? 더운지라 거친 발휘하기 아니다. 설레는 아름답고 봄바람을 같은 아니다.
        </p>
        <span className="postDate">1hour ago</span>
      </div>
      <hr />
    </div>
  )
}
