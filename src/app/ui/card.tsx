import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import exampleImage from '@/app/assets/wikiImage.jpg'
import ArtistryLogo from '@/app/assets/ArtistryLogo.png'
import CJSFLogo from '@/app/assets/CJSFLogo.png'
import SFULogo from '@/app/assets/SFULogo.png'
import VisionCoding from '@/app/assets/visionCoding.png'

interface Props {
  title: string;
  job: string;
  image: StaticImageData;
  startDate: string;
  endDate: string;
  current: boolean;
  duration: string;
  tags: string[];
}

export default function Card({ title='title', job='', startDate = '', endDate = '-', image, current = false, duration = '', tags = [] }: Props) {
  return(
    <div className="card bg-primary w-80 h-[672px] shadow-xl glass">
      <Link href="/about">
        <div className='flex justify-center mt-5'>
          <figure className='w-[300px] h-[300px] object-contain'>
            <Image
              src={ image }
              width={ 300 }
              height={ 300 }
              alt="Shoes"
              className='object-contain w-full h-full rounded-lg' />
          </figure>
        </div>
        <div className="card-body">
          <h1 className="card-title text-xl">
            { title }
            { current && <div className="badge badge-secondary">Current</div> }
          </h1>
          <h2 className ="text-lg my-2">{ job }</h2>
          <p className="flex justify-between">
            <span>Started:</span>
            <span className=''>{ startDate }</span>
          </p>
          <p className="flex justify-between">
            <span>Ended:</span>
            <span className=''>{ endDate }</span>
          </p>
          <p className='mt-2'> Duration: { duration }</p>
          <div className="card-actions justify-stretch mt-5">
            { tags.map((tag, index) => (
              <div key={ index } className="badge badge-outline">{ tag }</div>
            )) }
          </div>
        </div>
      </Link>

    </div>
  )
}