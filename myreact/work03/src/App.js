import React, {useState} from 'react'
import './App.css'
import Page from './page/Page'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page />
    </ThemeContext.Provider>
  )
}

export default App