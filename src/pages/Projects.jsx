import { useState } from "react";
import { categories, projects } from "../data/projects.js";

export default function Projects() {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="container page">
      <div className="page-head">
        <p className="eyebrow">// SELECTED WORK</p>
        <h1 className="page-title">
          Projects with <span className="accent">purpose</span>
        </h1>
        <p className="lead">
          A showcase of digital products I've designed, developed, and
          delivered.
        </p>
      </div>

      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            className="chip"
            aria-pressed={active === c.id}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((p) => (
          <article key={p.id} className="card">
            <div className="card-thumb" aria-hidden="true">
              <span className="card-num">{String(p.id).padStart(2, "0")}</span>
              <span className="card-bar" />
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="card-links">
                <a href={p.demo}>Live demo →</a>
                <a href={p.source}>Source code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
