/* eslint-disable max-len */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import background2 from '@/app/assets/graphics/background2.jpg'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import handleScrollToSection from '@/app/util/mouseScrollSection'
import NextLogo from '@/app/assets/Logo/NextJSLogo.png'
import VercelLogo from '@/app/assets/Logo/VercelLogo.png'
import DaisyUI from '@/app/assets/Logo/DaisyUILogo.svg'

const Hero = () => {
  return (
    <div className="flex justify-center relative">
      <Image
        src={ background2 }
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={ 100 }
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 z-10"></div>
      <div className="hero pt-24 pb-24 relative z-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          { /*
          <MouseHoverEvent>
            <div className="relative max-w-3xl rounded-lg shadow-2xl">
              <Image
                alt="hero"
                src={heroImage}
                className="rounded-lg w-full h-full"
              />
            </div>
          </MouseHoverEvent>
          */ }
          <div className="mr-10">
            <div className='w-max'>
              <h1 className="animate-typing overflow-hidden whitespace-nowrap ml-20 text-9xl mt-8 pt-8 font-bold border-r-4 border-r-white text-primary text-center">Welcome.</h1>
            </div>
            <p className="my-8 p-6 text-primary max-w-3xl leading-10 text-lg">
              Proficient
              <span className="hover:animate-appear font-bold text-xl hover:bg-primary hover:text-white p-1 rounded-xl">full-stack</span>
               and
              <span className="hover:animate-appear font-bold text-xl hover:bg-primary hover:text-white p-1 rounded-xl">mobile application developer</span>
               with expertise in
              <span className="hover:animate-appear font-bold text-xl hover:bg-primary hover:text-white p-1 rounded-xl">various programming languages</span>
               and
              <span className="hover:animate-appear font-bold text-xl hover:bg-primary hover:text-white p-1 rounded-xl">strong communication abilities.</span>
               Currently exploring opportunities to
              <span className="hover:animate-appear font-bold text-xl hover:bg-primary hover:text-white p-1 rounded-xl">contribute technical skills</span>
               and
              <span className="hover:animate-appear font-bold text-xl hover:bg-primary hover:text-white p-1 rounded-xl">educational background</span>
               to support organizational objectives, with a focus on staying
              <span className="hover:animate-appear font-bold text-xl hover:bg-primary hover:text-white p-1 rounded-xl">informed about the latest developments</span>
               in IT.
            </p>
            <div className="flex justify-center">
              <Link href="#aboutMe" scroll={ true }>
                <button
                  className="btn btn-primary rounded-lg mx-10 text-gray-200"
                  onClick={ () => handleScrollToSection('aboutMe') }
                >
                  Get Started
                </button>
              </Link>
            </div>
            <div className="place-items-center mt-14">
              <MdOutlineArrowDropDownCircle className="animate-bounce text-5xl text-primary" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 mb-4 mr-4 z-30 pb-5  ">
          <h1 className="text-gray-600 text-md flex items-center">This website is created with
            <span className='inline-flex items-center ml-4 first:gap-4'>
              <Image src={ NextLogo } width={ 70 } alt='NextLogo'></Image>,
              <Image src={ DaisyUI } width={ 120 } alt='DaisyUi'></Image>
            </span>and deployed using
            <span className='inline-flex items-center mx-3'>
              <Image src={ VercelLogo } width={ 100 } alt='NextLogo'></Image>
            </span>
          </h1>
          <div onClick={ () => handleScrollToSection('Blog') } className='cursor-pointer'>
            <div className='text-sm text-black text-end mr-3 underline'>More info below</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
