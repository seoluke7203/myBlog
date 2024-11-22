import { StaticImageData } from 'next/image'
import { FaSquareGithub } from 'react-icons/fa6'
import Link from 'next/link'

interface Props {
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  date: string;
  image: StaticImageData;
  link: string;
}

export default function Poster({ title, summary, description, techStack, date, image, link }:Props) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
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
            <div key={ index } className="badge odd:badge-primary even:badge-secondary mr-5">{ tech }</div>
          )) }
        </ul>
        <p className='text-secondary-content w-2/3 mt-14'> { description }</p>
        <div className="card-actions justify-end">
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