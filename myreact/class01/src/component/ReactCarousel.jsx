import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

const items = [
  {
    src: 'https://picsum.photos/id/111/1320/460',
    altText: '슬라이드1 이미지 대체 문구',
    caption: '슬라이드1 설명',
    header: '슬라이드1 제목'
  },
  {
    src: 'https://picsum.photos/id/116/1320/460',
    altText: '슬라이드2 이미지 대체 문구',
    caption: '슬라이드2 설명',
    header: '슬라이드2 제목'
  },
  {
    src: 'https://picsum.photos/id/118/1320/460',
    altText: '슬라이드3 이미지 대체 문구',
    caption: '슬라이드3 설명',
    header: '슬라이드3 제목'
  },
  {
    src: 'https://picsum.photos/id/112/1320/460',
    altText: '슬라이드4 이미지 대체 문구',
    caption: '슬라이드4 설명',
    header: '슬라이드4 제목'
  },
  {
    src: 'https://picsum.photos/id/113/1320/460',
    altText: '슬라이드5 이미지 대체 문구',
    caption: '슬라이드5 설명',
    header: '슬라이드5 제목'
  }
]

const ReactCarousel = () => {
  return (
    <UncontrolledCarousel items={items}>

    </UncontrolledCarousel>
  )
}

export default ReactCarousel