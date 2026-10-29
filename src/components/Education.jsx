import { education } from '../data/profile'
import { Section, Reveal } from './ui'

export default function Education() {
  return (
    <Section id="education" index={5} kicker="db.education.find()" title={<>Edu<em>cation</em></>}>
      <div className="edu">
        {education.map((e, i) => (
          <Reveal key={e.title} className="edu-card" delay={i * 120}>
            <span className="edu-seal">{e.icon}</span>
            <div>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
              <span className="tag">{e.period}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
