import { motion } from 'framer-motion'
import { Sparkles, Zap, MessagesSquare, Wrench } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const cards = [
  {
    icon: Sparkles,
    title: 'Curious',
    body: 'I enjoy understanding how things work and exploring unfamiliar technologies.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    body: 'I quickly adapt to new tools and frameworks when solving a problem.',
  },
  {
    icon: MessagesSquare,
    title: 'Communicator',
    body: 'I can explain technical ideas clearly and collaborate effectively with teams.',
  },
  {
    icon: Wrench,
    title: 'Builder',
    body: 'I prefer turning concepts into working systems and learning through implementation.',
  },
]

export default function HowIWork() {
  return (
    <section className="section-pad py-24 sm:py-32">
      <div className="content-w">
        <SectionHeader index="07" label="How I Work" title="Traits I bring to a team, not buzzwords." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-base-line bg-base-raised/50 p-6 transition-colors hover:border-ink-faint"
            >
              <card.icon className="mb-4 text-signal" size={22} strokeWidth={1.6} />
              <h3 className="mb-2 font-display text-base font-semibold text-ink">{card.title}</h3>
              <p className="text-sm leading-relaxed text-ink-dim">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
