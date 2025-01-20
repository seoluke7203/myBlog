import React from 'react'
import Image from 'next/image'
import { memo } from 'react'
import { StaticImageData } from 'next/image'

interface TechStackBadgesProps {
  stack: string[];
}

interface CompanyLogoProps {
  logo: StaticImageData;
  alt: string;
}

interface TimelineItemProps {
  isStart?: boolean;
  date: string;
  position: string;
  company: string;
  logo: StaticImageData;
  stack: string[];
  children: React.ReactNode;
}

interface Experience {
  date: string;
  position: string;
  company: string;
  logo: StaticImageData;
  stack: string[];
  descriptionEn: React.ReactNode;
  descriptionKo: React.ReactNode;
}

interface TimelineProps {
  isEnglish: boolean;
  experiences: Experience[];
}

// Component for the timeline item marker
const TimelineMarker = memo(() => (
  <div className="timeline-middle glass rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
  </div>
))

TimelineMarker.displayName = 'TimelineMarker'

// Component for the tech stack badges
const TechStackBadges = memo(({ stack }: TechStackBadgesProps) => (
  <div className="my-5 flex flex-wrap gap-2">
    { stack.map((tech) => (
      <div key={ tech } className="badge badge-accent">{ tech }</div>
    )) }
  </div>
))

TechStackBadges.displayName = 'TechStackBadges'

// Component for the company logo
const CompanyLogo = memo(({ logo, alt }: CompanyLogoProps) => (
  <figure className="w-24 h-24 mx-auto mb-5">
    <Image
      src={ logo }
      alt={ alt }
      placeholder="blur"
      className="object-contain w-full h-full rounded-lg"
    />
  </figure>
))

CompanyLogo.displayName = 'CompanyLogo'

// Component for a single timeline item
const TimelineItem = memo(({
  isStart = false,
  date,
  position,
  company,
  logo,
  stack,
  children
}: TimelineItemProps) => {
  const containerClass = `${isStart ? 'timeline-start' : 'timeline-end'} mb-10 ${isStart ? 'md:text-end' : ''} bg-base-100 rounded-2xl p-4 max-w-full`

  return (
    <li>
      <hr />
      <TimelineMarker />
      <div className={ containerClass }>
        <time className="italic block mb-4">{ date }</time>
        <div className="text-2xl font-black text-center mt-5">{ position }</div>
        <div className="text-xl font-black text-center my-3">{ company }</div>
        <div className="w-full place-items-center">
          <CompanyLogo logo={ logo } alt={ `${company} logo` } />
          <TechStackBadges stack={ stack } />
        </div>
        { children }
      </div>
      <hr />
    </li>
  )
})

TimelineItem.displayName = 'TimelineItem'

// Main Timeline component
const Timeline = ({ isEnglish, experiences }: TimelineProps) => {
  return (
    <div className="bg-base-200 text-primary-content pt-8 px-5 rounded-md overflow-x-hidden max-w-[95%] mx-auto">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        { experiences.map((exp, index) => (
          <TimelineItem
            key={ `${exp.company}-${exp.date}` }
            isStart={ index % 2 === 0 }
            date={ exp.date }
            position={ exp.position }
            company={ exp.company }
            logo={ exp.logo }
            stack={ exp.stack }
          >
            { isEnglish ? exp.descriptionEn : exp.descriptionKo }
          </TimelineItem>
        )) }
      </ul>
    </div>
  )
}

export default memo(Timeline)