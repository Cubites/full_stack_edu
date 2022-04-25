import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';

const Section = () => {
  // const mode = 'WELCOME';
  // useState : 첫번째 인자로 값(WELCOME), 두번째 값으로 함수를 반환
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {id: 1, title: "산책하기", body: "매일 아침 일찍 일어나 동네 한바퀴 돌자."},
    {id: 2, title: "매일 책읽기", body: "시도 좋고 수필도 좋고 소설도 좋고..."},
    {id: 3, title: "자바스크립트 공부", body: "자바스크립트가 쉽다고 구나 그랬나? 매일 조금씩 공부하자."},
    {id: 4, title: "html, css 공부", body: "html, css도 놓치지 않게 공부하자"},
    {id: 5, title: "reactJS 공부", body: "reactJS란 쉬운 웹사이트를 위한 거라고 누가그랬나"}
  ]);

  /* mode 값을 확인하여 article에 들어갈 값을 결정 */
  let _title = null, _desc = null;
  if(mode == 'WELCOME'){ // default 값
    _title = "나의 할일 목록";
    _desc = "내가 해야할 일들의 목록입니다.";
  }else if(mode == 'READ'){
    for(let i in topics){
      if(topics[i].id === Number(id)){
        _title = topics[i].title;
        _desc = topics[i].body;
      }
    }
  }
  return(
    <>
      {/* getChangeMode: 임의로 만든 함수, useState로 생성된 함수 사용 목적 */}
      {/* Mode 값(default인지 아닌지)과 Id 값(topics에서 index)을 component에서 받아옴 */}
      <Header title="My Work List" desc="내가 매일 해야하는 일들의 목록 입니다." 
              getChangeMode={(_id) => {
                setMode('WELCOME');
                setId(_id);
              }}
      />
      <section className="row mt-5">
        <div className="col-3">
          <Nav topics={topics} getChangeMode={(_id) => {
              setMode('READ');
              setId(_id);
            }}
          />
        </div>
        <Article title={_title} desc={_desc} />
      </section>
    </>
  )
}

export default Section