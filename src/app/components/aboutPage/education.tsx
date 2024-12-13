interface EducationProps {
  isEnglish: boolean;
}


export default function Education({ isEnglish }: EducationProps) {

  return (

    <div className="flex flex-col gap-4 text-primary-content">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title flex justify-between">
            <h2 className="text-3xl">Simon Fraser University</h2>
            <h3 className="text-base">Canada, British Columbia, Burnaby</h3>
          </div>
          <p>Sep 2016 - Apr 2024</p>
          { (isEnglish) ? (
            <>
              <p>Major: Computing Science</p>
            </>
          ): <p>전공: 컴퓨터 과학</p>
          }
          <p>Graduated with a Bachelor of Science degree</p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title flex justify-between">
            <h2 className="text-3xl">SK T Academy ASAC 06 Full Stack Bootcamp</h2>
            <h3 className="text-base">South Korea, Seoul, Mapo</h3>
          </div>
          <p>Aug 2024 - Feb 2025</p>
          { (isEnglish) ?
            (
              <>
                <p>Reviewed and applied learned concepts by organizing and documenting them on Tistory Blog and Notion.</p>
                <p>Studied extensive concepts necessary for web development, including advanced and applied topics:</p>
                <ul>
                  <li>HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, AWS, Docker, etc.</li>
                </ul>
              </>
            ):
            (
              <>
                <p>배운 개념들을 검토하고 정리하여 Tistory 블로그와 Notion에 기록하였습니다.</p>
                <p>웹 개발에 필요한 폭넓은 개념들을 심화 학습하며, 다음과 같은 고급 및 응용 주제를 공부하였습니다:</p>
                <ul>
                  <li>HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, AWS, Docker 등</li>
                </ul>
              </>

            ) }

        </div>
      </div>
    </div>


  )
}