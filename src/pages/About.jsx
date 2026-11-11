const tools = [
  { group: "Frontend", items: "JavaScript · TypeScript · React " },
  { group: "Backend", items: "Node.js · Express.js · REST APIs" },
  { group: "Styling", items: "CSS · TailwindCSS · Sass · Figma" },
  { group: "Data", items: "MongoDB · PostgreSQL " },
  { group: "Workflow", items: "Git · GitHub · VS Code" },
];

export default function About() {
  return (
    <>
      <section className="container about">
        <div className="about-text">
          <p className="eyebrow">// A LITTLE ABOUT ME</p>
          <h1 className="page-title">
            Turning <span className="accent">curiosity</span> into code
          </h1>
          <p>
            I'm a developer passionate about building meaningful digital
            experiences and turning ideas into functional products. I enjoy
            working with modern technologies, writing clean and maintainable
            code, and creating interfaces that feel intuitive and effortless.
          </p>
          <p>
            I believe in continuous learning, thoughtful problem-solving, and
            paying attention to the details that make a real difference.
          </p>
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
    </>
  );
}
