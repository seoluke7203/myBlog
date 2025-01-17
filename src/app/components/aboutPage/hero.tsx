import Image from 'next/image'
import wikiImage from '@/app/assets/Logo/wikiImage.jpg'
import background from '@/app/assets/graphics/background6.jpg'

export default function Hero() {
  return (
    <div className="relative hero h-screen">
      <Image
        src={ background }
        alt="Background"
        fill
        quality={ 100 }
        placeholder='blur'
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-primary bg-opacity-60 z-10"></div>
      <div className="relative z-20 hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <Image
            src={ wikiImage }
            alt="Picture of the author"
            width={ 500 }
            height={ 500 }
            className="animate-appear rounded-full mt-5 border-8 border-accent"
          />
          <h1 className="my-14 text-5xl font-bold text-accent">In Ho (Luke) Seo</h1>
        </div>
      </div>
    </div>
  )
}
