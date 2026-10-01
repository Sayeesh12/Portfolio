import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Menu, X, FileText } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'beyond-code', label: 'Beyond Code' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

interface NavbarProps {
  resumeUrl?: string
}

export default function Navbar({ resumeUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id: string) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-md border-b border-base-line' : 'bg-transparent'
      }`}
    >
      <nav className="content-w section-pad flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2 font-display text-lg font-semibold text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-base-line bg-base-raised text-sm text-signal">
            S
          </span>
          <span className="hidden sm:inline">Sayeesh</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <FileText size={15} /> Resume
            </a>
          )}
          <a
            href="https://github.com/Sayeesh12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-base-line text-ink-dim transition-colors hover:border-ink-faint hover:text-ink"
          >
            <Github size={17} />
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-base-line text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-base-line bg-base/95 backdrop-blur-md lg:hidden"
          >
            <ul className="content-w section-pad flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="w-full py-2.5 text-left text-base text-ink-dim transition-colors hover:text-ink"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="flex items-center gap-4 pt-3">
                {resumeUrl && (
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-ink-dim">
                    <FileText size={15} /> Resume
                  </a>
                )}
                <a href="https://github.com/Sayeesh12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-ink-dim">
                  <Github size={15} /> GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
