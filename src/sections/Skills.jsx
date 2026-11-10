import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icons.jsx'
import { skillCards, otherSkills } from '../data.js'

export default function Skills() {
  return (
    <section className="section section-tint" id="skills">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Skills &amp; toolkit</h2>
          <p className="section-intro">
            What I can take on for your brand, built through training and
            practical project work.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <Tilt className="skill-tilt" max={7}>
                <article className="skill-card">
                  <span className="skill-icon"><Icon name={card.icon} size={22} /></span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <div className="chips chips-small">
                    {card.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <span className="tilt-glare" aria-hidden="true" />
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="skill-extra">
          <h3 className="mini-heading">Also comfortable with</h3>
          <div className="chips">
            {otherSkills.map(s => <span key={s}>{s}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
