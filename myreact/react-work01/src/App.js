// import './App.css';
// import TodaysPlan from './component/TodaysPlan';
// import BooleanPlan from './component/BooleanPlan';
// import ArrayPlan from "./component/ArrayPlan"
// import ChildComp from './component/ChildComp';
// import ChildComp2 from './component/ChildComp2'
import Test from "./component/Test";
import TodaysPlan from "./component/TodaysPlan";

function App() {
  /** ArrayPlan **/
  // const array = [2, 3, 4, 5];
  // const obj = {name: '이름', age: 58};
  // const node = <h1>노드</h1>;
  // const func = () => {console.log('메시지');}
  // return (
  //   <>
  //     <ArrayPlan
  //       arrayValue={array}
  //       numValue={1}
  //       objValue={obj}
  //       nodeValue={node}
  //       funcValue={func} />
  //   </>
  // );

  /** booleanPlan **/
  // return (
  //   <>
  //     <div><a>날씨가 매우 좋을 때 : </a> <BooleanPlan cont /></div>
  //     <div><a>우중충하게 비올거같을 때 : </a> <BooleanPlan cont /></div>
  //   </>
  // );

  /** ChildComp, ChildComp2 **/
  // let bool = false;
  // let booldefaul = false;
  // return (
  //   <>
  //     <ChildComp objValue={{name: '홍길동', age : 20}}
  //               requiredStringValue="문자"
  //               />
  //     <ChildComp2 />
  //     <ChildComp2 boolValue boolValueWithoutDefault />
  //   </>
  // );

  /** Test **/
  let obj = {name: '홍길동', age: 21, job: '직업', city: '김포'};
  let arr = [
    {id: 1, name: '홍길동', age: 21, job: '도둑', city: '김포'},
    {id: 2, name: '홍길순', age: 20, job: '도둑동생', city: '고양'},
    {id: 3, name: '김철수', age: 22, job: '경찰', city: '김포'}
  ];
  return (
    <>
      <Test objValue={obj} arrValue={arr} />
    </>
  );

  /** TodaysPlan **/
  // return (
  //   <>
  //     <TodaysPlan message />
  //   </>
  // );
}

export default App;
