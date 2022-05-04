/****** userContext를 쓰지 않으면 하위 component로 데이터를 한단계씩 일일이 계속 전달해줘야함 ******/
import React,{useState, createContext} from 'react';

const UserContext = createContext();
const ComponentA = () => {
  const [user, setUser] = useState("John");
  return (
    <>
      <h1>{`Hello Mr.${user}`}</h1>
      <ComponentB user={user} />
    </>
  )
}
const ComponentB = ({user}) => {
  return (
    <>
      <h1>ComponentB</h1>
      <ComponentC user={user} />
    </>
  )
}
const ComponentC = ({user}) => {
  return (
    <>
      <h1>ComponentC</h1>
      <ComponentD user={user} />
    </>
  )   
}
const ComponentD = ({user}) => {
  return (
    <>
      <h1>ComponentD</h1>
      <ComponentE user={user} />
    </>
  )   
}
const ComponentE = ({user}) => {
  return (
    <>
      <h1>ComponentE</h1>
      <h2>{`Hello, ${user}, Again`}</h2>
    </>
  )
}

const NotUseContext = () => {
  return (
    <ComponentA />
  )
}

export default NotUseContext