/* eslint-disable max-len */
// Code Inspired from https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/

import Card from '@/app/ui/card'
import ArtistryLogo from '@/app/assets/Logo/ArtistryLogo.png'
import CJSFLogo from '@/app/assets/Logo/CJSFLogo.png'
import SFULogo from '@/app/assets/Logo/SFULogo.png'
import VisionCodingLogo from '@/app/assets/Logo/visionCoding.png'
import Tacademy from '@/app/assets/Logo/Tacademy.jpg'

const AboutMe = () => {
  return (
    <div className='flex justify-center'>
      <div className="pt-10 pb-20 w-4/5">
        <h1 className="text-3xl font-bold text-primary pb-10">About Me</h1>
        <div className="inline-flex w-full flex-nowrap overflow-hidden">
          <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
            <li className='carousel-item'>
              <Card
                title="Artistry"
                job={ 'FullStack Developer' }
                image={ ArtistryLogo }
                startDate={ '2023-Jul' }
                endDate='-'
                current={ true }
                duration={ '1 year 4 months' }
                tags={ [ 'Next.js', 'TailwindCSS', 'DaisyUI', 'Nest.js', 'DrizzleORM', 'PostgreSQL' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="SK T Academy ASAC Bootcamp"
                image={ Tacademy }
                job={ 'FullStack Developer Learner' }
                startDate={ '2024-Aug' }
                endDate={ '-' }
                current={ true }
                duration={ '4 months' }
                tags={ [ 'React', 'Spring', 'Docker', 'AWS', 'MySQL', 'Next.js' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="Vision Coding Academy"
                job={ 'Coding Instructor' }
                image={ VisionCodingLogo }
                startDate={ '2024-Feb' }
                endDate={ '2024-June' }
                current={ false }
                duration={ '4 months' }
                tags={ [ 'Python', 'Machine Learning', 'Artificial Intelligence' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="CJSF 90.1 FM Radio"
                image={ CJSFLogo }
                job={ 'Web Developer' }
                startDate={ '2023-Sep' }
                endDate={ '2023-Dec' }
                current={ false }
                duration={ '4 months' }
                tags={ [ 'JavaScript', 'CSS', 'Docker', 'Drupal' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="Simon Fraser University"
                image={ SFULogo }
                job={ 'Research Assistant' }
                startDate={ '2023-May' }
                endDate={ '2023-Aug' }
                duration={ '4 months' }
                current={ false }
                tags={ [ 'Go', 'Godot' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="CJSF 90.1 FM Radio"
                image={ CJSFLogo }
                job={ 'Mobile Application Developer' }
                startDate={ '2022-May' }
                endDate={ '2022-Dec' }
                current={ false }
                duration={ '8 months' }
                tags={ [ 'React Native', 'GitLab' ] }/>
            </li>
          </ul>
          <ul
            className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
            aria-hidden="true"
          >
            <li className='carousel-item'>
              <Card
                title="Artistry"
                job={ 'FullStack Developer' }
                image={ ArtistryLogo }
                startDate={ '2023-Jul' }
                endDate='-'
                current={ true }
                duration={ '1 year 4 months' }
                tags={ [ 'Next.js', 'TailwindCSS', 'DaisyUI', 'Nest.js', 'DrizzleORM', 'PostgreSQL' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="SK T Academy ASAC Bootcamp"
                image={ Tacademy }
                job={ 'FullStack Developer Learner' }
                startDate={ '2024-Aug' }
                endDate={ '-' }
                current={ true }
                duration={ '4 months' }
                tags={ [ 'React', 'Spring', 'Docker', 'AWS', 'MySQL', 'Next.js' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="Vision Coding Academy"
                job={ 'Coding Instructor' }
                image={ VisionCodingLogo }
                startDate={ '2024-Feb' }
                endDate={ '2024-June' }
                current={ false }
                duration={ '4 months' }
                tags={ [ 'Python', 'Machine Learning', 'Artificial Intelligence' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="CJSF 90.1 FM Radio"
                image={ CJSFLogo }
                job={ 'Web Developer' }
                startDate={ '2023-Sep' }
                endDate={ '2023-Dec' }
                current={ false }
                duration={ '4 months' }
                tags={ [ 'JavaScript', 'CSS', 'Docker', 'Drupal' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="Simon Fraser University"
                image={ SFULogo }
                job={ 'Research Assistant' }
                startDate={ '2023-May' }
                endDate={ '2023-Aug' }
                duration={ '4 months' }
                current={ false }
                tags={ [ 'Go', 'Godot' ] }/>
            </li>
            <li className='carousel-item'>
              <Card
                title="CJSF 90.1 FM Radio"
                image={ CJSFLogo }
                job={ 'Mobile Application Developer' }
                startDate={ '2022-May' }
                endDate={ '2022-Dec' }
                current={ false }
                duration={ '8 months' }
                tags={ [ 'React Native', 'GitLab' ] }/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe