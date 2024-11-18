import Card from '@/app/ui/card'

const AboutMe = () => {
  return (
    <div className='flex justify-center'>
      <div className="pt-10 pb-20 w-4/5">
        <h1 className="text-3xl font-bold text-primary pb-10">About Me</h1>
        <div className='flex gap-x-20 overflow-x-auto pb-10 carousel carousel-center'>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
          <div className='carousel-item'>
            <Card title="Hello" description={ '' } image={ '' } link={ '' }/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe