import { MotionConfig } from 'framer-motion'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Services from './components/Services'
import Certifications from './components/Certifications'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    // reducedMotion="user": Framer skips movement for people who ask for less motion
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <Certifications />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
