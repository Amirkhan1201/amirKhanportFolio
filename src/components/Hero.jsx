import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useTypewriter, useCountUp } from '../hooks'
import { SplitText, Magnetic } from './ui'

const STACK = [
  { l: 'M', name: 'MongoDB', c: '#00ed64' },
  { l: 'E', name: 'Express', c: '#e9ecf5' },
  { l: 'R', name: 'React', c: '#61dafb' },
  { l: 'N', name: 'Node.js', c: '#8cc84b' },
]

function Stat({ s, i }) {
  const v = useCountUp(s.value, true, 1600 + i * 200, s.decimals || 0)
  return (
    <div className="stat">
      <strong>
        {s.decimals ? v.toFixed(s.decimals) : v}
        {s.suffix}
      </strong>
      <span>{s.label}</span>
    </div>
  )
}

export default function Hero() {
  const role = useTypewriter(profile.roles)
  const [lit, setLit] = useState(0)
  const scene = useRef(null)

  // light up M → E → R → N in a loop
  useEffect(() => {
    const t = setInterval(() => setLit((n) => (n + 1) % STACK.length), 1100)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const el = scene.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const move = (e) => {
      el.style.setProperty('--mx', (e.clientX / innerWidth - 0.5).toFixed(3))
      el.style.setProperty('--my', (e.clientY / innerHeight - 0.5).toFixed(3))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section id="home" className="hero" ref={scene}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="pulse" /> Open to opportunities · {profile.location}
          </p>
          <p className="hero-hello mono">Hello, I'm</p>
          <h1 className="hero-name">
            <SplitText text="Amir Khan J" delay={150} />
          </h1>
          <p className="hero-role mono">
            <span className="dim">$ </span>
            <span className="typed">{role}</span>
            <span className="caret" />
          </p>
          <p className="hero-lead">{profile.intro}</p>

          <div className="hero-ctas">
            <Magnetic href="#experience" className="btn btn-primary">
              View Experience <span>→</span>
            </Magnetic>
            <Magnetic href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Resume ↗
            </Magnetic>
          </div>

          <div className="stats">
            {profile.stats.map((s, i) => (
              <Stat key={s.label} s={s} i={i} />
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <figure className="portrait">
            <img src="/profile.jpg" alt={`${profile.name}, ${profile.role}`} width="1123" height="1401" />
            <figcaption className="stack-strip" aria-label="MERN stack">
              {STACK.map((s, i) => (
                <span key={s.l} className={`stack-tile ${i === lit ? 'is-lit' : ''}`} style={{ '--c': s.c }}>
                  <b>{s.l}</b>
                  <small>{s.name}</small>
                </span>
              ))}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
