import React, { useState, useEffect } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Sliderin from './Sliderin';

const Slider = ({data}) => {
  const [ slideNum, setSlideNum ] = useState(0);
  console.log(slideNum);

  function pSlide(n){
    if(slideNum + n > 4){
      setSlideNum(0);
    }else if(slideNum + n < 0){
      setSlideNum(4);
    }else{
      setSlideNum(slideNum + n);
    }
  }

  // setTimeout(() => {
  //   if(slideNum === 4){
  //     setSlideNum(0);
  //   }else{
  //     setSlideNum(slideNum + 1);
  //   }
  // }, 3000);
  
  return (
    <div className='slider container relative'>
      {/* 이전, 다음 버튼 */}
      <Link to="#" className="prev" onClick={() => pSlide(-1)}>
          <ArrowBackIos />
      </Link>
      <Link to="#" className="next" onClick={() => pSlide(1)}>
          <ArrowForwardIos />
      </Link>
      <Sliderin key={data[slideNum].id} data={data[slideNum]}/>
    </div>
  )
}

export default Slider