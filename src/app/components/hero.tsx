import IconList from './iconList'
import MouseHoverEvent from '@/app/util/mouseHoverEffect'
import heroImage from '@/app/assets/heroImage.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className="hero bg-base-200 pt-36 pb-24 glass w-4/5">
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
            <h1 className="text-9xl font-bold text-primary">Welcome.</h1>
            <p className="py-6 text-accent-content">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
