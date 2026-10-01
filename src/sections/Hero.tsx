import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'
import portrait from '@/assets/portrait.jpg'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

function FlowNode({
  label,
  active = false,
}: {
  label: string
  active?: boolean
}) {
  return (
    <div
      className={`rounded-lg border px-2 py-2 text-center font-mono text-[10px] leading-tight sm:px-3 sm:text-[11px] ${
        active
          ? 'border-signal/40 bg-signal/10 text-signal-soft'
          : 'border-base-line bg-base-raised text-ink-dim'
      }`}
    >
      {label}
    </div>
  )
}

function SystemVisual() {
  return (
    <div className="relative w-full rounded-2xl border border-base-line bg-base/90 p-5 backdrop-blur-md">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide text-ink-faint">
        <span>system.trace</span>

        <span className="flex items-center gap-1.5 text-live">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-live" />
          live
        </span>
      </div>

      {/* Software Pipeline */}
      <p className="mb-1.5 font-mono text-[10px] text-ink-faint">
        software pipeline
      </p>

      <div className="mb-4 grid grid-cols-5 gap-1.5">
        <FlowNode label="React" />
        <FlowNode label="REST API" />
        <FlowNode label="Spring Boot" />
        <FlowNode label="FastAPI" />
        <FlowNode label="SQL" />
      </div>

      {/* Agentic Pipeline */}
      <p className="mb-1.5 font-mono text-[10px] text-ink-faint">
        agentic pipeline
      </p>

      <div className="grid grid-cols-4 gap-1.5">
        <FlowNode label="RAG" active />
        <FlowNode label="LangGraph" active />
        <FlowNode label="LangChain" active />
        <FlowNode label="ChromaDB" active />
      </div>
    </div>
  )
}

function PortraitVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[430px]">
      <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-signal/20 via-steel/10 to-transparent blur-3xl opacity-80" />

      {/* Main Portrait Showcase Frame */}
      <div className="relative overflow-hidden rounded-[2rem] border border-base-line/80 bg-base-raised/70 p-2.5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-signal/40">
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <img
            src={portrait}
            alt="Portrait of Sayeesh Rajendra Mahale"
            className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
            loading="eager"
          />

          {/* Subtle bottom vignette */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-base/60 to-transparent" />
        </div>

        {/* Affiliation Badge */}
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-base-line/80 bg-base/85 px-3 py-1 font-mono text-[11px] text-ink shadow-lg backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span>VVCE &bull; 2023–27</span>
        </div>
      </div>

      {/* System Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mt-4"
      >
        <SystemVisual />
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center pt-24 sm:pt-20"
    >
      <div className="content-w section-pad grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Left Content */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Availability Badge */}
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-line bg-base-raised/60 px-3 py-1.5 font-mono text-xs text-ink-dim"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            Sayeesh Rajendra Mahale
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="mb-3 mt-2 font-mono text-sm text-signal"
          >
            Information Science Engineer
          </motion.p>

          {/* Main Heading */}
          <motion.p
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] text-balance text-ink sm:text-5xl lg:text-6xl"
          >
            Building software, AI systems &amp; intelligent automation.
          </motion.p>

          {/* Description */}
         <motion.p
  variants={item}
  className="relative z-10 mt-6 max-w-lg !text-white/50 text-[15px] font-medium leading-relaxed opacity-100 sm:text-base"
>
  I build reliable backend systems, full-stack applications, and
  AI-powered workflows that solve practical, real-world problems.
</motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              variant="primary"
            >
              View Projects
              <ArrowRight size={16} />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              variant="secondary"
            >
              Let&rsquo;s Connect
              <MessageSquare size={16} />
            </MagneticButton>
          </motion.div>

          {/* Education */}
          <motion.p
            variants={item}
            className="mt-10 font-mono text-[11px] text-ink-faint"
          >
            Vidyavardhaka College of Engineering, Mysuru — B.E. Information
            Science, 2023–2027
          </motion.p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-4 lg:mb-0"
        >
          <PortraitVisual />
        </motion.div>
      </div>
    </section>
  )
}