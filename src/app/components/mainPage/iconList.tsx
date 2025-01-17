import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const IconList = () => {
  return (
    <div className='flex flex-col gap-4 rounded-full ml-4 p-3 border-8 border-accent shadow-2xl border-double bg-base-100 text-accent'>
      <Link href='https://github.com/seoluke7203' aria-label="Github target='_blank'">
        <FaGithub className="text-3xl" />
      </Link>
      <Link href='https://www.linkedin.com/in/inhos/' aria-label="LinkedIn" target='_blank'>
        <FaLinkedin className="text-3xl" />
      </Link>
      <Link href='/'>
        <FaInstagram className="text-3xl" aria-label="Instagram" target='_blank'/>
      </Link>
      <a href='mailto:seoluke7203@gmail.com' aria-label='mailTo'>
        <MdEmail className="text-3xl  " />
      </a>
    </div>
  )
}

export default IconList