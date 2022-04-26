import './App.css';
import React, { useState } from 'react';
import Book from './component/Book';
import Section from './component/Section';

function App() {
  const [showBook, setShowBook] = useState(1);
  const books = [
    {id: 1, image: "https://picsum.photos/200/300", title: 'book1', writer: 'writer1', publisher: 'publisher1', etc: 'etc1', content: '얼마나 청춘의 이상의 싶이 고행을 내려온 행복스럽고 황금시대다. 맺어, 청춘의 청춘을 그들의 몸이 인생을 사막이다. 눈에 것은 얼마나 미인을 소금이라 생생하며, 생명을 칼이다.'},
    {id: 2, image: "https://picsum.photos/200/301", title: 'book2', writer: 'writer2', publisher: 'publisher2', etc: 'etc2', content: '영락과 봄날의 들어 위하여 사막이다. 되려니와, 찬미를 작고 행복스럽고 그리하였는가? 것은 현저하게 소담스러운 않는 피는 두손을 봄바람이다. 피어나는 생명을 대한 칼이다.'},
    {id: 3, image: "https://picsum.photos/200/302", title: 'book3', writer: 'writer3', publisher: 'publisher3', etc: 'etc3', content: '인생을 얼마나 새가 있는가? 지혜는 인생을 그들에게 얼마나 눈이 이것을 군영과 있는가? 황금시대를 찾아 너의 그들의 이상의 풀밭에 동력은 것이 것이다.'},
    {id: 4, image: "https://picsum.photos/200/303", title: 'book4', writer: 'writer4', publisher: 'publisher4', etc: 'etc4', content: '앞이 듣기만 인간에 그림자는 그들을 힘있다. 두기 작고 하는 이상은 할지니, 무엇이 있는 황금시대다.'},
  ];
  return (
    <div className="App">
      <div className='container'>
        <header>
          <Book bookInfo={books} getChangebook={(_id) => { setShowBook(_id); }} />
        </header>
        <Section info={books[showBook - 1]}/>
      </div>
    </div>
  );
}

export default App;
