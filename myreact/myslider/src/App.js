import React, {useState, useEffect} from 'react'
import Slider from './components/Slider'
import data from './data/data'

const App = () => {
  const [slider, setSlider] = useState(data);
  const [index, setIndex] = useState(0);
  const lastIndex = slider.length - 1;

  useEffect(() => {
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  }, [index, slider]);

  useEffect(() => {
    let imgSlider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(imgSlider);
  }, [index]);
  
  return (
    <div className='slide-container'>
      {
        slider.map((slider, sliderIndex) => (
          <Slider key={slider.id} lastIndex={lastIndex} sliderIndex={sliderIndex} index={index} {...slider} />
        ))  
      }
      <button className='prev' onClick={() => setIndex(index - 1)}>이전</button>
      <button className='next' onClick={() => setIndex(index + 1)}>다음</button>
    </div>
  )
}

export default App