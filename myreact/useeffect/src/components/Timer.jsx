import React, {useEffect} from 'react'

const Timer = () => {
  useEffect(() => {
    const mytimer = setInterval(() =>{
      console.log('타이머가 실행되고 있습니다...');  
    }, 1000);
    return () => {
      clearInterval(mytimer);
      console.log('타이머를 껏습니다.');
    }
  }, []);
  return (
    <div>
      <span>타이머가 실행되었는지 확인하려면 콘솔을 보라.</span>
    </div>
  )
}

export default Timer