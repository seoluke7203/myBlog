/* eslint-disable max-len */
import Poster from '@/app/ui/poster'
import wikiImage from '@/app/assets/Logo/wikiImage.jpg'

export default function Projects() {
  return (
    <div className='flex justify-center'>
      <div className="pt-10 pb-20 w-4/5">
        <h1 className="text-3xl font-bold text-primary pb-10">Projects</h1>
        <div className='flex flex-col gap-10'>
          <Poster
            title={ 'Galaxy Ticketing Web Application' }
            summary={ 'A fullstack web application that allows users to purchase tickets for events and concerts.' }
            description={ 'Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,' }
            techStack={ [ 'React', 'TailWindCSS', 'Spring', 'MySQL', 'npm' ] }
            date={ 'Oct.2024 - Dec.2024' }
            image={ wikiImage }
            link = { '' }
          />

          <Poster
            title={ 'Blog' }
            summary={ 'A fullstack web application that allows users to purchase tickets for events and concerts.' }
            description={ 'Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,' }
            techStack={ [ 'Next.js', 'pnpm', 'TailwindCSS', 'DaisyUI' ] }
            date={ 'Oct.2024 - Dec.2024' }
            image={ wikiImage }
            link = { '' }
          />

          <Poster
            title={ 'FitPulse' }
            summary={ 'A fullstack web application that allows users to purchase tickets for events and concerts.' }
            description={ 'Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,' }
            techStack={ [ 'React', 'TailWind', 'Spring', 'MySQL' ] }
            date={ 'Oct.2024 - Dec.2024' }
            image={ wikiImage }
            link = { '' }
          />

          <Poster
            title={ 'SFU-Transiter' }
            summary={ 'A fullstack web application that allows users to purchase tickets for events and concerts.' }
            description={ 'Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,Fill me in later,' }
            techStack={ [ 'React', 'TailWind', 'Spring', 'MySQL' ] }
            date={ 'Oct.2024 - Dec.2024' }
            image={ wikiImage }
            link = { '' }
          />
        </div>
      </div>
    </div>
  )
}