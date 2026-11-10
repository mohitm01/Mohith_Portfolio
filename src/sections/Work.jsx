import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icons.jsx'
import { projects, experience } from '../data.js'

function ProjectArt({ type }) {
  if (type === 'forehead') {
    return (
      <div className="art art-forehead">
        <span className="art-ring" />
        <strong>FP</strong>
        <small>Forehead Pro</small>
      </div>
    )
  }
  if (type === 'social') {
    return (
      <div className="art art-social">
        <div className="art-tiles"><i /><i /><i /><i /></div>
        <small>Social stories</small>
      </div>
    )
  }
  return (
    <div className="art art-ads">
      <div className="art-bars"><span /><span /><span /><span /><span /></div>
      <small>Google Ads</small>
    </div>
  )
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Selected work</h2>
          <p className="section-intro">
            Projects and practical experience from my digital marketing training.
          </p>
        </Reveal>

        <div className="project-list">
          {projects.map(p => (
            <Reveal key={p.title}>
              <Tilt className="project-tilt" max={3}>
                <article className="project-card">
                  <ProjectArt type={p.art} />
                  <div className="project-content">
                    <span className="project-kind">{p.kind}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <div className="chips chips-small">
                      {p.points.map(pt => <span key={pt}>{pt}</span>)}
                    </div>
                    {p.link && (
                      <a
                        className="text-link"
                        href={p.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.link.label}
                        <Icon name="arrow" size={16} />
                      </a>
                    )}
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="experience-block">
          <h3 className="block-heading">Practical experience</h3>
          <div className="timeline">
            {experience.map(item => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-marker" aria-hidden="true" />
                <span className="timeline-when">{item.when}</span>
                <div className="timeline-body">
                  <h4>{item.title}</h4>
                  {item.place && <p className="timeline-place">{item.place}</p>}
                  <p>{item.text}</p>
                  <div className="chips chips-small">
                    {item.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
