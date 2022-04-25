import React from 'react'

const Nav = (props) => {
    const alist = [];
    for(let i = 0; i < props.topics.length; i++){
      let t = props.topics[i];
      alist.push(
        <a href="/" className="list-group-item" 
          key={t.id} id={t.id}
          
          /* click 시 click한 버튼의 id값을 전송 */
          onClick={(event) => {
            event.preventDefault();
            props.getChangeMode(event.target.id); 
            // 부모값(section함수)에서 getChangeMode를 실행하고 id값에 해당하는 topic 출력
          }}
          >{t.title}</a>);
    }
    return (
      <nav className="list-group mb-3">
        {alist}
      </nav>
    )
  }

export default Nav