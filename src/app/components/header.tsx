'use client'

import { themeChange } from 'theme-change'
import { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Blog.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-20">
          <li><a>About me</a></li>
          <li>
            <details className='dropdown'>
              <summary className=''>Wiki</summary>
              <ul className="dropdown-content menu z-[2] w-52 rounded-box bg-base-200">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Contact me</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <select data-choose-theme defaultValue = "" className="select select-bordered w-full max-w-xs">
          <option disabled value="">Change Theme</option>
          <option value="">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="coffee">Coffee</option>
          <option value="lofi">Lofi</option>
        </select>
      </div>
    </div>
  )
}

export default Header