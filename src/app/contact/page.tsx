import Footer from '@/app/components/common/footer'
import Header from '@/app/components/common/header'

export default function Page() {
  return (
    <div>
      <div id="top" className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4 text-base-300">준비중입니다</h1>
          <p className="text-lg mb-2 text-base-300">This site is currently under construction.</p>
          <p className="text-lg text-base-300">곧 다시 찾아뵙겠습니다!</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
