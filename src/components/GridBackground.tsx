export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-signal/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[560px] rounded-full bg-steel/10 blur-[140px]" />
      <div className="noise-overlay" />
    </div>
  )
}
