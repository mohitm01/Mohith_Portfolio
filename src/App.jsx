import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Work from './sections/Work.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Icon from './components/Icons.jsx'
import { useEffect, useState } from 'react'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
      <a
        href="#home"
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <Icon name="up" size={18} />
      </a>
    </>
  )
}
