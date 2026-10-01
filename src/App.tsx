import GridBackground from '@/components/GridBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Stats from '@/sections/Stats'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Hackathons from '@/sections/Hackathons'
import BeyondCode from '@/sections/BeyondCode'
import Education from '@/sections/Education'
import HowIWork from '@/sections/HowIWork'
import Contact from '@/sections/Contact'

// Set this once a resume PDF is added to /public (e.g. '/resume-sayeesh-mahale.pdf').
// Left undefined rather than pointing at a file that doesn't exist.
const RESUME_URL: string | undefined = undefined

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <Navbar resumeUrl={RESUME_URL} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <BeyondCode />
        <Education />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
