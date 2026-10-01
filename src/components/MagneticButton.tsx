import { useRef, useState, type ReactNode, type ElementType, type MouseEvent } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.25, y: y * 0.25 })
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 })
  }

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
  const variants: Record<string, string> = {
    primary: 'bg-signal text-base hover:bg-signal-soft',
    secondary: 'border border-base-line text-ink hover:border-ink-faint',
    ghost: 'text-ink-dim hover:text-ink',
  }

  const Comp: ElementType = href ? 'a' : 'button'

  return (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.2 }}
      className="inline-block"
    >
      <Comp
        ref={ref as any}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Comp>
    </motion.div>
  )
}
