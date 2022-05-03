// import React, { Component } from 'react'

// export default class WEffect02 extends Component {
//   constructor(props){
//     super(props);
//     // hook의 useState와 같은 역할
//     this.state = {
//       count: 0
//     }
//   }
//   // 마운트 될 때만 실행
//   componentDidMount(){
//     console.log('디드마운트 렌더링');
//     console.log({count: this.state.count});
//   }
//   componentDidUpdata(prevProps, prevState){
//     if(prevState.name !== this.state.name){
//       console.log('디드마운트 렌더링');
//       console.log({count: this.state.count})
//     }
//   }
//   handleCountUp = () => this.setState({count: this.state.count + 1})
//   render() {
//     console.log('렌더함수 실행');
//     return (
//       <div>
//         <p>카운트 : {this.state.count}</p>
//         <button onClick={this.handleCountUp}>카운트 증가</button>
//       </div>
//     )
//   }
// }

import React, {useState, useEffect} from 'react'

const WEffect02 = (props) => {
  console.log("app 함수 실행");
  const [count, setCount] = useState(0);
  const handleCountUp = () => setCount(count + 1);
  // 비동기
  // --- 외부통신 (json 파일을 가져오는 동안에 발생하는 딜레이)
  useEffect(() => {
    console.log('디드마운트 렌더링');
    console.log(count);
  }, []);
  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={handleCountUp}>카운트 증가</button>
    </div>
  )
}

export default WEffect02