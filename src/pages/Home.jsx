import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="container hero">
      <div className="hero-text">
        <p className="eyebrow">// FULL-STACK DEVELOPER</p>
        <h1>
          Building Digital <span className="accent">Experiences</span> That Matter
        </h1>
        <p className="lead">
          Crafting elegant solutions with modern technologies. Specialized in React, Node.js, and
          scalable web architecture.
        </p>
        <div className="btn-row">
          <Link to="/projects" className="btn btn-primary">
            View Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="code-card" aria-hidden="true">
        <div className="code-bar">
          <span style={{ background: '#ff4500' }} />
          <span style={{ background: '#ffb020' }} />
          <span style={{ background: '#7fcb95' }} />
        </div>
        <div className="code-body">
          <div className="code-line">
            <span className="kw">const</span> <span className="var">developer</span> = {'{'}
          </div>
          <div className="code-line indent">
            <span className="key">name</span>: <span className="str">'[Your Name]'</span>,
          </div>
          <div className="code-line indent">
            <span className="key">skills</span>: [<span className="str">'React'</span>,{' '}
            <span className="str">'Node.js'</span>, <span className="str">'MongoDB'</span>],
          </div>
          <div className="code-line indent">
            <span className="key">passion</span>: <span className="str">'Clean Code'</span>,
          </div>
          <div className="code-line indent">
            <span className="key">status</span>: <span className="str">'Available for work'</span>
          </div>
          <div className="code-line">{'};'}</div>
        </div>
      </div>
    </section>
  )
}
