// Code inspired from https://cruip.com/create-a-carousel-with-progress-indicators-using-tailwind-and-nextjs/
/* eslint-disable max-len */

'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

import { MdOutlineTopic } from 'react-icons/md'
import { GiSilverBullet } from 'react-icons/gi'
import { SiBookstack } from 'react-icons/si'
import { IoBookSharp } from 'react-icons/io5'
import bulletPoints from '@/app/assets/wikiImages/bulletPoints.png'
import detailedExp from '@/app/assets/wikiImages/detailedExp.png'
import diverseTopics from '@/app/assets/wikiImages/diverseTopics.png'
import realWorldExample from '@/app/assets/wikiImages/realWorldExample.png'

export default function ProgressSlider() {
  const duration: number = 5000
  const itemsRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const firstFrameTime = useRef(performance.now())
  const [ active, setActive ] = useState<number>(0)
  const [ progress, setProgress ] = useState<number>(0)

  const items = [
    {
      img: diverseTopics,
      desc: 'Diverse Topics',
      buttonIcon: <MdOutlineTopic />,
    },
    {
      img: bulletPoints,
      desc: 'Bullet Points',
      buttonIcon: <GiSilverBullet />,
    },
    {
      img: realWorldExample,
      desc: 'Real-World Examples',
      buttonIcon: <SiBookstack />,
    },
    {
      img: detailedExp,
      desc: 'Detailed Explanations',
      buttonIcon: <IoBookSharp />,
    },
  ]

  useEffect(() => {
    firstFrameTime.current = performance.now()
    frame.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame.current)
    }
  }, [ active ])

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100)
      frame.current = requestAnimationFrame(animate)
    } else {
      timeFraction = 1
      setProgress(0)
      setActive((active + 1) % items.length)
    }
  }

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement) itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto text-center rounded-lg border-8 p-10 border-secondary">
      { /* Item image */ }
      <div className="transition-all duration-150 delay-300 ease-in-out ">
        <div className="relative flex flex-col h-[490px] items-center" ref={ itemsRef }>
          { items.map((item, index) => (
            <Transition
              key={ index }
              show={ active === index }
              leave="transition ease-in-out duration-1000 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={ () => heightFix() }
            >
              <div className='stack'>
                <Image className="rounded-xl w-2/3 shadow-2xl shadow-black border-8 border-black" src={ item.img } alt={ item.desc } />
              </div>
            </Transition>
          )) }
        </div>
      </div>
      <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        { items.map((item, index) => (
          <button
            key={ index }
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={ () => { setActive(index); setProgress(0) } }
          >
            <div className={ `text-center flex flex-col items-center ${active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'}` }>
              <div className="flex items-center justify-center relative w-9 h-9 rounded-full bg-primary mb-2">
                { item.buttonIcon }
              </div>
              <div className="block text-sm font-medium text-secondary-content mb-2">{ item.desc }</div>
              <div aria-label="Progress Bar" className="block relative w-full bg-slate-400 h-1 rounded-full" role="progressbar" aria-valuenow={ active === index ? progress : 0 }>
                <div className="absolute inset-0 bg-indigo-500 rounded-[inherit]" style={ { width: active === index ? `${progress}%` : '0%' } }></div>
              </div>
            </div>
          </button>
        )) }
      </div>
      <div className='mt-10'>
        <Link href="/wikiPage">
          <button className="btn bg-primary text-secondary-content px-10 glass">Move to Wikipage</button>
        </Link>
      </div>
    </div>
  )
}