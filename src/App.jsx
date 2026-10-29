import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cursor from './components/Cursor'
import CommandPalette from './components/CommandPalette'
import { useHotkey } from './hooks'
import { profile } from './data/profile'

// Below-the-fold sections are code-split
const About = lazy(() => import('./components/About'))
const Stack = lazy(() => import('./components/Stack'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))

function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1))
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [])
  return null
}

const isPaletteKey = (e) => (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'

export default function App() {
  const [palette, setPalette] = useState(false)
  const toggle = useCallback((e) => {
    e?.preventDefault?.()
    setPalette((p) => !p)
  }, [])
  useHotkey(isPaletteKey, toggle)

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Cursor />
      <Nav onOpenPalette={toggle} />
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
      <main>
        <Hero />
        <Suspense fallback={<div className="loading mono">connecting to cluster…</div>}>
          <About />
          <Stack />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <ScrollToHash />
        </Suspense>
      </main>
      <footer className="footer mono">
        <span>
          © {new Date().getFullYear()} {profile.name} · Built with MongoDB · Express · React · Node
        </span>
        <a href="#home">back to top ↑</a>
      </footer>
    </>
  )
}
