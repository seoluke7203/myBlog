/* eslint-disable max-len */
import IconList from './iconList'
import MouseHoverEvent from '@/app/util/mouseHoverEffect'
import heroImage from '@/app/assets/heroImage.jpg'
import Image from 'next/image'
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
          <div>
            <h1 className="text-9xl font-bold text-primary pt-48">Welcome.</h1>
            <p className="py-6 text-primary max-w-xl">
            Highly motivated full-stack developer and mobile application developer proficient in multiple programming languages with strong communication skills. Actively seeking a challenging role to apply my education and technical expertise for organizational growth, while staying updated with emerging IT trends.
            </p>
            <button className="btn btn-primary rounded-lg">Get Started</button>
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
