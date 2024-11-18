import Header from '@/app/components/header'
import styles from '@/app/ui/home.module.css'
import Hero from '@/app/components/hero'
import Card from '@/app/ui/card'
import AboutMe from '@/app/components/aboutMe'
import WikiPage from '@/app/components/wikiPage'
import Projects from '@/app/components/projects'

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Hero />

        <AboutMe />
        <WikiPage />
        <Projects />

      </div>
    </div>
  )
}
