import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {ArrowIosBackOutline, ArrowIosForwardOutline} from '@styled-icons/evaicons-outline'
import SlideIn from './SlideIn'
import data from '../data/data'

const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`
const Prev = styled(ArrowIosBackOutline)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
  line-height: 50px;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 225px;
  left: 100px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.4);
  }
`
const Next = styled(ArrowIosForwardOutline)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
  line-height: 50px;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 225px;
  right: 100px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.4);
  }
`

const Slide = () => {
  const [slider, setSlider] = useState(data[2].mainSlide);
  const [index, setIndex] = useState(0);
  const lastIndex = slider.length - 1;

  useEffect(() => {
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > 5){
      setIndex(0);
    }
  }, [index, slider]);
  useEffect(() => {
    let mySlider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(mySlider);
  }, [index]);
  return (
    <Container className="slide-container">
      {
        slider.map((slider, slideIndex) => (
          <SlideIn key={slider.id} slideIndex={slideIndex} lastIndex={lastIndex} index={index} {...slider} />
        ))
      }
      <Prev className="prev" onClick={() => setIndex(index-1)} />
      <Next className="next" onClick={() => setIndex(index+1)} />
    </Container>
  )
}

export default Slide