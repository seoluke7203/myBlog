import Header from '@/app/components/common/header'

export default function Page() {
  return (
    <div>
      <div id="top" className='sticky top-0 z-50'>
        <Header />
      </div>
      <div>Hello! this is wiki page</div>
    </div>
  )
}