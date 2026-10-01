import { Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-base-line">
      <div className="content-w section-pad flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base font-semibold text-ink">Sayeesh Rajendra Mahale</p>
          <p className="mt-1 max-w-sm text-sm text-ink-faint">
            Built with curiosity, systems thinking, and too many iterations.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:mahalesayeesh@gmail.com"
            aria-label="Email Sayeesh"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-base-line text-ink-dim transition-colors hover:border-ink-faint hover:text-ink"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/Sayeesh12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-base-line text-ink-dim transition-colors hover:border-ink-faint hover:text-ink"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
      <div className="content-w section-pad flex items-center justify-between border-t border-base-line py-4 font-mono text-[11px] text-ink-faint">
        <span>© {new Date().getFullYear()} Sayeesh Rajendra Mahale</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-live" /> system online
        </span>
      </div>
    </footer>
  )
}
