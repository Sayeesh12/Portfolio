import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { education } from '@/data/education'

export default function Education() {
  return (
    <section id="education" className="section-pad py-24 sm:py-32">
      <div className="content-w">
        <SectionHeader index="06" label="Education" title="Where the fundamentals came from." />

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative pl-8">
            <div className="absolute bottom-2 left-[3px] top-2 w-px bg-base-line" />
            <div className="space-y-10">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full border-2 border-signal bg-base" />
                  <p className="font-mono text-xs text-ink-faint">{edu.period}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">{edu.school}</h3>
                  <p className="text-sm text-ink-dim">
                    {edu.program} · {edu.location}
                  </p>
                  <p className="mt-1 text-sm font-medium text-signal-soft">{edu.score}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="h-fit rounded-2xl border border-base-line bg-base-raised/40 p-6"
          >
            <Award className="mb-4 text-signal" size={22} strokeWidth={1.6} />
            <p className="mb-1.5 font-mono text-xs text-ink-faint">Achievement</p>
            <h3 className="font-display text-lg font-semibold text-ink">HDFC Bank ECSS Scholarship</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">
              Awarded for academic excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
