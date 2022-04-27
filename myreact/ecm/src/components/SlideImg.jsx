import React from 'react'
import styled from 'styled-components'

const ImgSlide = styled.img`
  width: 100%;
`

const SlideImg = (props) => {
  let position = 'nextSlide';
  if(props.sliderIndex === props.index){
    position = 'activeSlide';
  }
  if(props.sliderIndex === props.index - 1 || props.sliderIndex === props.lastIndex && props.index === 0){
    position = 'lastSlide';
  }
  return (
    <article className={position} key={props.id}>
      <ImgSlide src={props.image} alt={props.title} className="imgSlide" />
    </article>
  )
}

export default SlideImg