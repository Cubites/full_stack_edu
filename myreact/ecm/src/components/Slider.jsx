import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import data from '../data/data'
import SlideImg from './SlideImg'

const SlideContainer = styled.div`
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
  object-fit: cover;
  object-position: center;
  position: relative;
  overflow: hidden;
`
const PrevBtn = styled.button`
  position: absolute;
  top: 240px;
  left: 30px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: rgba(50, 50, 50, .3);
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`
const NextBtn = styled.button`
  position: absolute;
  top: 240px;
  right: 30px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: rgba(50, 50, 50, .3);
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`

const Slider = () => {
  const [slider, setSlider] = useState(data[2].slide);
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
    <>
      <SlideContainer>
        {
          slider.map((slider, sliderIndex) => (
            <SlideImg key={slider.id} lastIndex={lastIndex} sliderIndex={sliderIndex} index={index} {...slider} />
          ))  
        }
        <PrevBtn onClick={() => setIndex(index - 1)}>{"<"}</PrevBtn>
        <NextBtn onClick={() => setIndex(index + 1)}>{">"}</NextBtn>
      </SlideContainer>
    </>
  )
}

export default Slider