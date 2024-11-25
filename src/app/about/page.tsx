import Hero from '@/app/components/aboutPage/hero'
import Timeline from '@/app/components/aboutPage/timeline'
import Header from '@/app/components/common/header'
import Education from '@/app/components/aboutPage/education'
import Footer from '@/app/components/common/footer'

export default function Page() {
  return (
    <div>
      <div id="top" className='sticky top-0 z-50'>
        <Header />
      </div>
      <Hero />
      <div className='m-2 p-2'>
        <div tabIndex= { 0 } className="collapse bg-base-200">
          <div className="collapse-title text-3xl font-medium text-black divider">Experience</div>
          <div className="collapse-content">
            <Timeline />
          </div>
        </div>
        <div tabIndex= { 2 } className="collapse bg-base-200 my-2">
          <div className="collapse-title text-3xl font-medium text-black divider">Education</div>
          <div className="collapse-content">
            <Education />
          </div>
        </div>
        <div tabIndex= { 3 } className="collapse bg-base-200 my-2">
          <div className="collapse-title text-3xl font-medium text-black divider">Other Activities</div>
          <div className="collapse-content">
            <Education />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}