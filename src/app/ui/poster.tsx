import { StaticImageData } from 'next/image'
import { FaSquareGithub } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'
import wikiImage from '@/app/assets/Logo/wikiImage.jpg'

interface Props {
  title: string;
  summary: string;
  description: string;
  descriptionKr: string;
  techStack: string[];
  date: string;
  image: StaticImageData;
  link: string;
  id: number;
}

export default function Poster({ id, title, summary, description, descriptionKr, techStack, date, image, link }:Props) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          src={ wikiImage }
          width={ 500 }
          alt="Album" />
      </figure>
      <div className="card-body">
        <div className='flex justify-between items-start'>
          <h2 className="text-2xl card-title text-secondary-content">{ title }</h2>
          <p className="text-secondary-content text-right mr-2">{ date } </p>
        </div>
        <p className="text-secondary-content">{ summary }</p>
        <ul className="text-secondary-content">
          { techStack.map((tech, index) => (
            <li key={ index } className="badge odd:badge-primary even:badge-secondary mr-5 p-3 "> <span className='text-white'>{ tech }</span></li>
          )) }
        </ul>
        <div className="diff aspect-[12/6] rounded-xl">
          <div className="diff-item-1">
            <div className="px-8 bg-secondary text-primary-content grid place-content-center font-black">
              { descriptionKr }
            </div>
          </div>
          <div className="diff-item-2">
            <div className="px-8 bg-base-200 grid text-primary-content place-content-center font-black">{ description }</div>
          </div>
          <div className="diff-resizer">
          </div>
        </div>
        <div className="text-primary-content text-center">Move the resizer to translate</div>
        <div className="card-actions justify-between flex items-center">
          <Link href={ `project/${id}` }>
            <button className="btn btn-primary font-bold">View More
            </button>
          </Link>
          <Link href={ link }>
            <button className="btn btn-primary font-bold">Visit Github
              <FaSquareGithub className="inline-block text-5xl ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}