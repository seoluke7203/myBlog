/* eslint-disable max-len */
import wikiImage from '@/app/assets/wikiImage.jpg'
import Image from 'next/image'
import { MdOutlineTopic } from 'react-icons/md'
import { GiSilverBullet } from 'react-icons/gi'
import { SiBookstack } from 'react-icons/si'
import { IoBookSharp } from 'react-icons/io5'
import ProgressSlider from '@/app/ui/progressSlider'

export default function WikiPage() {

  const items = [
    {
      img: wikiImage,
      desc: 'Diverse Topics',
      buttonIcon: <MdOutlineTopic />,
    },
    {
      img: wikiImage,
      desc: 'Bullet Points',
      buttonIcon: <GiSilverBullet />,
    },
    {
      img: wikiImage,
      desc: 'Real-World Examples',
      buttonIcon: <SiBookstack />,
    },
    {
      img: wikiImage,
      desc: 'Detailed Explanations',
      buttonIcon: <IoBookSharp />,
    },
  ]


  //   1. Diverse topics (이미지 3개 연결)
  //   2. Bullet Points (screenshots)
  //   3. Real-World Examples (screenshots)
  //   4. Detailed Explanations (screenshots with images)

  return (
    <div className="flex justify-center bg-base-200">
      <div className="pt-10 pb-20 w-4/5">
        <h1 className="text-3xl font-bold text-primary pb-10">Wikipage</h1>
        <ProgressSlider />
      </div>
    </div>
  )
}