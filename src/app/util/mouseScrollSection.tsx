'use client'

const handleScrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

export default handleScrollToSection
