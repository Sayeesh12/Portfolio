import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'

const traits = [
  'Good communication',
  'Quick learner',
  'Curious by nature',
  'Problem solver',
  'Comfortable with unfamiliar tech',
  'Team-oriented',
]

const loop = ['Learn', 'Build', 'Break', 'Understand', 'Improve']

export default function About() {
  return (
    <section id="about" className="section-pad py-24 sm:py-32">
      <div className="content-w">
        <SectionHeader index="01" label="About" title="A curious engineer who likes to see how things work." />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-[15px] leading-relaxed text-ink-dim"
          >
            <p>
              I&rsquo;m an Information Science Engineering undergraduate at Vidyavardhaka College
              of Engineering, Mysuru. I enjoy building software across backend engineering,
              full-stack development, databases, and AI-powered automation.
            </p>
            <p>
              I&rsquo;m particularly interested in understanding how systems work internally, and
              in turning ideas into reliable, working products rather than stopping at a demo.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 sm:grid-cols-3">
              {traits.map((trait) => (
                <li key={trait} className="flex items-center gap-2 text-sm text-ink">
                  <span className="h-1 w-1 rounded-full bg-signal" />
                  {trait}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-base-line bg-base-raised/60 p-6"
          >
            <p className="mb-5 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
              engineering mindset
            </p>
            <div className="flex flex-col gap-3">
              {loop.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                  <span
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm ${
                      i === loop.length - 1
                        ? 'border-signal/30 bg-signal/10 text-signal-soft'
                        : 'border-base-line text-ink-dim'
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
