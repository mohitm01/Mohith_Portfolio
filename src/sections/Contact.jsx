import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [note, setNote] = useState('Opens your email app with your message ready to send.')

  const onSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const name = String(data.get('name')).trim()
    const email = String(data.get('email')).trim()
    const message = String(data.get('message')).trim()
    const subject = encodeURIComponent(`Freelance enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    setNote('Opening your email app…')
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-copy">
            <span className="open-pill">
              <span className="pulse-dot" />
              Open for freelancing
            </span>
            <h2>Have a project in mind?</h2>
            <p>
              Tell me about your brand and goals. I’ll reply with how I can help
              with social media, Google Ads and content.
            </p>

            <ul className="contact-list">
              <li>
                <Icon name="mail" size={18} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Icon name="phone" size={18} />
                <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <Icon name="pin" size={18} />
                <span>{profile.location}</span>
              </li>
            </ul>

            <div className="contact-socials">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <h3>Send a message</h3>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="Name" autoComplete="name" required />
            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell me a little about your project" required />
            <button className="button button-light" type="submit">
              Send message
              <Icon name="arrow" size={18} />
            </button>
            <p className="form-note" aria-live="polite">{note}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
