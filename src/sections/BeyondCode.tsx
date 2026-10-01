import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TreePine,
  GraduationCap,
  Trash2,
  ShieldAlert,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  HeartHandshake,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import plantationPhoto from '@/assets/plantation.jpg'
import teachingPhoto from '@/assets/teaching.jpg'
import cleaningPhoto from '@/assets/cleaning.jpg'
import safetyPhoto from '@/assets/safety.jpg'

interface Activity {
  id: string
  icon: typeof TreePine
  title: string
  tag: string
  location: string
  caption: string
  fullStory: string
  image: string
  imageAlt: string
}

const activities: Activity[] = [
  {
    id: 'plantation',
    icon: TreePine,
    title: 'Plantation Drive',
    tag: 'NSS Green Initiative',
    location: 'Gokulam, Mysuru',
    caption: 'Planted saplings with the NSS team in Gokulam, Mysuru, fostering local biodiversity and environmental sustainability.',
    fullStory:
      'Participated in a tree-plantation initiative organized by the National Service Scheme (NSS) unit. Alongside fellow volunteers, planted saplings in Mysuru to promote green cover, combat urban heat, and encourage eco-conscious habits.',
    image: plantationPhoto,
    imageAlt: 'Sayeesh and NSS teammates planting saplings during a tree plantation drive in Gokulam, Mysuru',
  },
  {
    id: 'teaching',
    icon: GraduationCap,
    title: 'Teaching & Mentorship',
    tag: 'Educational Outreach',
    location: 'Mysuru Schools',
    caption: 'Conducted an interactive classroom session for school students on developing a positive mindset and foundational learning habits.',
    fullStory:
      'Conducted a school outreach workshop focused on "Developing a Positive Mindset", managing academic challenges, and embracing continuous learning. Engaged with enthusiastic school students to help build confidence and curiosity.',
    image: teachingPhoto,
    imageAlt: 'Sayeesh presenting a session on developing a positive mindset to school students in a classroom',
  },
  {
    id: 'cleaning',
    icon: Trash2,
    title: 'Cleanliness Drive',
    tag: 'Swachh Bharat Abhiyan',
    location: 'Campus Grounds',
    caption: 'Took part in a campus cleanliness drive with NSS volunteers, championing civic responsibility and public hygiene.',
    fullStory:
      'Volunteered in a campus and community sanitation drive under Swachh Bharat Abhiyan. Together with fellow students, collected waste, segregated recyclables, and advocated for maintaining clean, dignified public spaces.',
    image: cleaningPhoto,
    imageAlt: 'Sayeesh and NSS teammates wearing gloves with collection bags during a campus cleanliness drive',
  },
  {
    id: 'safety',
    icon: ShieldAlert,
    title: 'Road Safety Awareness',
    tag: 'Civic Safety Campaign',
    location: 'Mysuru',
    caption: 'Led a road safety awareness drive emphasizing helmet usage, defensive driving, and traffic regulations.',
    fullStory:
      'Organized an NSS road safety awareness activity aimed at reducing road accidents among young motorists. Spread awareness regarding helmet usage, speed limits, and defensive riding habits.',
    image: safetyPhoto,
    imageAlt: 'Sayeesh and friends holding a helmet with a motorcycle during a road safety awareness campaign',
  },
]

export default function BeyondCode() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const handleNext = useCallback(() => {
    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % activities.length : null))
  }, [])

  const handlePrev = useCallback(() => {
    setSelectedIdx((prev) =>
      prev !== null ? (prev - 1 + activities.length) % activities.length : null
    )
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return
      if (e.key === 'Escape') setSelectedIdx(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedIdx, handleNext, handlePrev])

  return (
    <section id="beyond-code" className="section-pad py-24 sm:py-32">
      <div className="content-w">
        <SectionHeader
          index="05"
          label="Beyond Code"
          title="Work that isn't measured in commits."
          description="Active contributions as a National Service Scheme (NSS) volunteer — environmental sustainability, youth education, campus cleanliness, and civic road safety."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setSelectedIdx(i)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-base-line bg-base-raised/50 transition-all duration-300 hover:border-signal/50 hover:bg-base-raised hover:shadow-xl hover:shadow-signal/5"
              >
                {/* Photo Header */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-base">
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />

                  {/* Icon badge */}
                  <span className="absolute left-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-xl border border-base-line/80 bg-base/85 text-signal backdrop-blur-md shadow-md">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>

                  {/* Expand button hint */}
                  <span className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-base/70 text-ink-dim opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:text-ink">
                    <Maximize2 size={14} />
                  </span>

                  {/* Tag Pill */}
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 rounded-full border border-base-line/80 bg-base/85 px-2.5 py-1 text-[10px] font-mono text-signal-soft backdrop-blur-md">
                    <HeartHandshake size={11} className="text-signal" />
                    <span>{a.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <h3 className="font-display text-base font-semibold tracking-tight text-ink group-hover:text-signal-soft transition-colors">
                      {a.title}
                    </h3>
                  </div>

                  <p className="mb-3 text-[13px] leading-relaxed text-ink-dim">
                    {a.caption}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-ink-faint">
                    <MapPin size={11} className="text-steel" />
                    <span>{a.location}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution View */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-base-line bg-base-raised shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                aria-label="Close modal"
                className="absolute right-3.5 top-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-base-line bg-base/80 text-ink-dim transition-colors hover:bg-base hover:text-ink backdrop-blur-md"
              >
                <X size={18} />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-base-line bg-base/80 text-ink-dim transition-colors hover:bg-base hover:text-ink backdrop-blur-md"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-base-line bg-base/80 text-ink-dim transition-colors hover:bg-base hover:text-ink backdrop-blur-md"
              >
                <ChevronRight size={20} />
              </button>

              {/* Photo */}
              <div className="relative max-h-[58vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activities[selectedIdx].image}
                  alt={activities[selectedIdx].imageAlt}
                  className="max-h-[58vh] w-full object-contain"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-signal/40 bg-signal/10 px-3 py-0.5 font-mono text-[11px] text-signal-soft">
                    {activities[selectedIdx].tag}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-ink-faint">
                    <MapPin size={11} className="text-steel" />
                    {activities[selectedIdx].location}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-ink">
                  {activities[selectedIdx].title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-dim">
                  {activities[selectedIdx].fullStory}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-base-line/60 pt-3 text-xs font-mono text-ink-faint">
                  <span>National Service Scheme (NSS)</span>
                  <span>{selectedIdx + 1} of {activities.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
