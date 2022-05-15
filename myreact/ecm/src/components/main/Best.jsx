import React, {useState} from 'react'
import Slide from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import data from '../../data/best'
import styled from 'styled-components'

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 15px;
  &:hover{
    outline: none;
    border: none;
  }
`
const Card = styled.div`
  width: 100%;
  height: 390px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`
const CardImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #ededed;
  border-radius: 20px;
  transition: .5s;
  border: 1px solid #ddd;
  overflow:hidden;
`

const Best = () => {
  const [best, setBest] = useState(data[0].best);
  let settings = {
    dot: true,
    Infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear"
  }
  return (
    <Slide {...settings}>
      {
        best.map((best, bestIndex) => (
          <CardWrapper key={best.id}>
            <Card>
              <CardImg>
                <img src={best.image} alt={best.title} />
              </CardImg>
            </Card>
          </CardWrapper>
        ))
      }
    </Slide>
  )
}

export default Best