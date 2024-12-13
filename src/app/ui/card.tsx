import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

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
    <div className="indicator">
      { current && (
        <span className="indicator-item badge badge-error indicator-top indicator-start text-base-100 p-4 mt-8 ml-16 rounded-none">
            Current
        </span>
      ) }
      <div className="cursor-pointer card bg-primary w-80 h-[600px] shadow-2xl text-accent mb-32 rounded-none p-1">
        <Link href="/about">
          <div className="flex justify-center mt-5">
            <figure className="w-[110px] h-[110px] mt-10 object-contain">
              <Image
                src={ image }
                width={ 200 }
                height={ 200 }
                placeholder="blur"
                alt="logo"
                className="object-contain w-full h-full rounded-lg"
              />
            </figure>
          </div>
          <div className="card-body flex flex-col justify-between gap-y-5 h-[300px]">
            <div className="flex flex-col items-start gap-y-2">
              <h1 className="card-title text-2xl text-start">{ job }</h1>
              <h2 className="text-lg text-start">{ title }</h2>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="flex justify-between">
                <span>Started:</span>
                <span>{ startDate }</span>
              </p>
              <p className="flex justify-between">
                <span>Ended:</span>
                <span>{ endDate }</span>
              </p>
              <p className="mt-2">Duration: { duration }</p>
            </div>
          </div>
          <div className="card-footer">
            <div className='divider'></div>
            <div className="flex flex-wrap justify-center ml-3 gap-2">
              { tags.map((tag, index) => (
                <div key={ index } className="badge badge-outline rounded-none p-3">
                  { tag }
                </div>
              )) }
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}