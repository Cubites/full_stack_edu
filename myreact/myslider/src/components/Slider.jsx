import React from 'react'

const Slider = (props) => {
  let position = 'nextSlide';
  if(props.sliderIndex === props.index){
    position = 'activeSlide';
  }
  if(props.sliderIndex === props.index - 1 || props.sliderIndex === props.lastIndex && props.index === 0){
    position = 'lastSlide';
  }
  return (
    <article className={position} key={props.id}>
      <img src={props.image} alt={props.title} className="imgSlide" />
    </article>
  )
}

export default Slider