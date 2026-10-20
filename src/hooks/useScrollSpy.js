import { useEffect, useState } from 'react'

// Returns the id of the section the reader is currently in: the last section
// whose top has passed a line `offsetRatio` of the way down the viewport.
// Sections between nav entries (e.g. "what I do") count as the entry above them.
export default function useScrollSpy(ids, offsetRatio = 0.35) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * offsetRatio
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) current = ids[ids.length - 1]
      setActive(current)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [ids, offsetRatio])

  return active
}
