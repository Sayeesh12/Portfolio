import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import symbiotPhoto from '@/assets/symbiot.jpg'
import infothonPhoto from '@/assets/infothon.jpg'

interface Hackathon {
  name: string
  year: string
  description: string
  gains: string[]
  image: string
  imageAlt: string
}

const hackathons: Hackathon[] = [
  {
    name: 'Symbiot National Hackathon',
    year: '2025',
    description:
      'Participated in the Symbiot National Hackathon, collaborating with a team to develop an innovative technology solution under time constraints.',
    gains: ['Problem-solving', 'Rapid prototyping', 'Teamwork', 'Presenting to evaluators'],
    image: symbiotPhoto,
    imageAlt: 'Sayeesh and teammates presenting their project at the Symbiot National Hackathon',
  },
  {
    name: 'Infothon 5.0',
    year: 'National Hackathon',
    description:
      'Collaborated with a team to design and develop a hospital-focused drug inventory management product — helping hospitals manage medicine stock, track inventory levels, monitor drug availability, and streamline inventory operations.',
    gains: ['Product development', 'Problem-solving', 'Teamwork', 'Healthcare-domain design'],
    image: infothonPhoto,
    imageAlt: 'Sayeesh building with his team on laptops at the Infothon 5.0 national hackathon',
  },
]

export default function Hackathons() {
  return (
    <section id="hackathons" className="section-pad py-24 sm:py-32">
      <div className="content-w">
        <SectionHeader
          index="04"
          label="Hackathons"
          title="Building under pressure."
          description="Time-boxed events where the constraint is the point — ship something real, with a team, in front of evaluators."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-base-line bg-base-raised/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={h.image}
                  alt={h.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/95 via-base/10 to-transparent" />
                <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                  National Hackathon
                </span>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">{h.name}</h3>
                  <span className="font-mono text-xs text-ink-faint">{h.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-ink-dim">{h.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {h.gains.map((g) => (
                    <li key={g} className="rounded-full border border-base-line px-2.5 py-1 font-mono text-[10px] text-ink-faint">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
