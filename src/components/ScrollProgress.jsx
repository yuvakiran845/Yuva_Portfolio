import { motion, useScroll, useSpring } from 'framer-motion'

// Thin lavender bar at the very top that fills as you scroll.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 })

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[70] h-[3px]">
      <motion.div className="h-full origin-left bg-pop" style={{ scaleX }} />
    </div>
  )
}
