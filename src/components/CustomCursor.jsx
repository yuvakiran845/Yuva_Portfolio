import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'

const INTERACTIVE = 'a, button, [role="button"], summary, label, select'
const TEXT_FIELD = 'input, textarea, [contenteditable="true"]'

// Lime dot that follows the mouse with a slight lag and grows over links and
// buttons. Only used with a real mouse; touch devices keep their normal behavior.
export default function CustomCursor() {
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reduceMotion = useReducedMotion()
  const dot = useRef(null)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 600, damping: 40, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 600, damping: 40, mass: 0.35 })

  useEffect(() => {
    if (!finePointer) return
    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    // Attributes are set directly on the node so mouse movement never re-renders React.
    const set = (name, value) => dot.current?.setAttribute(`data-${name}`, String(value))

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target instanceof Element ? e.target : null
      const overText = !!target?.closest(TEXT_FIELD)
      set('visible', true)
      set('text', overText)
      set('big', !overText && !!target?.closest(INTERACTIVE))
    }
    const onLeave = () => set('visible', false)
    const onDown = () => set('pressed', true)
    const onUp = () => set('pressed', false)

    window.addEventListener('pointermove', onMove, { passive: true })
    root.addEventListener('mouseleave', onLeave)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    return () => {
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      root.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
    }
  }, [finePointer, x, y])

  if (!finePointer) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: reduceMotion ? x : springX, y: reduceMotion ? y : springY }}
    >
      <div ref={dot} className="custom-cursor" data-visible="false" />
    </motion.div>
  )
}
