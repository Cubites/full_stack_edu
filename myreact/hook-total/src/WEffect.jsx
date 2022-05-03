// import React, { Component } from 'react'

// export default class WEffect extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount(){
//     console.log('디드마운트 렌더링');
//     console.log({count: this.state.count})
//   }

//   componentDidUpdate(){
//     console.log('디드업데이트 렌더링');
//     console.log({count: this.state.count});
//   }

//   handleCountUp = () => this.setState({count: this.state.count + 1});
//   render() {
//     console.log('렌더함수 렌더링');
//     return (
//       <div>
//         <p>카운트 : {this.state.count}</p>
//         <button onClick={this.handleCountUp}>카운트증가</button>
//       </div>
//     )
//   }
// }

import React, {useState, useEffect} from 'react'

const WEffect = () => {
  console.log('app 함수 실행'); // class의 render 실행과 같음
  const [count, setCount] = useState(0);
  const handleCountUp = () => setCount(count + 1);
  // 클래스 컴포넌트의 componentDidMount, componentDidUpdate와 같은 동작
  useEffect(() => {
    console.log('이펙트 렌더링');
    console.log({count});
  });

  return(
    <div>
      <p>카운트 : {count}</p>
      <button onClick={handleCountUp}>카운트증가</button>
    </div>
  )
}
export default WEffect;