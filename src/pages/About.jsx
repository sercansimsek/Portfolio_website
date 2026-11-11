const tools = [
  { group: 'Frontend', items: 'React · JavaScript · TypeScript' },
  { group: 'Backend', items: 'Node.js · Express · REST APIs' },
  { group: 'Styling', items: 'Tailwind CSS · CSS · Figma' },
  { group: 'Data', items: 'MongoDB · Mongoose' },
  { group: 'Workflow', items: 'Git · GitHub · VS Code' },
]

export default function About() {
  return (
    <>
      <section className="container about">
        <div className="about-text">
          <p className="eyebrow">// A LITTLE ABOUT ME</p>
          <h1 className="page-title">
            Curious by nature. <span className="accent">Developer</span> by craft.
          </h1>
          <p>
            [Two sentences on who you are and what you enjoy building. Mention what you care about,
            such as clean code, accessible interfaces or the small details.]
          </p>
          <p>[One more sentence on how you learn and work, and what kind of problems you like to solve.]</p>
          <div className="status-pill">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </div>

        <div className="tools">
          <h2 className="eyebrow">TOOLS I WORK WITH</h2>
          <ul className="tools-list">
            {tools.map((t) => (
              <li key={t.group} className="tool-row">
                <span className="tool-group">{t.group}</span>
                <span className="tool-items">{t.items}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="container page-count">03 / 04</div>
    </>
  )
}
