
import Header from '@/app/components/common/header'
import Hero from '@/app/components/mainPage/hero'
import AboutMe from '@/app/components/mainPage/aboutMe'
import WikiSlide from '@/app/components/mainPage/wikiSlide'
import Projects from '@/app/components/mainPage/projects'
import handleScrollToTop from '@/app/util/mouseScrollToTop'
import IconList from '@/app/components/mainPage/iconList'

export default function Home() {
  return (
    <div>
      <div id="top" className='sticky top-0 z-50'>
        <Header />
      </div>
      <div className="flex flex-col ">
        <aside className='sticky top-2/4 z-50'>
          <div className="absolute">
            <IconList />
          </div>
        </aside>
        <Hero />
        <div id ="aboutMe">
          <AboutMe/>
        </div>
        <WikiSlide />
        <div id ="projects">
          <Projects />
        </div>
        <div className='text-center p-10'>
          <button
            onClick={ handleScrollToTop }
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-bounce"
          > Back to Top
          </button>
        </div>
      </div>

    </div>
  )
}
