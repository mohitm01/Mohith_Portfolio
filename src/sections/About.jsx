import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import { interests, languages } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-heading">
          <h2>About me</h2>
          <p className="section-intro">
            Curious by nature, strategic in practice.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-lead">
            <p className="lead-text">
              I’m a digital marketer with a Commerce background and a completed
              PGCP in Digital Marketing &amp; AI from Digital Academy 360, JP Nagar.
            </p>
          </Reveal>

          <Reveal className="about-details" delay={120}>
            <p>
              My training and hands-on projects cover digital marketing
              fundamentals, Google Ads, social media marketing, content
              marketing, digital advertising and AI tools.
            </p>
            <p>
              I’m now taking on freelance work, helping brands and small
              businesses with practical strategy and creative execution.
            </p>

            <div className="about-facts">
              <div>
                <span className="fact-number"><CountUp to={2026} /></span>
                <span className="fact-label">PGCP completed</span>
              </div>
              <div>
                <span className="fact-number"><CountUp to={7} pad={2} /></span>
                <span className="fact-label">Core skill areas</span>
              </div>
              <div>
                <span className="fact-number"><CountUp to={4} pad={2} /></span>
                <span className="fact-label">Languages</span>
              </div>
            </div>

            <div className="about-lists">
              <div>
                <h3 className="mini-heading">Interests</h3>
                <div className="chips">
                  {interests.map(i => <span key={i}>{i}</span>)}
                </div>
              </div>
              <div>
                <h3 className="mini-heading">Languages</h3>
                <div className="chips">
                  {languages.map(l => <span key={l}>{l}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
