import { useEffect, useState } from 'react'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icons.jsx'
import { prefersReducedMotion } from '../components/hooks.js'
import { profile, roles } from '../data.js'
import photo from '../assets/mohith-profile.jpg'

function useTypewriter(phrases) {
  const [text, setText] = useState(phrases[0])

  useEffect(() => {
    if (prefersReducedMotion()) return
    let index = 0
    let chars = phrases[0].length
    let deleting = false
    let timer

    const step = () => {
      const phrase = phrases[index]
      if (!deleting) {
        chars += 1
        setText(phrase.slice(0, chars))
        if (chars >= phrase.length) {
          deleting = true
          timer = setTimeout(step, 1800)
          return
        }
      } else {
        chars -= 1
        setText(phrase.slice(0, chars))
        if (chars <= 0) {
          deleting = false
          index = (index + 1) % phrases.length
        }
      }
      timer = setTimeout(step, deleting ? 36 : 64)
    }

    timer = setTimeout(step, 2600)
    return () => clearTimeout(timer)
  }, [phrases])

  return text
}

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-wash" />
        <span className="hero-grid-lines" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker hero-in" style={{ '--i': 0 }}>Hello, I’m</p>
          <h1 className="hero-title hero-in" style={{ '--i': 1 }}>Mohith M</h1>
          <p className="hero-role hero-in" style={{ '--i': 2 }}>
            <span>{role}</span>
            <span className="cursor" aria-hidden="true" />
          </p>
          <p className="hero-description hero-in" style={{ '--i': 3 }}>
            I help brands grow through social media, Google Ads and thoughtful
            content. Commerce graduate with a completed PGCP in Digital
            Marketing &amp; AI.
          </p>

          <div className="hero-actions hero-in" style={{ '--i': 4 }}>
            <a className="button button-primary" href="#contact">
              Let’s work together
              <Icon name="arrow" size={18} />
            </a>
            <a className="button button-ghost" href="#skills">
              Explore More
              <Icon name="down" size={18} />
            </a>
          </div>

          <div className="hero-meta hero-in" style={{ '--i': 5 }}>
            <span className="meta-item">
              <Icon name="pin" size={16} />
              {profile.location}
            </span>
            <span className="meta-item meta-open">
              <span className="pulse-dot" />
              Open for freelance projects
            </span>
          </div>
        </div>

        <div className="hero-visual hero-in hero-in-visual" style={{ '--i': 2 }}>
          <Tilt className="portrait-stage" max={9}>
            <div className="orbit-layer" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>
            <div className="portrait-plate" aria-hidden="true" />

            <div className="portrait-card">
              <img
                src={photo}
                alt="Portrait of Mohith M"
                width="900"
                height="1018"
                fetchpriority="high"
              />
            </div>

            <div className="depth-tag tag-open">
              <span className="pulse-dot" />
              Open for freelancing
            </div>
            <div className="depth-tag tag-social">
              <Icon name="social" size={16} />
              Social media
            </div>
            <div className="depth-tag tag-ads">
              <Icon name="ads" size={16} />
              Google Ads
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  )
}
