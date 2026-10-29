import { useCallback } from 'react'
import { projects } from '../data/profile'
import { Section } from './ui'

/** Each project as a live API route that returns 200 OK. */
export default function Projects() {
  const onMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--gx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--gy', `${e.clientY - r.top}px`)
  }, [])

  return (
    <Section id="projects" index={3} kicker="GET /api/projects" title={<>Featured <em>Projects</em></>}>
      <div className="routes">
        {projects.map((p, i) => (
          <a
            key={p.slug}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="route"
            onMouseMove={onMove}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="route-top mono">
              <span className="method get">GET</span>
              <span className="route-path">/projects/{p.slug}</span>
              <span className="route-ok">200</span>
            </div>
            <span className="route-type mono">{p.type}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="route-stack">
              {p.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
            <span className="route-link mono">View Project ↗</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
