
import Header from '@/app/components/common/header'
import Hero from '@/app/components/mainPage/hero'
import AboutMe from '@/app/components/mainPage/aboutMe'
import WikiSlide from '@/app/components/mainPage/wikiSlide'
import Projects from '@/app/components/mainPage/projects'
import IconList from '@/app/components/mainPage/iconList'
import Footer from '@/app/components/common/footer'


export default function Home() {

  return (
    <div className='bg-primary'>
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
        <div id ="aboutMe" className='bg-base-100'>
          <AboutMe/>
        </div>
        <div id = "wikiPage" className='bg-base-200'>
          <WikiSlide />
        </div>
        <div id ="projects" className='bg-base-100'>
          <Projects />
        </div>

      </div>
      <Footer />
    </div>
  )
}
