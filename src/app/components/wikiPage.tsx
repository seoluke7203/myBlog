/* eslint-disable max-len */
import ProgressSlider from '@/app/ui/progressSlider'

export default function WikiPage() {

  //   1. Diverse topics (이미지 3개 연결)
  //   2. Bullet Points (screenshots)
  //   3. Real-World Examples (screenshots)
  //   4. Detailed Explanations (screenshots with images)

  return (
    <div className="flex justify-center bg-base-200">
      <div className="pt-10 pb-20 w-4/5">
        <h1 className="text-3xl font-bold text-primary pb-10">Wikipage</h1>
        <ProgressSlider />
      </div>
    </div>
  )
}