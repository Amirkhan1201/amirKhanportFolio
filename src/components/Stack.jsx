import { Fragment, memo, useMemo, useState } from 'react'
import { layers, marquee } from '../data/profile'
import { Section, Reveal } from './ui'

const files = import.meta.glob('../assets/icons/*.svg', { eager: true, import: 'default' })
const icon = (name) => files[`../assets/icons/${name}.svg`]

// map a skill label to an icon file when we have one
const ICON_FOR = {
  'React.js': 'react', 'Next.js': 'nextjs', TypeScript: 'typescript', 'JavaScript (ES6+)': 'javascript',
  HTML5: 'html5', CSS3: 'css3', 'Redux Toolkit': 'redux', 'Material UI': 'materialui', 'Tailwind CSS': 'tailwindcss',
  Bootstrap: 'bootstrap', 'Node.js': 'nodejs', 'Express.js': 'express', MongoDB: 'mongodb', Mongoose: 'mongoose',
  Postman: 'postman', Git: 'git', GitHub: 'github', Bitbucket: 'bitbucket', 'VS Code': 'vscode',
}
const DARK = new Set(['nextjs', 'express', 'github'])

const Row = memo(function Row({ items, reverse }) {
  const loop = [...items, ...items]
  return (
    <div className={`tech-row ${reverse ? 'is-reverse' : ''}`}>
      <div className="tech-track">
        {loop.map(([key, label, dark], i) => (
          <div className="tech-pill" key={i} aria-hidden={i >= items.length}>
            <img src={icon(key)} alt="" className={dark ? 'is-dark' : ''} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
})

/** Skills laid out as the request flow: React client ⇄ Express/Node API ⇄ MongoDB. */
export default function Stack() {
  const [active, setActive] = useState('client')
  const layer = useMemo(() => layers.find((l) => l.id === active), [active])
  const flow = layers.slice(0, 3)
  const tools = layers[3]

  return (
    <Section id="stack" index={2} kicker="client → api → database" title={<>The <em>MERN</em> Stack I Build With</>}>
      <Reveal className="arch">
        <div className="arch-flow">
          {flow.map((l, i) => (
            <Fragment key={l.id}>
              <button
                className={`arch-node ${active === l.id ? 'is-active' : ''}`}
                style={{ '--c': l.color }}
                onClick={() => setActive(l.id)}
              >
                <span className="arch-icon">
                  <img src={icon(l.icon)} alt="" />
                </span>
                <span className="arch-label mono">{l.label}</span>
                <strong>{l.tech}</strong>
                <span className="arch-letter">{l.letter}</span>
              </button>
              {i < flow.length - 1 && (
                <div className="arch-link" aria-hidden="true">
                  <span className="pkt req" style={{ animationDelay: `${i * 0.6}s` }} />
                  <span className="pkt res" style={{ animationDelay: `${i * 0.6 + 1.1}s` }} />
                  <small className="mono">{i === 0 ? 'HTTP · JSON' : 'Mongoose'}</small>
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <button
          className={`arch-tools ${active === tools.id ? 'is-active' : ''}`}
          style={{ '--c': tools.color }}
          onClick={() => setActive(tools.id)}
        >
          <img src={icon(tools.icon)} alt="" /> <span className="mono">Tooling & workflow</span>
        </button>
      </Reveal>

      <div className="layer-panel" key={active} style={{ '--c': layer.color }}>
        {layer.groups.map((g, gi) => (
          <div className="layer-group" key={g.title} style={{ animationDelay: `${gi * 90}ms` }}>
            <h3 className="mono">{g.title}</h3>
            <div className="chips">
              {g.items.map((s, i) => {
                const ic = ICON_FOR[s]
                return (
                  <span className="chip" key={s} style={{ animationDelay: `${gi * 90 + i * 45}ms` }}>
                    {ic ? (
                      <img src={icon(ic)} alt="" className={DARK.has(ic) ? 'is-dark' : ''} />
                    ) : (
                      <i className="chip-dot" />
                    )}
                    {s}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-marquee" aria-label="Technologies">
        <Row items={marquee[0]} />
        <Row items={marquee[1]} reverse />
      </div>
    </Section>
  )
}
