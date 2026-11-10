import { useEffect, useState } from 'react'
import { navLinks } from '../data.js'
import { useActiveSection } from '../components/hooks.js'

const ids = navLinks.map(l => l.href.slice(1))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Mohith M, home">
          <span className="brand-mark">M</span>
          <span className="brand-name">Mohith M</span>
        </a>

        <button
          className={`menu-toggle ${open ? 'open' : ''}`}
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`} id="nav-links">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
              aria-current={active === link.href.slice(1) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </div>
      </nav>
    </header>
  )
}
