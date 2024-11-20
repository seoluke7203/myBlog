/* eslint-disable max-len */
import IconList from './iconList'
import MouseHoverEvent from '@/app/util/mouseHoverEffect'
import heroImage from '@/app/assets/heroImage.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className="hero bg-base-200 pt-36 pb-24 glass">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <MouseHoverEvent>
            <div className="relative max-w-3xl rounded-lg shadow-2xl">
              <Image
                alt="hero"
                src= { heroImage }
                className="rounded-lg w-full h-full"
              />
            </div>
          </MouseHoverEvent>
          <div className='mr-10'>
            <h1 className="text-9xl font-bold text-primary pt-48">Welcome.</h1>
            <p className="my-10 p-6 text-primary max-w-xl bg-secondary rounded-xl">
            Highly motivated full-stack developer and mobile application developer proficient in multiple programming languages with strong communication skills. Actively seeking a challenging role to apply my education and technical expertise for organizational growth, while staying updated with emerging IT trends.
            </p>
            <Link href="#aboutMe" scroll={ true }>
              <button className="btn btn-primary rounded-lg">Get Started</button>
            </Link>
            <div className="mt-10">
              <IconList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
