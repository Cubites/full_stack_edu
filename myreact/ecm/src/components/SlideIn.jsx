import React from 'react'

const SlideIn = (props) => {
  let position = 'nextSlide';
  if(props.slideIndex === props.index){
    position = 'activeSlide';
  }
  if(props.slideIndex === props.index-1 || props.slideIndex === props.lastIndex && props.index === 0){
    position = 'lastSlide';
  }
  return (
    <article className={position} style={{backgroundColor: props.bgColor}}>
      <div className="slideIn">
        <img src={props.image} alt={props.title} className={props.imgClass} />
        <div className="text-box">
          <h1 style={{color: props.fontColor}}>{props.title}</h1>
          <p style={{color: props.fontColor}}>{props.desc}</p>
        </div>
      </div>
    </article>
  )
}

export default SlideIn