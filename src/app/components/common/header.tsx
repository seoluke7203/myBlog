'use client'

import { themeChange } from 'theme-change'
import { useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="navbar glass text-primary-content">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">Blog.</Link>
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
        <select data-choose-theme defaultValue = "" className="select select-bordered w-full max-w-xs">
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
  )
}

export default Header