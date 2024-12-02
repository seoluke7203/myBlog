'use client'

import { useState } from 'react'
import Hero from '@/app/components/aboutPage/hero'
import Timeline from '@/app/components/aboutPage/timeline'
import Header from '@/app/components/common/header'
import Education from '@/app/components/aboutPage/education'
import Footer from '@/app/components/common/footer'
import Skills from '@/app/components/aboutPage/skills'

export default function Page() {
  const [ isEnglish, setIsEnglish ] =useState(true)

  const handleToggle = () => {
    console.log('Toggled', isEnglish)
    setIsEnglish((prev) => !prev) // Toggle between true and false
  }

  return (
    <div>
      <div id="top" className='sticky top-0 z-50'>
        <Header />
      </div>
      <Hero />
      <label className="flex cursor-pointer gap-2 place-items-center place-content-center my-8">
        <span className="text-3xl text-white">English</span>
        <input type="checkbox" value="synthwave" className="toggle" checked={ !isEnglish } onChange={ handleToggle }/>
        <span className="text-3xl text-white">Korean</span>
      </label>

      <div className='m-2 p-2'>
        <div tabIndex= { 0 } className="collapse collapse-arrow bg-base-200 my-2">
          <input type="checkbox"></input>
          <div className="collapse-title text-3xl font-medium text-black text-center">Skills</div>
          <div className="collapse-content">
            <Skills isEnglish={ isEnglish }/>
          </div>
        </div>
        <div tabIndex= { 1 } className="collapse collapse-arrow bg-base-200">
          <input type="checkbox"></input>
          <div className="collapse-title text-3xl font-medium text-black text-center">Experience</div>
          <div className="collapse-content">
            <Timeline />
          </div>
        </div>
        <div tabIndex= { 2 } className="collapse collapse-arrow bg-base-200 my-2">
          <input type="checkbox"></input>
          <div className="collapse-title text-3xl font-medium text-black text-center">Education</div>
          <div className="collapse-content">
            <Education />
          </div>
        </div>
        <div tabIndex= { 3 } className="collapse collapse-arrow bg-base-200 my-2">
          <input type="checkbox"></input>
          <div className="collapse-title text-3xl font-medium text-black text-center">Other Activities</div>
          <div className="collapse-content">
            <Education />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}