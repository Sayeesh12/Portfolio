import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code2 } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { skillCategories } from '@/data/skills'
import { skillIcons, categoryIcons } from '@/data/skillIcons'

export default function Skills() {
  const [openId, setOpenId] = useState<string>(skillCategories[0].id)

  return (
    <section id="skills" className="section-pad py-24 sm:py-32">
      <div className="content-w">
        <SectionHeader
          index="02"
          label="Skills"
          title="Tools I reach for, organized by what they're for."
        />

        <div className="grid gap-3">
          {skillCategories.map((cat, i) => {
            const isOpen = openId === cat.id
            const CategoryIcon = categoryIcons[cat.id] ?? Code2
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="overflow-hidden rounded-xl border border-base-line bg-base-raised/40"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : cat.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-base-line bg-base text-signal">
                      <CategoryIcon size={16} strokeWidth={1.7} />
                    </span>
                    <span className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                      <span className="font-display text-base font-semibold text-ink sm:text-lg">
                        {cat.label}
                      </span>
                      <span className="hidden font-mono text-xs text-ink-faint sm:inline">
                        {cat.note}
                      </span>
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-faint">
                      {String(cat.items.length).padStart(2, '0')}
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown size={16} className="text-ink-dim" />
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex flex-wrap gap-2 px-5 pb-5 sm:px-6">
                        {cat.items.map((skill) => {
                          const SkillIcon = skillIcons[skill] ?? Code2
                          return (
                            <span
                              key={skill}
                              className="flex items-center gap-2 rounded-full border border-base-line px-3 py-1.5 text-xs text-ink-dim transition-colors hover:border-signal/40 hover:text-signal-soft"
                            >
                              <SkillIcon size={14} className="shrink-0" />
                              {skill}
                            </span>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
