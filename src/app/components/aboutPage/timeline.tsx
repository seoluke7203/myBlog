import Image from 'next/image'
import ArtistryLogo from '@/app/assets/Logo/ArtistryLogo.png'
import CJSFLogo from '@/app/assets/Logo/CJSFLogo.png'
import SFULogo from '@/app/assets/Logo/SFULogo.png'
import VisionCodingLogo from '@/app/assets/Logo/visionCoding.png'
import Tacademy from '@/app/assets/Logo/Tacademy.jpg'

export default function Timeline() {
  const ArtistryStack = [ 'Next.js', 'TypeScript', 'TailwindCSS', 'DaisyUi', 'Nest.js', 'DrizzleORM', 'PostgreSQL', 'Jira' ]
  const TacademyStack = [ 'React', 'Spring', 'Docker', 'AWS', 'MySQL', 'Next.js' ]
  const VisionStack = [ 'Python', 'Machine Learning', 'Artificial Intelligence' ]
  const CJSFWStack = [ 'JavaScript', 'CSS', 'Docker', 'Drupal' ]
  const SFUStack = [ 'Go', 'Godot' ]
  const CJSFMStack = [ 'React Native', 'GitLab', 'Java' ]

  return (
    <div className="bg-base-200 text-primary-content pt-20 px-5 rounded-md">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle glass rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-secondary rounded-2xl p-3">
            <time className="italic">2023 July - Present (1 year 4 months)</time>
            <div className="text-2xl font-black text-center mt-5">Full-stack Developer</div>
            <div className="text-xl font-black text-center my-3">Artistry</div>
            <div className='w-full place-items-center'>
              <figure className='w-[100px] h-[100px] place-items-end mb-5'>
                <Image
                  src={ ArtistryLogo }
                  alt="logo"
                  placeholder="blur"
                  className='object-contain w-full h-full rounded-lg' />
              </figure>
              <div className='my-5'>
                { ArtistryStack.map((stack, index) => (
                  <div key={ index } className='badge odd:badge-warning event:badge-accent mr-4'>{ stack }</div>
                )) }
              </div>
            </div>
            <ul className="list-disc list-inside text-start space-y-2">
              <li>Utilized Agile methodology with two-week sprint, tracking and documenting ongoing progress of assigned tasks in Jira.</li>
              <li>Ensured continuous improvement by incorporating weekly code reviews to enhance the overall development process.</li>
              <li>Implemented Progressive Web Application using Next.js, Nest.js, Typescript,
                and Drizzle ORM, meeting design requirements through Tailwind, Headless UI, and Daisy UI, and deployed using Azure.</li>
              <li>Designed, implemented, and documented a relational database schema utilizing PostgreSQL, including
                entity relationships and attribute definitions to facilitate future maintenance, and understanding for other team members.</li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle glass rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10 bg-secondary rounded-2xl p-3">
            <time className="italic">2024 Aug - Present (4 months)</time>
            <div className="text-2xl font-black text-center mt-5">Full-stack Developer Learner</div>
            <div className="text-xl font-black text-center my-3">SK T Academy</div>
            <div className='w-full place-items-center'>
              <figure className='w-[100px] h-[100px] place-items-end my-5'>
                <Image
                  src={ Tacademy }
                  alt="logo"
                  placeholder="blur"
                  className='object-contain w-full h-full rounded-lg' />
              </figure>
              <div className='my-5'>
                { TacademyStack.map((stack, index) => (
                  <div key={ index } className='badge odd:badge-warning  event:badge-accent mr-4'>{ stack }</div>
                )) }
              </div>
            </div>
      iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
      been the primary part of consumer desktop offerings since its debut in August 1998,
      and has evolved through seven distinct forms
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle glass rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-secondary rounded-2xl p-3">
            <time className="italic">2024 Feb - June (4 months) </time>
            <div className="text-2xl font-black text-center mt-5">Coding Instructor</div>
            <div className="text-xl font-black text-center my-3">Vision Coding Academy</div>
            <div className='w-full place-items-center'>
              <figure className='w-[100px] h-[100px] place-items-end my-5'>
                <Image
                  src={ VisionCodingLogo }
                  alt="logo"
                  placeholder="blur"
                  className='object-contain w-full h-full rounded-lg' />
              </figure>
              <div className='my-5'>
                { VisionStack.map((stack, index) => (
                  <div key={ index } className='badge odd:badge-warning  event:badge-accent mr-4'>{ stack }</div>
                )) }
              </div>
            </div>
            <ul className="list-disc list-inside text-start space-y-2">
              <li>Responsible for designing and developing engaging and comprehensive course curriculums that cover fundamental to
                advanced Python programming concepts, Artificial Intelligence, and Machine Learning to high school students and adults.</li>
              <li>Successfully achieved a 30% increase in learner enrollment and a 20% boost in net income through effective education
                methods, with an anticipated expectation of further net income growth by 40% driven by introduction of online courses.</li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle glass rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10 bg-secondary rounded-2xl p-3">
            <time className="italic">2023 Sep - Dec (4 months)</time>
            <div className="text-2xl font-black text-center mt-5">Web Developer</div>
            <div className="text-xl font-black text-center my-3">CJSF 90.1 FM Radio</div>
            <div className='w-full place-items-center'>
              <figure className='w-[100px] h-[100px] place-items-end my-5'>
                <Image
                  src={ CJSFLogo }
                  alt="logo"
                  placeholder="blur"
                  className='object-contain w-full h-full rounded-lg' />
              </figure>
              <div className='my-5'>
                { CJSFWStack.map((stack, index) => (
                  <div key={ index } className='badge odd:badge-warning  event:badge-accent mr-4'>{ stack }</div>
                )) }
              </div>
            </div>
            <ul className='list-disc list-inside text-start space-y-2'>
              <li>Responsible for migrating the company’s website from Drupal 7 to 8 by utilizing Docker, MySQL, and PHP,
                while ensuring data integrity, content migration, and updating contributed modules and themes.</li>
              <li>Led the redesign of the company’s funding website using Figma for wireframes, and Drupal and CSS
                for a more convenient and appealing design, achieving a 55% increase in funds compared to the previous year.</li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle glass rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-secondary rounded-2xl p-3">
            <time className="italic">2023 May - Aug (4 months)</time>
            <div className="text-2xl font-black text-center mt-5">Research Assistant</div>
            <div className="text-xl font-black text-center my-3">Simon Fraser University</div>
            <div className='w-full place-items-center'>
              <figure className='w-[100px] h-[100px] place-items-end my-5'>
                <Image
                  src={ SFULogo }
                  alt="logo"
                  placeholder="blur"
                  className='object-contain w-full h-full rounded-lg' />
              </figure>
              <div className='my-5'>
                { SFUStack.map((stack, index) => (
                  <div key={ index } className='badge odd:badge-warning  event:badge-accent mr-4'>{ stack }</div>
                )) }
              </div>
            </div>
            <ul className='list-disc list-inside text-start space-y-2'>
              <li>Developed a game called &quot;Ancient Treasure Adventure&quot;s.</li>
              <li>Led a team of four in a research project, under the guidance of Dr. Imran, focused on exploring efficient
                methods of teaching Python to new learners.</li>
              <li>Implemented innovative teaching methodologies to enhance the Python learning experience within the game.</li>
              <li>Utilized Godot Engine and deployed a prototype version using Railway server service.</li>
              <li>Created an interactive learning environment by incorporating puzzles, challenges, and quests to engage and educate players.</li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle glass rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10 bg-secondary rounded-2xl p-3">
            <time className="italic">2023 Sep - Dec (4 months)</time>
            <div className="text-2xl font-black text-center mt-5">Mobile Application Developer</div>
            <div className="text-xl font-black text-center my-3">CJSF 90.1 FM Radio</div>
            <div className='w-full place-items-center'>
              <figure className='w-[100px] h-[100px] place-items-end my-5'>
                <Image
                  src={ CJSFLogo }
                  alt="logo"
                  placeholder="blur"
                  className='object-contain w-full h-full rounded-lg' />
              </figure>
              <div className='my-5'>
                { CJSFMStack.map((stack, index) => (
                  <div key={ index } className='badge odd:badge-warning event:badge-accent mr-4'>{ stack }</div>
                )) }
              </div>
            </div>
            <ul className='list-disc list-inside text-start space-y-2'>
              <li>Developed the first launching radio streaming app using JavaScript and React Native for iOS and Android, implemented an
                automatic news updating algorithm that makes priorities of data fetched from the GitLab Web External API.</li>
              <li>Built a strategic and optimized approach to access radio playlists, resulting in increased overall efficiency for retrieving
                playlists and managing personal preferences while reducing battery consumption by 30%.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}