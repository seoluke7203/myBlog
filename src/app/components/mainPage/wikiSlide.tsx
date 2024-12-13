/* eslint-disable max-len */
import ProgressSlider from '@/app/ui/progressSlider'
import handleScrollToTop from '@/app/util/mouseScrollToTop'

export default function wikiSlide() {

  //   1. Diverse topics (이미지 3개 연결)
  //   2. Bullet Points (screenshots)
  //   3. Real-World Examples (screenshots)
  //   4. Detailed Explanations (screenshots with images)

  return (
    <div className="flex flex-col justify-center">
      <div className='flex justify-center'>
        <div className="pt-10 pb-20 w-4/5">
          <h1 className="text-3xl font-bold text-accent pb-10">Wikipage</h1>
          <ProgressSlider />
        </div>
      </div>
      <div className='text-center p-10'>
        <button
          onClick={ handleScrollToTop }
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-bounce"
        > Back to Top
        </button>
      </div>
    </div>
  )
}