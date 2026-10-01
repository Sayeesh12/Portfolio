import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { projects, type Project } from '@/data/projects'
import { ClinicalDiagram, TrackerDiagram } from './ProjectDiagram'

function ProjectBlock({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)
  const visibleHighlights = expanded ? project.highlights : project.highlights.slice(0, 2)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid gap-10 border-t border-base-line py-16 first:border-t-0 first:pt-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14"
    >
      <div>
        <div className="mb-4 flex items-center gap-3 font-mono text-xs text-ink-faint">
          <span className="text-2xl font-display text-signal">{project.index}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-balance text-ink sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-dim">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-base-line px-3 py-1 font-mono text-[11px] text-ink-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-5">
          {visibleHighlights.map((h) => (
            <div key={h.title}>
              <p className="mb-1.5 text-sm font-medium text-ink">{h.title}</p>
              <p className="text-sm leading-relaxed text-ink-dim">{h.body}</p>
              {h.items && (
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {h.items.map((it) => (
                    <li key={it} className="flex items-center gap-1.5 font-mono text-[11px] text-ink-faint">
                      <span className="h-1 w-1 rounded-full bg-ink-faint" /> {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6">
          {project.highlights.length > 2 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {expanded ? 'Show less' : 'Read more'}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-signal"
          >
            <Github size={16} /> View repository
          </a>
        </div>
      </div>

      <div className="lg:pt-14">
        {project.diagram === 'clinical' ? <ClinicalDiagram /> : <TrackerDiagram />}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad py-24 sm:py-32">
      <div className="content-w">
        <SectionHeader
          index="03"
          label="Projects"
          title="The strongest evidence of how I build."
          description="Two systems that go past the demo layer — with real architecture, real trade-offs, and real safeguards."
        />
        <div>
          {projects.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
