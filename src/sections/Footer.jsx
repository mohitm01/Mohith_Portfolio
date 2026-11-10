import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Mohith M. All rights reserved.</p>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
