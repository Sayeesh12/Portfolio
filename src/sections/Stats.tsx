import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const stats = [
  { value: 9.03, decimals: 2, suffix: '', label: 'CGPA' },
  { value: 2027, decimals: 0, suffix: '', label: 'B.E. Information Science', display: '2023–2027' },
  { value: 2, decimals: 0, suffix: '', label: 'Featured Engineering Projects' },
  { value: 0, decimals: 0, suffix: '', label: 'Hackathon Experience', display: 'National' },
]

function Counter({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [inView, value, decimals])

  return <span ref={ref}>{display}</span>
}

export default function Stats() {
  return (
    <section className="section-pad border-y border-base-line py-16">
      <div className="content-w grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {stat.display ?? <Counter value={stat.value} decimals={stat.decimals} />}
            </p>
            <p className="mt-1.5 text-sm text-ink-faint">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
