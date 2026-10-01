import { motion } from 'framer-motion'

interface SectionHeaderProps {
  index: string
  label: string
  title: string
  description?: string
}

export default function SectionHeader({ index, label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 max-w-2xl sm:mb-16"
    >
      <div className="mb-4 flex items-center gap-3 font-mono text-xs text-ink-faint">
        <span className="text-signal">{index}</span>
        <span className="h-px w-8 bg-base-line" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold text-balance text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-dim">{description}</p>
      )}
    </motion.div>
  )
}
