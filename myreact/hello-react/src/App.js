import React, { Component } from 'react';
import './App.css';

class Header extends Component{
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}
class Aside extends Component{
  render(){
    return (
      <aside>
        <nav>
          <ul>
            <Potals link="네이버"></Potals>
            <Potals link="다음"></Potals>
            <Potals link="구글"></Potals>
            <Potals link="네이트"></Potals>
            <Potals link="야후"></Potals>
            {/* <li><a href="1.html">네이버</a></li>
            <li><a href="1.html">다음</a></li>
            <li><a href="1.html">구글</a></li>
            <li><a href="1.html">네이트</a></li>
            <li><a href="1.html">야후</a></li> */}
          </ul>
        </nav>
      </aside>
    )
  }
}
class Potals extends Component{
  render(){
    return(
      <li><a href="1.html">{this.props.link}</a></li>
    );
  }
}
class Section extends Component{
  render(){
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </section>
    )
  }
}
class Footer extends Component{
  render(){
    return (
      <footer>
        {this.props.copy}
      </footer>
    )
  }
}

class App extends Component{ // 클래스형
  render() {
    return (
      <div className="App">
        <Header title="검색사이트 목록" desc="우리가 주로 애용하는 검색사이트 목록 입니다." />
        {/* <Header title="우리나라 검색 사이트" desc="우리나라 사이트 목록 입니다." /> */}
        <Aside/>
        <Section title="네이버" desc="우리나라 사람들이 가장 애용하는 포털, 그러나 재미는 없다."/>
        <Footer copy="Copytight &copy; 홍길동 all right reserved."/>
      </div>
    );
  }
}

export default App;
