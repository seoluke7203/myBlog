import Image from 'next/image'
import wikiImage from '@/app/assets/Logo/wikiImage.jpg'
import background from '@/app/assets/graphics/background.jpg'

export default function Hero() {
  return (
    <div className="relative hero max-h-screen">
      <Image
        src={ background }
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={ 100 }
        placeholder='blur'
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="relative z-20 hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <Image
            src={ wikiImage }
            alt="Picture of the author"
            width={ 500 }
            height={ 500 }
            className="animate-appear rounded-full my-5 border-8 border-primary"
          />
          <h1 className="mb-5 text-5xl font-bold">In Ho (Luke) Seo</h1>
        </div>
      </div>
    </div>
  )
}
