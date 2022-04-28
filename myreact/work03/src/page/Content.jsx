import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className='content' style={{backgroundColor: isDark ? '#444444' : 'lightgray',
                            color: isDark ? 'white' : 'black'}}>
      <p>홍길동님, 환영합니다.</p>
    </div>
  )
}

export default Content