'use client'

const handleScrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100
    const elementTop = element.getBoundingClientRect().top + window.scrollY
    const targetPosition = elementTop - offset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }
}

export default handleScrollToSection
