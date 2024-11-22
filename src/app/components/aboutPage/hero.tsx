import Image from 'next/image'
import wikiImage from '@/app/assets/Logo/wikiImage.jpg'
import background from '@/app/assets/graphics/background.jpg'
export default function Hero() {
  return (
    <div
      className="hero max-h-screen"
      style={ { backgroundImage: `url(${background.src})` } }>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <Image
            src={ wikiImage }
            alt="Picture of the author"
            width={ 500 }
            height={ 500 }
            className="animate-appear rounded-full my-5 border-8 border-primary"
          />
          <h1 className="mb-5 text-5xl font-bold">In Ho (Luke) Seo </h1>
        </div>
      </div>
    </div>
  )
}
