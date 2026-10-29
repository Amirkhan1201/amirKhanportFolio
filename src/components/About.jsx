import { useEffect, useMemo, useState } from 'react'
import { about } from '../data/profile'
import { useInView } from '../hooks'
import { Section, Reveal } from './ui'

/** Colourise a JSON string into spans. */
function JsonView({ text }) {
  // strings (possibly still streaming, so the closing quote is optional) and punctuation
  return text.split(/("[^"]*"?|[{}[\],])/g).map((p, i) => {
    if (p.startsWith('"')) return <span key={i} className="j-str">{p}</span>
    if (/^[{}[\],]$/.test(p)) return <span key={i} className="j-punc">{p}</span>
    return p
  })
}

/** The bio served like an API response: GET /api/developer → 200 OK. */
export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const json = useMemo(() => JSON.stringify(about.config, null, 2), [])
  const [shown, setShown] = useState(0)
  const [status, setStatus] = useState('pending')

  // "fetch" then stream the response in
  useEffect(() => {
    if (!inView) return
    let raf
    const t = setTimeout(() => {
      setStatus('ok')
      const start = performance.now()
      const tick = (now) => {
        const n = Math.min(json.length, Math.floor((now - start) / 6))
        setShown(n)
        if (n < json.length) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, 650)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [inView, json])

  // mark keys vs values for colouring
  const visible = json.slice(0, shown)
  const lines = visible.split('\n')

  return (
    <Section id="about" index={1} kicker="GET /api/developer" title={<>About <em>Me</em></>}>
      <div className="about">
        <div className="api" ref={ref}>
          <div className="api-bar">
            <span className="method get">GET</span>
            <span className="api-url mono">/api/developer/amir</span>
            <span className={`api-status ${status}`}>
              {status === 'ok' ? '200 OK' : <i className="spinner" />}
            </span>
          </div>
          <div className="api-meta mono">
            <span>Content-Type: application/json</span>
            <span>{status === 'ok' ? '42 ms' : '…'}</span>
          </div>
          <pre className="api-body mono">
            {lines.map((ln, i) => {
              const m = ln.match(/^(\s*)("[^"]+")(:\s?)(.*)$/)
              return (
                <div key={i}>
                  {m ? (
                    <>
                      {m[1]}
                      <span className="j-key">{m[2]}</span>
                      {m[3]}
                      <JsonView text={m[4]} />
                    </>
                  ) : (
                    <JsonView text={ln} />
                  )}
                </div>
              )
            })}
            {shown < json.length && status === 'ok' && <span className="caret" />}
          </pre>
        </div>

        <Reveal className="story" delay={150}>
          <h3>Who Is Amir</h3>
          {about.story.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <div className="highlights">
            {about.highlights.map((h, i) => (
              <Reveal key={h.title} className="highlight" delay={250 + i * 120}>
                <span className="hl-icon">{h.icon}</span>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
