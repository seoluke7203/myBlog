import Footer from '@/app/components/common/footer'
import Header from '@/app/components/common/header'

export default async function Page(props: { params: Promise<{ id: string}>}) {
  const { id } = await props.params
  return (
    <>
      <Header />
      <h1>My Page { id }</h1>
      <Footer />
    </>
  )
}