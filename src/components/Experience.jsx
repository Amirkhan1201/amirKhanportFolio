import { useMemo, useState } from 'react'
import { experience } from '../data/profile'
import { Section, Reveal } from './ui'

/** **bold** → <strong> */
const rich = (text) =>
  text.split(/\*\*(.+?)\*\*/g).map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p))

/** Work history browsed like a MongoDB collection: db.experience.find() */
export default function Experience() {
  const [active, setActive] = useState(experience[0].id)
  const doc = useMemo(() => experience.find((e) => e.id === active), [active])

  return (
    <Section id="experience" index={4} kicker="db.experience.find().sort({ start: -1 })" title={<>Work <em>Experience</em></>}>
      <div className="compass">
        <Reveal className="collection">
          <div className="coll-head mono">
            <span className="leaf">◆</span> portfolio.<b>experience</b>
            <small>{experience.length} documents</small>
          </div>
          {experience.map((e) => (
            <button key={e.id} className={`doc-row ${active === e.id ? 'is-active' : ''}`} onClick={() => setActive(e.id)}>
              <span className="mono oid">ObjectId("{e.id}")</span>
              <strong>{e.company}</strong>
              <small>
                {e.role} · {e.period}
              </small>
            </button>
          ))}
        </Reveal>

        <Reveal className="document" delay={120}>
          <div className="doc-json mono" key={doc.id + '-h'}>
            <div><span className="j-punc">{'{'}</span></div>
            <div className="in"><span className="j-key">_id</span>: <span className="j-fn">ObjectId</span>(<span className="j-str">"{doc.id}"</span>),</div>
            <div className="in"><span className="j-key">company</span>: <span className="j-str">"{doc.company}"</span>,</div>
            <div className="in"><span className="j-key">role</span>: <span className="j-str">"{doc.role}"</span>,</div>
            <div className="in"><span className="j-key">period</span>: <span className="j-str">"{doc.period}"</span>,</div>
            <div className="in"><span className="j-key">location</span>: <span className="j-str">"{doc.location}"</span>,</div>
            <div className="in"><span className="j-key">highlights</span>: <span className="j-punc">[</span> <span className="dim">// {doc.points.length} items</span></div>
          </div>
          <ul className="doc-points" key={doc.id}>
            {doc.points.map((p, i) => (
              <li key={i} style={{ animationDelay: `${i * 90}ms` }}>
                {rich(p)}
              </li>
            ))}
          </ul>
          <div className="doc-json mono">
            <div className="in"><span className="j-punc">]</span></div>
            <div><span className="j-punc">{'}'}</span></div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
