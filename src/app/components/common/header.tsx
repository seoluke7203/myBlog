'use client'

import { themeChange } from 'theme-change'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProgressBar from '@/app/components/common/progressBar'

const Header = () => {
  const [ scrollProgress, setScrollProgress ] = useState(0)

  const updateScrollProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = (window.scrollY / scrollHeight) * 100
    setScrollProgress(scrolled)
  }

  useEffect(() => {
    themeChange(false)
    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <div>
      <div className="navbar glass text-primary-content">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl rounded-lg">Blog.</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-20">
            <li><Link href="/about">About me</Link></li>
            <li><Link href="/wikiPage">Wiki</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/contact">Contact me</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <select data-choose-theme defaultValue="" className="select select-bordered w-full max-w-xs">
            <option disabled value="">Change Theme</option>
            <option value="">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="nord">Cyberpunk</option>
            <option value="coffee">Coffee</option>
            <option value="lofi">Lofi</option>
          </select>
        </div>
      </div>
      <ProgressBar width={ scrollProgress } />
    </div>
  )
}

export default Header
