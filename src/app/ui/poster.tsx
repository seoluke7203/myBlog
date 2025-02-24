import { StaticImageData } from 'next/image'
import { FaSquareGithub } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'
import wikiImage from '@/app/assets/Logo/wikiImage.jpg'
import SimpleSlider from '@/app/ui/projectCarousel'
import galaxy1 from '@/app/assets/projectImages/galaxy1.png'
import galaxy2 from '@/app/assets/projectImages/galaxy2.png'


interface Props {
  title: string;
  summary: string;
  description: string[];
  descriptionKr: string[];
  techStack: string[];
  date: string;
  image: StaticImageData;
  link: string;
  id: number;
}

export default function Poster({ id, title, summary, description, descriptionKr, techStack, date, image, link }:Props) {
  const images = {
    galaxy1,
    galaxy2,
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
      <figure className='w-1/3 h-full mt-20' >
        <SimpleSlider images={ images }/>
      </figure>
      <div className="card-body mt-4">
        <div className='flex justify-between items-start flex-col mb-2'>
          <p className="text-secondary text-start mr-2">{ date } </p>
          <h2 className="text-2xl card-title text-secondary-content">{ title }</h2>
        </div>

        <p className="text-secondary-content">{ summary }</p>
        <ul className="text-secondary-content">
          { techStack.map((tech, index) => (
            <li key={ index } className="badge rounded-md odd:badge-accent even:badge-secondary mr-2 p-3 ">
              <span className='text-white'>{ tech }</span></li>
          )) }
        </ul>
        <div className="diff aspect-[12/6] rounded-xl mt-2">
          <div className="diff-item-1">
            <div className="px-8 bg-accent grid text-base-100 place-content-center leading-loose font-light">
              { descriptionKr.map((paragraph, index) =>(
                <p key={ index }>{ paragraph } <br/><br/></p>
              )) }
            </div>
          </div>
          <div className="diff-item-2">
            <div className="px-8 bg-primary grid text-primary-content place-content-center leading-loose font-light">
              { description.map((paragraph, index) =>(
                <p key={ index }>{ paragraph } <br/><br/></p>
              )) }
            </div>
          </div>
          <div className="diff-resizer">
          </div>
        </div>
        <div className="text-primary-content text-center text-sm">Move the resizer to translate</div>
        <div className="card-actions justify-between flex items-center">
          <Link href={ `project/${id}` }>
            <button className="btn btn-accent font-bold text-base-100 rounded-xl">View More
            </button>
          </Link>
          <Link href={ link } aria-label='Read more about this project'>
            <button aria-label='github_link'>
              <FaSquareGithub className="text-5xl text-accent" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}