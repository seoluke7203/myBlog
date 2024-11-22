import Hero from '@/app/components/aboutPage/hero'
import Timeline from '@/app/components/aboutPage/timeline'
import Header from '@/app/components/common/header'

export default function Page() {
  return (
    <div>
      <div id="top" className='sticky top-0 z-50'>
        <Header />
      </div>
      <Hero />
      <Timeline />
    </div>
  )
}