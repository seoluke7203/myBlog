'use client'

import { useState } from 'react'
import Hero from '@/app/components/aboutPage/hero'
import Timeline from '@/app/components/aboutPage/timeline'
import Header from '@/app/components/common/header'
import Education from '@/app/components/aboutPage/education'
import Footer from '@/app/components/common/footer'
import Skills from '@/app/components/aboutPage/skills'
import Activity from '@/app/components/aboutPage/activity'

export default function Page() {
  const [ isEnglish, setIsEnglish ] =useState(true)

  const handleToggle = () => {
    console.log('Toggled', isEnglish)
    setIsEnglish((prev) => !prev) // Toggle between true and false
  }

  return (
    <div className = 'bg-primary'>
      <div id="top" className='sticky top-0 z-50'>
        <Header />
      </div>
      <Hero />
      <div className="flex justify-center sticky top-3/4 z-50 ">
        <label className="inline-flex absolute cursor-pointer gap-2 items-center p-4 rounded-full border-2 border-base-300 mt-10 my-5 glass">
          <span className="text-lg text-accent font-bold">English</span>
          <input type="checkbox" value="synthwave" className="toggle" checked={ !isEnglish } onChange={ handleToggle } />
          <span className="text-lg text-accent font-bold">Korean</span>
        </label>
      </div>

      <div className='-mt-4 p-2 mb-24'>
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
            <Timeline isEnglish={ isEnglish } />
          </div>
        </div>
        <div tabIndex= { 2 } className="collapse collapse-arrow bg-base-200 my-2">
          <input type="checkbox"></input>
          <div className="collapse-title text-3xl font-medium text-black text-center">Education</div>
          <div className="collapse-content">
            <Education isEnglish={ isEnglish } />
          </div>
        </div>
        <div tabIndex= { 3 } className="collapse collapse-arrow bg-base-200 my-2">
          <input type="checkbox"></input>
          <div className="collapse-title text-3xl font-medium text-black text-center">Other Activities</div>
          <div className="collapse-content">
            <Activity isEnglish={ isEnglish } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}