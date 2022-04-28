import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleBG = () => {
    setIsDark(!isDark)
  }
  return (
    <footer className='footer' style={{backgroundColor: isDark ? 'black' : 'lightgray',
                              color: isDark ? 'white' : 'black'}}>
      <button className='button' onClick={toggleBG}>
        ModeChange
      </button>
    </footer>
  )
}

export default Footer