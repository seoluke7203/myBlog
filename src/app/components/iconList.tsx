import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const IconList = () => {
  return (
    <div className='flex gap-4'>
      <Link href='https://github.com/seoluke7203'>
        <FaGithub className="text-5xl text-primary" />
      </Link>
      <Link href='https://www.linkedin.com/in/inhos/'>
        <FaLinkedin className="text-5xl text-primary" />
      </Link>
      <Link href='/'>
        <FaInstagram className="text-5xl text-primary" />
      </Link>
    </div>
  )
}

export default IconList