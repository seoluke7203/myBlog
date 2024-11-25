import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <p className="font-bold text-lg">
            In Ho (Luke) Seo
        </p>
        <p>Copyright © { new Date().getFullYear() } - Made by <Link href="/" className='underline'>In Ho (Luke) Seo</Link></p>
      </aside>
    </footer>
  )
}