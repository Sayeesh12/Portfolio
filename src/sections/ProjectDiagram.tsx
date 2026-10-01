import { motion } from 'framer-motion'

function Node({ label, tone = 'default' }: { label: string; tone?: 'default' | 'accent' | 'steel' }) {
  const tones: Record<string, string> = {
    default: 'border-base-line bg-base-raised text-ink-dim',
    accent: 'border-signal/40 bg-signal/10 text-signal-soft',
    steel: 'border-steel/40 bg-steel/10 text-steel-soft',
  }
  return (
    <div className={`rounded-lg border px-3 py-2 text-center font-mono text-[11px] leading-tight ${tones[tone]}`}>
      {label}
    </div>
  )
}

function Arrow({ vertical = true }: { vertical?: boolean }) {
  return (
    <div className={`flex ${vertical ? 'h-4 justify-center' : 'w-4 items-center'}`}>
      <motion.div
        className={vertical ? 'w-px bg-base-line' : 'h-px bg-base-line'}
        initial={{ scaleY: vertical ? 0 : 1, scaleX: vertical ? 1 : 0 }}
        whileInView={{ scaleY: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ height: vertical ? '100%' : 1, width: vertical ? 1 : '100%' }}
      />
    </div>
  )
}

export function ClinicalDiagram() {
  return (
    <div className="rounded-2xl border border-base-line bg-base-raised/40 p-6">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
        agent architecture
      </p>
      <div className="flex flex-col items-center gap-1.5">
        <Node label="User" />
        <Arrow />
        <Node label="AI Agent" tone="accent" />
        <Arrow />
        <Node label="LangGraph" tone="accent" />
        <Arrow />
        <div className="grid w-full grid-cols-3 gap-2">
          <Node label="Patient Service" />
          <Node label="Knowledge Search" />
          <Node label="Communication" />
        </div>
        <div className="grid w-full grid-cols-3 gap-2">
          <Arrow />
          <Arrow />
          <Arrow />
        </div>
        <div className="grid w-full grid-cols-3 gap-2">
          <Node label="PostgreSQL" />
          <Node label="ChromaDB" tone="steel" />
          <Node label="Email" />
        </div>
        <Arrow />
        <Node label="Amazon S3" />
        <Arrow />
        <Node label="SOP Documents" />
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-signal/30 bg-signal/5 px-3 py-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
        <span className="font-mono text-[10px] text-signal-soft">
          HITL checkpoint required before email dispatch or scheduling
        </span>
      </div>
    </div>
  )
}

export function TrackerDiagram() {
  return (
    <div className="rounded-2xl border border-base-line bg-base-raised/40 p-6">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
        request lifecycle
      </p>
      <div className="flex flex-col items-center gap-1.5">
        <Node label="React" />
        <Arrow />
        <Node label="REST API" />
        <Arrow />
        <Node label="Spring Boot" tone="accent" />
        <Arrow />
        <Node label="Service Layer" />
        <Arrow />
        <Node label="Repository" />
        <Arrow />
        <Node label="PostgreSQL" tone="steel" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-base-line px-3 py-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
          <span className="font-mono text-[10px] text-ink-dim">JWT auth on every request</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-base-line px-3 py-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
          <span className="font-mono text-[10px] text-ink-dim">RBAC on role boundaries</span>
        </div>
      </div>
    </div>
  )
}
