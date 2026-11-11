import { useState } from 'react'

const links = [
  {
    label: '[your@email.com]',
    href: 'mailto:your@email.com',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: 'github.com/[username]',
    href: 'https://github.com/',
    icon: (
      <path d="M9 19c-4 1.2-4-2-6-2.5M15 21v-3.5c0-1 .1-1.5-.5-2.2 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.4 11.4 0 0 0-6 0C7 2.4 6 2.7 6 2.7a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.5 9.1c0 4.7 2.8 5.7 5.5 6-.6.6-.6 1.2-.5 2.2V21" />
    ),
  },
  {
    label: 'linkedin.com/in/[username]',
    href: 'https://www.linkedin.com/',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-1.5 1-2 2-2s2 .8 2 2.2V16" />
      </>
    ),
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: connect a real service (Formspree, EmailJS or your own Express route).
    setSent(true)
    e.target.reset()
  }

  return (
    <section className="container contact">
      <div className="contact-info">
        <div className="page-head">
          <p className="eyebrow">// CONTACT</p>
          <h1 className="page-title">
            Let's build something <span className="accent">together</span>
          </h1>
          <p className="lead">
            Have a project in mind or just want to say hi? Send a message and I'll get back to you
            soon.
          </p>
        </div>

        <div className="contact-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="contact-link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {l.icon}
              </svg>
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="field">
          <label htmlFor="c-msg">Message</label>
          <textarea id="c-msg" name="message" rows="5" placeholder="Tell me about your project" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Send message
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </button>
        {sent && (
          <p className="form-note" role="status">
            Thanks! The form is not connected to a service yet, see the README.
          </p>
        )}
      </form>
    </section>
  )
}
