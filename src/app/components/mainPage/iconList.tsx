import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const IconList = () => {
  return (
    <div className='flex flex-col gap-4 rounded-full ml-4 p-3 border-8 bg-white border-black shadow-2xl border-double'>
      <Link href='https://github.com/seoluke7203'>
        <FaGithub className="text-3xl text-primary" />
      </Link>
      <Link href='https://www.linkedin.com/in/inhos/'>
        <FaLinkedin className="text-3xl text-primary" />
      </Link>
      <Link href='/'>
        <FaInstagram className="text-3xl text-primary" />
      </Link>
      <a href='mailto:seoluke7203@gmail.com'>
        <MdEmail className="text-3xl text-primary" />
      </a>
    </div>
  )
}

export default IconList