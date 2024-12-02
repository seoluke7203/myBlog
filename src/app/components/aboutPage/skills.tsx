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
                <h2 className="text-3xl">React, Next.js</h2>
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
                <h2 className="text-3xl">HTML, CSS</h2>
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
                  '심화 이해'
                }</p>
              <p className="text-base">
                { (isEnglish) ?
                  'Familiar with Angular\'s component-based architecture and two-way data binding concepts. Experience in project creation using Angular CLI and implementing basic routing. Understands the fundamentals of Dependency Injection and services':
                  'Angular의 컴포넌트 기반 구조와 양방향 데이터 바인딩의 기본 개념을 이해하고 있습니다. Angular CLI를 활용한 프로젝트 생성 및 기본적인 라우팅 구현 경험이 있습니다. Dependency Injection과 서비스의 기본 활용법을 알고 있습니다.'
                }
              </p>
            </div>
          </div>
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



        <div className="text-2xl my-4 font-extrabold">
          <div className="divider my-8">Backend Development</div>
          <div className="flex gap-x-4">
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
              <div className="card-body">
                <div className="card-title flex justify-between">
                  <h2 className="text-3xl">React, Next.js</h2>
                </div>
                <p className="font-bold text-xl">Advanced Understanding</p>
                <p className="text-base">
              Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance.
                </p>
              </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
              <div className="card-body">
                <div className="card-title flex justify-between">
                  <h2 className="text-3xl">HTML, CSS</h2>
                </div>
                <p className="font-bold text-xl">Advanced Understanding</p>
                <p className="text-base">
              Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance.
                </p>
              </div>
            </div>
          </div>
          <div className="text-2xl my-8 font-extrabold">
            <div className="divider">Mobile Development</div>
            <div className="flex gap-x-4">
              <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">React, Next.js</h2>
                  </div>
                  <p className="font-bold text-xl">Advanced Understanding</p>
                  <p className="text-base">
              Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance.
                  </p>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">HTML, CSS</h2>
                  </div>
                  <p className="font-bold text-xl">Advanced Understanding</p>
                  <p className="text-base">
              Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-2xl my-8 font-extrabold">
            <div className="divider">Database Management</div>
            <div className="flex gap-x-4">
              <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">React, Next.js</h2>
                  </div>
                  <p className="font-bold text-xl">Advanced Understanding</p>
                  <p className="text-base">
              Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance.
                  </p>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">HTML, CSS</h2>
                  </div>
                  <p className="font-bold text-xl">Advanced Understanding</p>
                  <p className="text-base">
              Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-2xl my-8 font-extrabold">
            <div className="divider">DevOps</div>
            <div className="flex gap-x-4">
              <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">React, Next.js</h2>
                  </div>
                  <p className="font-bold text-xl">Advanced Understanding</p>
                  <p className="text-base">
              Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance.
                  </p>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl w-1/4">
                <div className="card-body">
                  <div className="card-title flex justify-between">
                    <h2 className="text-3xl">HTML, CSS</h2>
                  </div>
                  <p className="font-bold text-xl">Advanced Understanding</p>
                  <p className="text-base">
              Proficient in using React Hooks and state management libraries (Redux, Context API). Experienced in implementing server-side rendering (SSR) and static site generation (SSG) with Next.js to optimize SEO and data fetching performance.
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