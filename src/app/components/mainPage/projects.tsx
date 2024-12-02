/* eslint-disable max-len */
import Poster from '@/app/ui/poster'
import wikiImage from '@/app/assets/Logo/wikiImage.jpg'

const description_detail = {

  Galaxy_eng: [
    'At SK T Academy, I worked with a team of three developers to clone and improve the Interpark ticketing website. Using React, DaisyUI, and Vite, I implemented most of the UI and optimized the development process. I also integrated React Router DOM for seamless navigation.',
    'I developed QR code and PDF generation features with jspdf and qrcode.react, built a real-time seat selection system, and implemented secure authentication using a Spring-based backend and BCrypt. Additionally, I designed and managed database entities to ensure reliable data handling.'
  ],
  'Galaxy_kor': [
    'SK T Academy에서 3명의 팀원과 함께 인터파크 티켓팅 웹사이트를 클론하고 개선하는 프로젝트를 진행했습니다. React, DaisyUI, Vite를 활용해 UI를 구현하고, React Router DOM으로 내비게이션을 최적화했습니다.',
    'jspdf와 qrcode.react로 QR 코드 및 PDF 생성 기능을 개발하고, 실시간 좌석 선택 및 Spring 기반의 보안 인증 시스템을 구현했습니다. 또한, 데이터베이스를 설계하고 안정적인 데이터 처리를 지원했습니다.'
  ],
  'Blog_eng': [
    'I independently designed, developed, and deployed a personal portfolio and tech blog using Next.js, achieving Lighthouse scores of 100, 89, 100, 100 (Performance, Accessibility, Best Practices, SEO).',
    'I optimized images with the .avif format, reducing file size by 75%, and implemented lazy loading for faster page load times. For UI/UX, I used DaisyUI components for consistency and Tailwind CSS for custom styling.',
    'I utilized pnpm for optimized dependency management and deployed the project with Vercel, ensuring efficient CI/CD. I also created dynamic animations using CSS and JavaScript for an engaging user experience.'
  ],
  'Blog_kor': [
    'Next.js를 사용해 개인 포트폴리오와 기술 블로그를 설계, 개발, 배포하며 Lighthouse 점수 100, 89, 100, 100(Performance, Accessibility, Best Practices, SEO)을 달성했습니다.',
    '.avif 형식으로 이미지를 최적화하여 75% 용량을 줄였고, 레이지 로딩으로 빠른 페이지 로딩을 구현했습니다. UI/UX에는 DaisyUI 컴포넌트와 Tailwind CSS로 스타일을 효율적으로 적용했습니다.',
    'pnpm을 사용해 의존성 관리를 최적화하고 Vercel을 통해 CI/CD 배포를 설정했습니다. CSS와 JavaScript로 동적인 애니메이션 효과를 추가해 사용자 경험을 향상시켰습니다.'
  ]
}

export default function Projects() {
  return (
    <div className='flex justify-center'>
      <div className="pt-10 pb-20 w-4/5">
        <h1 className="text-3xl font-bold text-primary pb-10">Projects</h1>
        <div className='flex flex-col gap-10'>
          <Poster
            id={ 1 }
            title={ 'Galaxy Ticketing Web Application' }
            summary={ 'A fullstack web application that allows users to purchase tickets for events and concerts.' }
            description={ description_detail.Galaxy_eng }
            descriptionKr= { description_detail.Galaxy_kor }
            techStack={ [ 'React', 'TailWindCSS', 'Spring', 'MySQL', 'npm', 'Vite' ] }
            date={ 'Oct.2024 - Dec.2024' }
            image={ wikiImage }
            link = { '' }
          />
          <div id="Blog">
            <Poster
              id={ 2 }
              title={ 'Blog' }
              summary={ 'A fullstack web application that allows users to purchase tickets for events and concerts.' }
              description={ description_detail.Blog_eng }
              descriptionKr= { description_detail.Blog_kor }
              techStack={ [ 'Next.js', 'pnpm', 'TailwindCSS', 'DaisyUI', 'Vercel' ] }
              date={ 'Oct.2024 - Dec.2024' }
              image={ wikiImage }
              link = { '' }
            />
          </div>
        </div>
      </div>
    </div>
  )
}