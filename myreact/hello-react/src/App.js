import React, { Component } from 'react';
import Header from './comp/Header';
import Aside from './comp/Aside';
import Section from './comp/Section';
import Footer from './comp/Footer';

class App extends Component{ // 클래스형
  constructor(props){
    // component가 실행될 때 render()보다 먼저 생성자 함수(constructor())가 실행됨
    // 따라서 component를 초기화 시켜주고 싶을 때는 constructor() 안에다가 실행시키면 됨
    // (생성자가 초기화를 담당)
    // 앱이 내부적으로 사용할 함수는 state로 만듬
    super(props);
    this.state = {
      mode: 'main',
      header: {toptitle: '검색사이트 목록', title: '검색사이트 목록', cont: '우리가 주로 애용하는 검색사이트 목록'},
      contents: [
        {id: 1, title: '네이버', cont: '우리나라 사람들이 가장 애용하는 포털, 그러나 재미는 없다.'},
        {id: 2, title: '다음', cont: '카카오에 인수되면서 다음볻는 카카오로 유명해진 포털. 결국 다음은 쪼그라든 느낌'},
        {id: 3, title: '구글', cont: '전세계에서 가장 사람받는 포탈. 인터넷 포탈뿐 아니라 거의 모든 IT 에서 세계 TOP을 기록하는 공룡업체'},
        {id: 4, title: '네이트', cont: 'SK사에서 운영하는 포탈. 예전의 명성은 아득한 추억일 뿐이다.'},
        {id: 5, title: '야후', cont: '한때 국내 탑 포탈 업체였으나 네이버에 밀려 국내에서 퇴출되었다. 그러나 일본에서는 아직도 최고의 포탈'}
      ]
    }
  }
  render() {
    let _title, _cont = null;
    switch(this.state.mode){
      case 'main':
        _title = this.state.header.title;
        _cont = this.state.header.cont;
        break;
      case 'naver':
        _title = this.state.contents[0].title;
        _cont = this.state.contents[0].cont;
        break;
      default:
        _title = this.state.header.title;
        _cont = this.state.header.cont;
    }
    return (
      <div className="App">
        <Header title={this.state.header.toptitle} />
        {/* <Header title="우리나라 검색 사이트" desc="우리나라 사이트 목록 입니다." /> */}
        <Aside data={this.state.contents} />
        <Section title={_title} cont={_cont} />
        <Footer copy="Copytight &copy; 홍길동 all right reserved."/>
      </div>
    );
  }
}

export default App;
