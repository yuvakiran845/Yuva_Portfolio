import { motion } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1]

// Fades an element up (with a slight blur) the first time it scrolls into view.
// `delay` is in milliseconds so siblings can be staggered.
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay: delay / 1000 }}
      {...rest}
    >
      {children}
    </Component>
  )
}
