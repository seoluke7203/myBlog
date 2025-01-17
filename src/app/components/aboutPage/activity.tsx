interface EducationProps {
    isEnglish: boolean;
    }


export default function Activity({ isEnglish }: EducationProps) {
  return (
    <div className="flex flex-col gap-4 text-primary-content">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title flex gap-2">
            <h2 className="text-3xl">Vice President - </h2>
            <h3 className="text-3xl">SFU Association of Scientists and Engineering Club (AKCSE)</h3>
          </div>
          <p>Sep 2020 - Jun 2021</p>
          { (isEnglish) ? (
            <>
              <p>Organized monthly academic and social events for 100-200 attendees,
                    fostering community engagement and networking opportunities.</p>
              <p>Collaborated with executive members to plan and execute events, enhancing team creativity and problem-solving skills.</p>
              <p>Developed and refined organizational skills by managing event logistics,
                    contributing to the professional growth of club members.</p>
            </>
          ):
            <>
              <p>100-200명의 회원을 대상으로 한 월간 학술 및 사회적 행사를 기획하고 조직하여, 커뮤니티 내에서 활발한 참여와 네트워킹 기회를 창출</p>
              <p>임원들과 협력하여 이벤트의 창의적 기획 및 실행을 주도, 연구 및 학문적 능력 향상에 기여</p>
              <p>회원들의 전문성 향상과 학문적, 사회적 경험을 제공하여, 클럽의 전반적인 성장과 발전에 중요한 역할을 수행</p>
            </>
          }
        </div>
      </div>
    </div>
  )

}