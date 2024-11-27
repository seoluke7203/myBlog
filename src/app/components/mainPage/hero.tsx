/* eslint-disable max-len */
'use client'

// import IconList from './iconList'
// import MouseHoverEvent from '@/app/util/mouseHoverEffect'
// import heroImage from '@/app/assets/Logo/heroImage.jpg'
import Image from 'next/image'
import Link from 'next/link'
import background2 from '@/app/assets/graphics/background2.jpg'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import handleScrollToSection from '@/app/util/mouseScrollSection'

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
            <h1 className="text-9xl font-bold text-primary pt-16 text-center">Welcome.</h1>
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
                  className="btn btn-primary rounded-lg mx-10 text-secondary-content"
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
      </div>
    </div>
  )
}

export default Hero
