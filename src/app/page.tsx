'use client'
// not sure it should be client
import Header from '@/app/components/header'
import Hero from '@/app/components/hero'
import AboutMe from '@/app/components/aboutMe'
import WikiPage from '@/app/components/wikiPage'
import Projects from '@/app/components/projects'

export default function Home() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div id="top">
        <Header />
      </div>
      <Hero />
      <div id ="aboutMe">
        <AboutMe/>
      </div>
      <WikiPage />
      <div id ="projects">
        <Projects />
      </div>
      <div className='text-center p-10'>
        <button
          onClick={ handleScrollToTop }
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        > Back to Top
        </button>
      </div>
    </div>
  )
}
