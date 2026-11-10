import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { education, certifications } from '../data.js'

export default function Education() {
  return (
    <section className="section section-tint" id="education">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Education &amp; certifications</h2>
          <p className="section-intro">Learning is a continuous journey.</p>
        </Reveal>

        <div className="education-grid">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <article className="edu-card">
                <span className="skill-icon"><Icon name="cap" size={22} /></span>
                <span className="edu-type">{e.type}</span>
                <h3>{e.title}</h3>
                <p>{e.school}</p>
                <span className="edu-year">{e.year}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="cert-list">
          {certifications.map(c => (
            <div className="cert-item" key={c.title}>
              <span className="cert-icon"><Icon name="badge" size={20} /></span>
              <div>
                <h4>{c.title}</h4>
                <p>{c.by}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
