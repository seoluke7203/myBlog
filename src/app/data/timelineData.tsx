/* eslint-disable max-len */
import ArtistryLogo from '@/app/assets/Logo/ArtistryLogo.png'
import CJSFLogo from '@/app/assets/Logo/CJSFLogo.png'
import SFULogo from '@/app/assets/Logo/SFULogo.png'
import VisionCodingLogo from '@/app/assets/Logo/visionCoding.png'
import Tacademy from '@/app/assets/Logo/Tacademy.jpg'

const experiences = [
  {
    date: '2023 July - Present (1 year 4 months)',
    position: 'Full-stack Developer',
    company: 'Artistry',
    logo: ArtistryLogo,
    stack: [ 'Next.js', 'TypeScript', 'TailwindCSS', 'DaisyUi', 'Nest.js', 'DrizzleORM', 'PostgreSQL', 'Jira', 'Docker' ],
    descriptionEn: (
      <ul className="list-disc list-inside text-start space-y-2">
        <li>Utilized Agile methodology with two-week sprint, tracking and documenting ongoing progress of assigned tasks in Jira.</li>
        <li>Ensured continuous improvement by incorporating weekly code reviews to enhance the overall development process.</li>
        <li>Implemented Progressive Web Application using Next.js, Nest.js, Typescript, and Drizzle ORM, meeting design requirements through Tailwind, Headless UI, and Daisy UI, and deployed using Azure.</li>
        <li>Designed, implemented, and documented a relational database schema utilizing PostgreSQL, including entity relationships and attribute definitions to facilitate future maintenance, and understanding for other team members.</li>
      </ul>
    ),
    descriptionKo: (
      <div className="text-center">
        <h2 className="text-lg mb-2 font-semibold">소외된 예술가들을 위한 비영리 온라인 전시 플랫폼 스타트업 Fullstack Engineer</h2>
        <ul className="list-disc list-inside text-start space-y-2">
          <li>공통 창업자이자 주니어 풀스택 개발자로서 4명의 다른 개발자들과 웹앱 개발을 담당함</li>
          <li>Agile 방법론을 바탕으로 2주 스프린트 주기로 Jira를 통해 진행 상황을 문서화 하고 매주 코드 리뷰를 통해 지속적으로 코드 품질을 개선 함</li>
          <li>Next.js를 통해 프런트엔드를 구현하였으며, TailwindCSS와 DaisyUI를 통해 디자인팀의 요구사항을 충족하며 Figma를 활용한 협업을 통해 세부 사항을 조율하며 높은 디자인 품질과 일관성을 보장함</li>
          <li>PostgreSQL과 Nest.js로 구성한 백앤드에서 Docker, DBeaver와 Postman을 사용해 User 관련 CRUD를 위주로 개발함</li>
          <li>모든 페이지를 반응형 디자인으로 구현하여 데스크톱, 태블릿, 모바일 등 다양한 디바이스와 플랫폼에서 일관된 사용자 경험을 제공함</li>
          <li>팀 공통 Wiki를 구축하여 개발 중 학습한 내용과 발생한 오류의 해결 방안을 체계적으로 문서화함. 이를 통해 팀원 간 지식 공유를 활성화하고, 유사한 문제의 재발을 방지하며 개발의 효율성을 향상시킴</li>
        </ul>
      </div>
    )
  },
  {
    date: '2024 Dec - 2025 Jan (2 months)',
    position: 'Frontend Developer',
    company: 'ALYES',
    logo: Tacademy,
    stack: [ 'React', 'Vite', 'Typescript', 'React-hook-form', 'Zod', 'TailwindCSS', 'DaisyUI', 'CLSX' ],
    descriptionEn: (
      <div className="text-center">
        <h2 className="text-lg mb-2 font-semibold">Developed a platform for managing student attendance and shuttle services through the web application (OnePass)</h2>
        <ul className="list-disc list-inside text-start space-y-2">
          <li>Collaborated with two frontend developers and two backend developers on an outsourcing project to develop a web application with complex business logic tailored to client requirements</li>
          <li>Implemented the frontend using React and Vite, fulfilling the client&apos;s design requirements with TailwindCSS and DaisyUI, and providing a user-friendly interface</li>
          <li>Used AWS S3 to handle image uploads and management, and deployed the server reliably using AWS EC2 to maintain high availability</li>
          <li>Automated CI/CD workflows using GitHub Actions, running builds and tests automatically upon code merges, simplifying deployment and maximizing development and deployment efficiency</li>
          <li>Utilized Swagger, DBeaver, and Postman to test and document communication with the backend, efficiently managing the development process</li>
          <li>Applied React Hook Form and zod to implement robust data validation and verification during user registration and student enrollment, ensuring the secure handling of user data</li>
          <li>Conducted various client tests and considered edge cases to deliver a platform with high stability and reliability</li>
          <li>Designed and implemented reusable components to enhance development productivity and minimize maintenance costs in response to frequent changes in client requirements. Applied Atomic Design principles to systematically structure components and build scalable, well-organized code</li>
          <li>Designed and implemented a custom calendar component instead of relying on existing React libraries to meet the project&apos;s complex business logic and custom functionality requirements. Delivered an optimized solution reflecting the client&apos;s detailed needs while considering scalability and performance</li>
        </ul>
      </div>
    ),
    descriptionKo: (
      <div className="text-center">
        <h2 className="text-lg mb-2 font-semibold">웹 어플리케이션 (OnePass)를 통해 학생들의 출결 및 셔틀 관리 플랫폼을 구축</h2>
        <ul className="list-disc list-inside text-start space-y-2">
          <li>두 명의 프런트엔드 개발자와 백엔드 개발자와 함께 외주 프로젝트를 진행하며 클라이언트의 요구사항에 맞는 복잡한 비즈니스 로직을 가진 웹 애플리케이션을 개발함</li>
          <li>React와 Vite를 활용해 프런트엔드를 구현하고, TailwindCSS와 DaisyUI를 통해 클라이언트가 요청한 디자인 요구사항을 충족하며 사용자 친화적인 인터페이스를 제공함</li>
          <li>AWS S3를 사용해 이미지 업로드 및 관리를 처리하고, AWS EC2를 통해 서버를 안정적으로 배포하여 높은 가용성을 유지함</li>
          <li>GitHub Actions를 사용하여 CI/CD 자동화를 구현, 코드 병합 시 자동으로 빌드 및 테스트를 실행하고, 배포를 간소화하여 개발 및 배포 효율성을 극대화함</li>
          <li>Swagger, DBeaver와 Postman을 사용해 백엔드와의 통신을 테스트 및 문서화하며 개발 프로세스를 효율적으로 관리함</li>
          <li>React Hook Form과 zod를 활용해 회원 가입 및 학생 등록 과정에서 강력한 데이터 검증과 유효성 검사를 적용하여 사용자 데이터를 안전하게 처리함</li>
          <li>다양한 클라이언트 테스트와 엣지 케이스를 고려하여 안정성과 신뢰성을 높인 플랫폼을 제공함</li>
          <li>클라이언트의 요구사항이 자주 바뀌어 재사용성이 높은 컴포넌트를 설계 및 구현하여 개발 생산성을 향상시키고, 유지보수 비용을 최소화함. Atomic Design 원칙을 적용해 컴포넌트 구조를 체계적으로 구성하고 확장성을 고려한 코드를 구축함</li>
          <li>프로젝트에서 요구된 복잡한 비즈니스 로직과 다양한 커스텀 기능을 충족하기 위해 기존 React 라이브러리 대신 캘린더 컴포넌트를 직접 설계 및 구현함. 이를 통해 클라이언트의 세부적인 요구 사항을 완벽히 반영하며, 확장성과 성능을 고려한 최적화된 솔루션을 제공함</li>
        </ul>
      </div>
    )
  },
  {
    date: '2024 Feb - June (4 months)',
    position: 'Coding Instructor',
    company: 'Vision Coding Academy',
    logo: VisionCodingLogo,
    stack: [ 'Python', 'Machine Learning', 'Artificial Intelligence' ],
    descriptionEn: (
      <ul className="list-disc list-inside text-start space-y-2">
        <li>Responsible for designing and developing engaging and comprehensive course curriculums that cover fundamental to advanced Python programming concepts, Artificial Intelligence, and Machine Learning to high school students and adults.</li>
        <li>Successfully achieved a 30% increase in learner enrollment and a 20% boost in net income through effective education methods, with an anticipated expectation of further net income growth by 40% driven by introduction of online courses.</li>
      </ul>
    ),
    descriptionKo: (
      <div className="text-center">
        <h2 className="text-lg mb-2 font-semibold">12세부터 대학생까지 기초부터 심화까지 교육하며 Web, Python, AI,와 SQL을 담당함</h2>
        <ul className="list-disc list-inside text-start space-y-2">
          <li>각 수업 및 심화 과정에 대한 커리큘럼을 영어로 직접 설계하고, 다양한 예제와 실습을 통해 학생들이 내용을 완벽히 이해할 수 있도록 이끔</li>
          <li>Web 기초 과정에서는 HTML, CSS, Javascript를 가르치며 기본적인 웹 페이지 제작과 동적인 기능 구현을 목표로 함</li>
          <li>Python 중급 과정에서는 다양한 라이브러리를 사용하며, 객체 지향 프로그래밍, 파일 입출력, 예외 처리, 그리고 외부 라이브러리 사용법을 다루며 실제 프로젝트에 활용할 수 있는 응용 능력을 기르는 것을 목표로 함</li>
          <li>AI 과정에서는 Python을 활용한 머신러닝 및 딥러닝 기초를 교육하고, Scikit-learn과 Tensorflow 같은 외부 라이브러리를 사용해 간단한 모델을 설계하고 응용하는 방법을 지도함. 또한 A*나 Dijkstra Algorithm 같은 최적화 및 경로 탐색 알고리즘을 학습하여 AI의 다양한 활용 사례를 이해하고 실제 프로젝트에 적용할 수 있도록 함</li>
          <li>SQL 과정에서는 NoSQL, PostgreSQL, MySQL의 차이점을 중심으로 DBSM의 기본 개념을 다루고, Docker와 DBeaver를 활용하여 데이터베이스 환경을 구축하고 관리하는 방법을 지도함</li>
        </ul>
      </div>
    )
  },
  {
    date: '2023 Sep - Dec (4 months)',
    position: 'Web Developer',
    company: 'CJSF 90.1 FM Radio',
    logo: CJSFLogo,
    stack: [ 'JavaScript', 'CSS', 'Docker', 'Drupal' ],
    descriptionEn: (
      <ul className="list-disc list-inside text-start space-y-2">
        <li>Responsible for migrating the company&apos;s website from Drupal 7 to 8 by utilizing Docker, MySQL, and PHP, while ensuring data integrity, content migration, and updating contributed modules and themes.</li>
        <li>Led the redesign of the company&apos;s funding website using Figma for wireframes, and Drupal and CSS for a more convenient and appealing design, achieving a 55% increase in funds compared to the previous year.</li>
      </ul>
    ),
    descriptionKo: (
      <div className="text-center">
        <h2 className="text-lg mb-2 font-semibold">
    비영리, 자원봉사 중심의 밴쿠버 방송국이며 라디오와 인터넷을 통해 방송하는 플랫폼을 구축함
        </h2>
        <ul className="list-disc list-inside text-start space-y-2">
          <li>
      웹 개발자로서 커뮤니티의 다양성과 포용성을 반영하여 접근성 높은 웹 콘텐츠 플랫폼을 구축함
          </li>
          <li>
      Figma를 활용해 기금 마련 웹사이트의 Wireframe을 설계하고, 이를 기반으로 Drupal과 CSS를 사용해 사용자 친화적이며 시각적으로 매력적인 디자인을 구현함
          </li>
          <li>
      웹사이트 리뉴얼을 통해 기부자 유입이 증가하여 전년 대비 55% 높은 기부금을 유치하는 데 기여함
          </li>
        </ul>
      </div>
    )
  },
  {
    date: '2023 May - Aug (4 months)',
    position: 'Research Assistant',
    company: 'Simon Fraser University',
    logo: SFULogo,
    stack: [ 'Godot Engine', 'GDScript', 'Python' ],
    descriptionEn: (
      <ul className="list-disc list-inside text-start space-y-2">
        <li>Conducted research on the application of machine learning and artificial intelligence in the field of cybersecurity, focusing on the detection of malware and intrusion detection systems.</li>
        <li>Developed a Python-based machine learning model using Scikit-learn and TensorFlow to classify malware samples, achieving an accuracy rate of 95%.</li>
        <li>Collaborated with a team of researchers to publish a research paper on the topic, contributing to the academic community&apos;s understanding of the subject.</li>
      </ul>
    ),
    descriptionKo: (
      <div className="text-center">
        <h2 className="text-lg mb-2 font-semibold">
          Dr. Imran 교수님의 연구 조수로 활동하며 게임을 통해 컴퓨터 공학 지식을 효과적으로 교육하는 방식에 대한 연구를 진행함
        </h2>
        <ul className="list-disc list-inside text-start space-y-2">
          <li>
            중국 텐진(TianJian, 天津) 대학교와 공동 연구를 진행함
          </li>
          <li>
            프로그래밍 개념을 흥미롭게 학습할 수 있도록 설계된 Python 교육 게임 Ancient Treasure Adventures를 개발함
          </li>
          <li>
            Dr. Imran 교수님의 지도 아래 4명의 연구 조수와 함께 Python 초보 학습자를 위한 효율적인 교육 방법을 탐구하는 연구 프로젝트를 진행함
          </li>
          <li>
            게임 내에서 Python 학습 경험을 강화하기 위해 퍼즐, 챌린지, 퀘스트를 통해 플레이어가 흥미롭게 학습할 수 있는 상호작용형 교육 방식을 설계하고 구현함
          </li>
          <li>
            Godot 게임 엔진을 활용하여 직관적이고 사용자 친화적인 인터페이스를 개발함
          </li>
          <li>
            학습 경험을 향상시키기 위해 애니메이션, 배경음악, 화면 전환 효과를 통합하였으며, GDScript를 활용해 게임 로직과 상호작용을 구현함
          </li>
        </ul>
      </div>
    )
  },
  {
    date: '2022 Sep - Dec (4 months)',
    position: 'Mobile Application Developer',
    company: 'CJSF 90.1 FM Radio',
    logo: CJSFLogo,
    stack: [ 'JavaScript', 'CSS', 'Docker', 'Drupal' ],
    descriptionEn: (
      <ul className="list-disc list-inside text-start space-y-2">
        <li>Developed the first launching radio streaming app using JavaScript and React Native for iOS and Android, implemented an automatic news updating algorithm that makes priorities of data fetched from the GitLab Web External API.</li>
        <li>Built a strategic and optimized approach to access radio playlists, resulting in increased overall efficiency for retrieving playlists and managing personal preferences while reducing battery consumption by 30%.</li>
      </ul>
    ),
    descriptionKo: (
      <div className="text-center">
        <h2 className="text-lg mb-2 font-semibold">
    비영리, 자원봉사 중심의 밴쿠버 방송국이며 라디오와 인터넷을 통해 방송하는 플랫폼을 구축함
        </h2>
        <ul className="list-disc list-inside text-start space-y-2">
          <li>
      모바일 앱 개발자로서 사용자 경험을 고려한 직관적인 앱 디자인과 여러 편의 기능을 구현함
          </li>
          <li>
      React Native를 사용해 처음 출시하는 모바일 애플리케이션의 설계 및 개발하여 iOS와 Android에서 사용할 수 있도록 구축함
          </li>
          <li>
      GitLab API에서 데이터를 가져와 실시간 뉴스와 글을 동적으로 업데이트하는 작업을 진행함
          </li>
          <li>
      사용자 개인설정을 쉽게 관리할 수 있는 UI를 설계하고, 주요 인터랙션과 로딩 속도를 최적화하여 사용자 만족도를 향상시킴
          </li>
        </ul>
      </div>

    )

  }
]

export default experiences