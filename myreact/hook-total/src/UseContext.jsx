import React, {useState, createContext, useContext} from 'react'

const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("John");
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello Mr.${user}`}</h1>
      <ComponentB user={user} />
    </UserContext.Provider>
  )
}

const ComponentB = () => {
  return (
    <>
      <h1>ComponentB</h1>
      <ComponentC />
    </>
  )
}

const ComponentC = () => {
  return (
    <>
      <h1>ComponentC</h1>
      <ComponentD />
    </>
  )
}

const ComponentD = () => {
  return (
    <>
      <h1>ComponentD</h1>
      <ComponentE />
    </>
  )
}

const ComponentE = () => {
  return (
    <>
      <h1>ComponentE</h1>
      <ComponentF />
    </>
  )
}

const ComponentF = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>ComponentF</h1>
      return (
        <div>{`Hello Mr.${user}`}</div>
      )
    </>
  )
}

const WUseContext = () => {
  return (
    <ComponentA />
  )
}

export default WUseContext