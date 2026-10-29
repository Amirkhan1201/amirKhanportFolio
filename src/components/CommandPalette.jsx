import { useEffect, useMemo, useRef, useState } from 'react'
import { SECTIONS } from './Nav'
import { profile } from '../data/profile'

/** Ctrl/⌘ + K — jump to a section or copy contact details. */
export default function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const input = useRef(null)

  const commands = useMemo(
    () => [
      ...SECTIONS.map((s) => ({
        label: `Go to ${s.label}`,
        hint: `#${s.id}`,
        run: () => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }),
      })),
      { label: 'Copy email', hint: profile.email, run: () => navigator.clipboard?.writeText(profile.email) },
      { label: 'Copy phone', hint: profile.phone, run: () => navigator.clipboard?.writeText(profile.phone) },
      { label: 'Open resume', hint: 'Google Drive', run: () => window.open(profile.resume, '_blank') },
      { label: 'Open LinkedIn', hint: profile.linkedinLabel, run: () => window.open(profile.linkedin, '_blank') },
    ],
    []
  )
  const results = useMemo(
    () => commands.filter((c) => (c.label + c.hint).toLowerCase().includes(q.toLowerCase())),
    [commands, q]
  )

  useEffect(() => {
    if (!open) return
    setQ('')
    setSel(0)
    const t = setTimeout(() => input.current?.focus(), 30)
    return () => clearTimeout(t)
  }, [open])
  useEffect(() => setSel(0), [q])

  if (!open) return null

  const onKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSel((s) => Math.min(s + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSel((s) => Math.max(s - 1, 0))
    } else if (e.key === 'Enter' && results[sel]) {
      results[sel].run()
      onClose()
    } else if (e.key === 'Escape') onClose()
  }

  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div className="palette" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-label="Command palette">
        <div className="palette-input">
          <span>›</span>
          <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKey} placeholder="Type a command… (try “resume”)" />
          <kbd>Esc</kbd>
        </div>
        <ul className="palette-list">
          {results.map((c, i) => (
            <li key={c.label} className={i === sel ? 'is-sel' : ''} onMouseEnter={() => setSel(i)} onClick={() => (c.run(), onClose())}>
              <span>{c.label}</span>
              <small>{c.hint}</small>
            </li>
          ))}
          {!results.length && <li className="palette-empty">No commands found</li>}
        </ul>
      </div>
    </div>
  )
}
