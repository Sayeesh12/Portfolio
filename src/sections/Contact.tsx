
import { motion } from 'framer-motion'
import { Mail, Github, Phone, ArrowUpRight } from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/sayeesh-mahale-55788b2b9/'

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-24 sm:py-32">
      <div className="content-w">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-base-line bg-base-raised/40 px-8 py-16 text-center sm:px-16"
        >
          <p className="mb-4 font-mono text-xs text-ink-faint">
            08 / Contact
          </p>

          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold text-balance text-ink sm:text-4xl">
            Have an idea worth building? Let&rsquo;s connect.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-[15px] text-ink-dim">
            Open to internships, full-time roles, and interesting collaborations.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="mailto:mahalesayeesh@gmail.com"
              variant="primary"
            >
              <Mail size={16} />
              mahalesayeesh@gmail.com
            </MagneticButton>

            <MagneticButton
              href="tel:+916363328798"
              variant="secondary"
            >
              <Phone size={16} />
              +91 6363328798
            </MagneticButton>

            <MagneticButton
              href="https://github.com/Sayeesh12"
              variant="secondary"
            >
              <Github size={16} />
              GitHub
            </MagneticButton>

            <MagneticButton
              href={LINKEDIN_URL}
              variant="secondary"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
