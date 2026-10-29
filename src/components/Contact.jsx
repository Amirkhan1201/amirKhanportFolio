import { profile } from '../data/profile'
import { useCopy } from '../hooks'
import { Section, Reveal, Magnetic } from './ui'

export default function Contact() {
  const [copied, copy] = useCopy()
  const items = [
    { k: 'email', icon: '📧', v: profile.email, href: `mailto:${profile.email}`, copy: true },
    { k: 'phone', icon: '📞', v: profile.phone, href: `tel:${profile.phone}`, copy: true },
    { k: 'linkedin', icon: '🔗', v: 'LinkedIn Profile', href: profile.linkedin, ext: true },
  ]

  return (
    <Section id="contact" index={6} kicker="POST /api/contact" title={<>Get In <em>Touch</em></>}>
      <div className="contact">
        <Reveal className="contact-left">
          <p className="contact-big">
            I'm currently looking for new opportunities. <span className="grad">Let's connect!</span>
          </p>
          <div className="contact-pills">
            {items.map((it) => (
              <div key={it.k} className="contact-pill">
                <a href={it.href} {...(it.ext ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  <span>{it.icon}</span> {it.v}
                </a>
                {it.copy && (
                  <button className="copy" onClick={() => copy(it.v, it.k)}>
                    {copied === it.k ? 'copied ✔' : 'copy'}
                  </button>
                )}
              </div>
            ))}
          </div>
          <Magnetic href={`mailto:${profile.email}`} className="btn btn-primary">
            Say hello <span>→</span>
          </Magnetic>
        </Reveal>

        <Reveal className="term" delay={150}>
          <div className="code-bar">
            <i /><i /><i />
            <span>bash — hire.sh</span>
          </div>
          <pre className="term-body mono">
            <span className="prompt">$</span> curl -X POST amir-khan-port-folio.vercel.app/api/hire \{'\n'}
            {'    '}-H <span className="j-str">"Content-Type: application/json"</span> \{'\n'}
            {'    '}-d <span className="j-str">'{'{'}"role":"MERN / React Developer"{'}'}'</span>{'\n\n'}
            <span className="ok">HTTP/1.1 201 Created</span>{'\n'}
            <span className="j-punc">{'{'}</span>{'\n'}
            {'  '}<span className="j-key">"status"</span>: <span className="j-str">"available"</span>,{'\n'}
            {'  '}<span className="j-key">"location"</span>: <span className="j-str">"{profile.location}"</span>,{'\n'}
            {'  '}<span className="j-key">"email"</span>: <span className="j-str">"{profile.email}"</span>,{'\n'}
            {'  '}<span className="j-key">"message"</span>: <span className="j-str">"Let's connect!"</span>{'\n'}
            <span className="j-punc">{'}'}</span>
            <span className="caret" />
          </pre>
        </Reveal>
      </div>
    </Section>
  )
}
