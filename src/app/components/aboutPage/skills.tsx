/* eslint-disable max-len */


interface SkillsProps {
  isEnglish: boolean;
}

export default function Skills({ isEnglish }: SkillsProps) {

  return (
    <div className="flex flex-row gap-4 text-primary-content">
      <div className="flex flex-col">
        <div className="text-2xl mb-4 font-extrabold">
          <div className="divider">Frontend Development</div>
        </div>

        { /* Card 1 */ }
        <div className="flex gap-x-4">
          <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
            <div className="card-body">
              <div className="card-title flex justify-between">
                <h2 className="text-3xl">React & Next.js</h2>
              </div>
              <p className="font-bold text-xl">
                { (isEnglish) ?
                  'Advanced Understanding':
                  '심화 이해'
                }</p>
              <p className="text-base">
                { (isEnglish) ?
                  'Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance':
                  'React Hook 및 상태 관리 도구(Redux, Context API)를 활용한 컴포넌트 기반 개발 경험이 있습니다. Next.js의 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 활용한 SEO 최적화 및 효율적인 데이터 페칭 구현 경험이 있습니다.'
                }
              </p>
            </div>
          </div>
          { /* Card 2 */ }
          <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
            <div className="card-body">
              <div className="card-title flex justify-between">
                <h2 className="text-3xl">HTML & CSS</h2>
              </div>
              <p className="font-bold text-xl">
                { (isEnglish) ?
                  'Advanced Understanding':
                  '심화 이해'
                }</p>
              <p className="text-base">
                { (isEnglish) ?
                  'Skilled in creating responsive web designs using semantic HTML5 and modern CSS3 techniques, including Flexbox and Grid layouts. Experienced in styling with Tailwind CSS and Sass, ensuring cross-browser compatibility and accessibility.':
                  'HTML5의 시맨틱 태그와 CSS3의 Flexbox 및 Grid 레이아웃을 활용한 반응형 웹 디자인 경험이 있습니다. Tailwind CSS 및 Sass를 사용하여 효율적인 스타일링을 구현한 경험이 있으며, 브라우저 호환성과 접근성을 고려한 웹 페이지를 제작할 수 있습니다.'
                }
              </p>
            </div>
          </div>

          { /* Card 3 */ }
          <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
            <div className="card-body">
              <div className="card-title flex justify-between">
                <h2 className="text-3xl">JavaScript</h2>
              </div>
              <p className="font-bold text-xl">
                { (isEnglish) ?
                  'Advanced Understanding':
                  '심화 이해'
                }</p>
              <p className="text-base">
                { (isEnglish) ?
                  'Skilled in creating responsive web designs using semantic HTML5 and modern CSS3 techniques, including Flexbox and Grid layouts. Experienced in styling with Tailwind CSS and Sass, ensuring cross-browser compatibility and accessibility.':
                  'DOM 조작 및 이벤트 처리에 대한 이해를 바탕으로, 클라이언트-서버 간 데이터 통신을 위한 Fetch API와 Axios 활용 경험이 있습니다. ES6+ 문법에 익숙하며, 비동기 처리(Promises, async/await)를 활용한 애플리케이션 개발이 가능합니다.'
                }
              </p>
            </div>


          </div>
          { /* Card 4 */ }
          <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
            <div className="card-body">
              <div className="card-title flex justify-between">
                <h2 className="text-3xl">TypeScript</h2>
              </div>
              <p className="font-bold text-xl">
                { (isEnglish) ?
                  'Advanced Understanding':
                  '심화 이해'
                }</p>
              <p className="text-base">
                { (isEnglish) ?
                  'Skilled in creating responsive web designs using semantic HTML5 and modern CSS3 techniques, including Flexbox and Grid layouts. Experienced in styling with Tailwind CSS and Sass, ensuring cross-browser compatibility and accessibility.':
                  'DOM 조작 및 이벤트 처리에 대한 이해를 바탕으로, 클라이언트-서버 간 데이터 통신을 위한 Fetch API와 Axios 활용 경험이 있습니다. ES6+ 문법에 익숙하며, 비동기 처리(Promises, async/await)를 활용한 애플리케이션 개발이 가능합니다.'
                }
              </p>
            </div>
          </div>

          { /* Card 5 */ }
        </div>
        <div className="mt-8 flex gap-4">
          <div className="card lg:card-side bg-base-100 shadow-xl w-1/2">
            <div className="card-body">
              <div className="card-title flex justify-between">
                <h2 className="text-3xl">Angular</h2>
              </div>
              <p className="font-bold text-xl">
                { (isEnglish) ?
                  'Advanced Understanding':
                  '중급 이해'
                }</p>
              <p className="text-base">
                { (isEnglish) ?
                  'Familiar with Angular\'s component-based architecture and two-way data binding concepts. Experience in project creation using Angular CLI and implementing basic routing. Understands the fundamentals of Dependency Injection and services':
                  'Angular의 컴포넌트 기반 구조와 양방향 데이터 바인딩의 기본 개념을 이해하고 있습니다. Angular CLI를 활용한 프로젝트 생성 및 기본적인 라우팅 구현 경험이 있습니다. Dependency Injection과 서비스의 기본 활용법을 알고 있습니다.'
                }
              </p>
            </div>
          </div>

          { /* Card 6 */ }
          <div className="card lg:card-side bg-base-100 shadow-xl w-1/2">
            <div className="card-body">
              <div className="card-title flex justify-between">
                <h2 className="text-3xl">DaisyUI & TailwindCSS</h2>
              </div>
              <p className="font-bold text-xl">
                { (isEnglish) ?
                  'Advanced Understanding':
                  '심화 이해'
                }</p>
              <p className="text-base">
                { (isEnglish) ?
                  'Proficient in creating visually appealing and responsive UI components using TailwindCSS. Experienced in extending Tailwind\'s functionality with DaisyUI for pre-designed components, enabling faster and more efficient development. Familiar with customizing themes and maintaining design consistency across projects.':
                  'TailwindCSS를 사용하여 반응형 및 세련된 UI 컴포넌트를 효율적으로 제작할 수 있습니다. DaisyUI를 활용해 미리 설계된 컴포넌트를 확장하여 빠르고 효율적인 개발 경험이 있으며, 테마 커스터마이징 및 프로젝트 전반의 디자인 일관성을 유지하는 데 능숙합니다.'
                }
              </p>
            </div>
          </div>
        </div>


        { /* Backend */ }
        <div className="text-2xl my-4 ">
          <div className="divider my-8 font-extrabold">Backend Development</div>
          <div className="flex gap-x-4">
            { /* Card 1 */ }
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/3 my-6">
              <div className="card-body">
                <div className="card-title flex justify-between">
                  <h2 className="text-3xl">Java, Spring</h2>
                </div>
                <p className="font-bold text-xl">
                  { (isEnglish) ?
                    'Advanced Understanding':
                    '심화 이해'
                  }</p>
                <p className="text-base">
                  { (isEnglish) ?
                    'Familiar with the MVC pattern and the relationship between Servlets and the application flow. Experienced in building RESTful APIs using Spring Boot, with a solid understanding of Dependency Injection (DI) and Aspect-Oriented Programming (AOP). Proficient in implementing authentication and authorization using Spring Security.':
                    'MVC 패턴과 Servlet의 관계 및 작동 흐름을 이해하며, Spring Boot를 활용한 RESTful API 개발 경험이 있습니다. 의존성 주입(DI)과 AOP의 개념 및 활용 사례를 이해하고 있으며, Spring Security를 통한 인증 및 권한 관리 구현 경험이 있습니다.'
                  }
                </p>
              </div>
            </div>
            { /* Card 2 */ }
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/3 my-6">
              <div className="card-body">
                <div className="card-title flex justify-between">
                  <h2 className="text-3xl">NestJS</h2>
                </div>
                <p className="font-bold text-xl">
                  { (isEnglish) ?
                    'Intermediate Understanding':
                    '중급 이해'
                  }</p>
                <p className="text-base">
                  { (isEnglish) ?
                    'Experienced in building modular applications using NestJS with a solid grasp of Dependency Injection (DI). Skilled in database management using Drizzle ORM and TypeORM, with experience in implementing authentication and authorization.':
                    'TypeScript 기반의 NestJS를 활용하여 모듈화된 구조와 DI(Dependency Injection)를 이해하고 있습니다. Drizzle ORM 및 Postman 을 사용한 데이터베이스 작업 경험이 있으며, 인증 및 권한 관리를 구현한 경험이 있습니다.'
                  }
                </p>
              </div>
            </div>

            { /* Card 3 */ }
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/3 my-6">
              <div className="card-body">
                <div className="card-title flex justify-between">
                  <h2 className="text-3xl">Python</h2>
                </div>
                <p className="font-bold text-xl">
                  { (isEnglish) ?
                    'Intermediate Understanding':
                    '중급 이해'
                  }</p>
                <p className="text-base">
                  { (isEnglish) ?
                    'Experienced in data processing and developing simple scripts. Built web applications using Django and Flask. Familiar with data analysis and visualization tools such as Pandas, NumPy, and Matplotlib.':
                    'Python을 활용한 데이터 처리와 간단한 스크립트 개발 경험이 있습니다. Django로 웹 애플리케이션 개발을 진행한 경험이 있으며, 데이터 분석과 시각화를 위해 Pandas, NumPy, Matplotlib 등을 사용해 본 적이 있습니다.'
                  }
                </p>
              </div>
            </div>
          </div>

          { /* Mobile */ }
          <div className="text-2xl my-8 ">
            <div className="divider font-extrabold">Mobile Development</div>
            <div className="flex gap-x-4">
              { /* Card 1 */ }
              <div className="card lg:card-side bg-base-100 shadow-xl w-full my-6">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">Kotlin</h2>
                  </div>
                  <p className="font-bold text-xl">
                    { (isEnglish) ?
                      'Advanced Understanding':
                      '심화 이해'
                    }</p>
                  <p className="text-base">
                    { (isEnglish) ?
                      'Knowledgeable in Kotlin syntax and its interoperability with Java. Hands-on experience with Android application development using Android Studio and basic asynchronous operations using Kotlin Coroutines.':
                      'JVM 언어로서의 Kotlin 문법과 Java와의 상호운용성을 이해하고 있으며, Android 애플리케이션 개발 시 활용 안드로이드 스튜디오를 사용한 경험이 있습니다. 간단한 Kotlin 코루틴을 사용한 비동기 작업 처리 경험이 있습니다.'
                    }
                  </p>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl w-full my-6">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">React Native</h2>
                  </div>
                  <p className="font-bold text-xl">
                    { (isEnglish) ?
                      'Intermediate Understanding':
                      '중급 이해'
                    }</p>
                  <p className="text-base">
                    { (isEnglish) ?
                      'Experienced in building cross-platform mobile applications using React Native. Familiar with core components, navigation libraries (e.g., React Navigation), and state management tools like Redux. Skilled in integrating RESTful APIs and optimizing app performance for both iOS and Android platforms.':
                      'React Native를 사용하여 크로스 플랫폼 모바일 애플리케이션을 개발한 경험이 있습니다. 핵심 컴포넌트, 네비게이션 라이브러리(예: React Navigation), 상태 관리 도구(Redux)를 활용할 수 있습니다. RESTful API 통합 및 iOS와 Android 플랫폼 모두에서 성능 최적화 경험이 있습니다.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          { /* Database */ }
          <div className="text-2xl my-8">
            <div className="divider font-extrabold">Database Management</div>
            <div className="flex gap-x-4">
              <div className="card lg:card-side bg-base-100 shadow-xl w-1/1 my-6">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">MySQL & PostgreSQL & MongoDB</h2>
                  </div>
                  <p className="font-bold text-xl">
                    { (isEnglish) ?
                      'Intermediate Understanding':
                      '중급 이해'
                    }</p>
                  <p className="text-base">
                    { (isEnglish) ?
                      'Proficient in designing and optimizing relational databases using MySQL and PostgreSQL. Experienced in NoSQL database modeling and querying with MongoDB. Familiar with indexing and transactions for performance optimization.':
                      'MySQL과 PostgreSQL을 활용한 관계형 데이터베이스 설계 및 최적화 경험이 있으며, MongoDB를 사용한 NoSQL 데이터 모델링 및 쿼리 작성 경험이 있습니다. 데이터베이스 인덱싱과 트랜잭션을 활용하여 성능 최적화를 구현한 경험이 있습니다.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          { /* DevOps */ }
          <div className="text-2xl my-8">
            <div className="divider font-extrabold">DevOps</div>
            <div className="flex gap-x-4">
              <div className="card lg:card-side bg-base-100 shadow-xl w-full my-6">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">Docker</h2>
                  </div>
                  <p className="font-bold text-xl">
                    { (isEnglish) ?
                      'Basic Understanding':
                      '기본 이해'
                    }</p>
                  <p className="text-base">
                    { (isEnglish) ?
                      'Able to set up containerized application deployment environments. Experienced in writing Dockerfiles and using docker-compose to create container images and manage multi-container environments.':
                      '컨테이너 기반 애플리케이션 배포 환경을 설정할 수 있습니다. Dockerfile과 docker-compose를 활용하여 애플리케이션의 컨테이너 이미지를 생성하고, 컨테이너 간 네트워크 설정 및 실행 환경을 구성한 경험이 있습니다.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}