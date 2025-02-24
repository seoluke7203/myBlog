'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StaticImageData } from 'next/image'
import Image from 'next/image'


export default function SimpleSlider( { images }: { images: { [key: string]: StaticImageData } } ) {
  const settings = {
    dots: true, // carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복함
    speed: 500, // 콘텐츠를 넘어갈 때 속도
    slidesToShow: 1, // 한 화면에 보이는 콘텐츠 개수를 말함
    slidesToScroll: 1, // 한 번에 넘어가는 콘텐츠 수
    autoplay: true, // 자동으로 슬라이드가 넘어갈지에 대한 여부
    autoplaySpeed: 2500,
    centerPadding: '0px',
  }

  return (
    <div>
      <Slider { ...settings }>
        { Object.keys(images).map((key) => (
          <div key={ key } className="flex justify-center">
            <Image src={ images[key] } alt={ key } priority className="rounded-lg" width={ 800 } height={ 600 } />
          </div>
        )) }
      </Slider>
    </div>
  )
};