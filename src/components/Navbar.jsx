import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Menu, X } from 'lucide-react'
import { nav, site } from '../data/portfolio'
import useScrollSpy from '../hooks/useScrollSpy'
import { EASE } from './ui/Reveal'

const sectionIds = nav.map((link) => link.id)

function Logo({ onClick }) {
  return (
    <a href="#top" onClick={onClick} className="group flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-8 w-9 items-center justify-center rounded-lg bg-ink font-mono text-sm font-bold text-pop transition-transform duration-300 group-hover:-rotate-6"
      >
        &gt;_
      </span>
      <span className="font-mono text-base font-bold text-ink">{site.shortName}</span>
      <span className="sr-only">, back to top</span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While the mobile menu is open: lock page scroll, close on Escape or on resize to desktop.
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = (e) => e.matches && setOpen(false)
    root.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      root.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  const close = () => setOpen(false)
  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          solid ? 'bg-cream/95 shadow-[0_1px_0_rgb(31_31_31/0.1)] backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo onClick={close} />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative isolate rounded-full px-3.5 py-2 text-[15px] transition-colors ${
                    isActive ? 'font-medium text-ink' : 'text-ink/80 hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full bg-pop"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.resume}
              download={site.resumeFileName}
              className="hidden h-11 items-center gap-1 rounded-full bg-ink px-5 font-display text-sm font-bold text-white transition-colors hover:bg-black sm:inline-flex"
            >
              Resume
              <ArrowDown className="size-4" strokeWidth={2.5} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-white lg:hidden"
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu (kept outside the header: its backdrop blur would trap position:fixed) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-cream lg:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 pb-10 pt-4 sm:px-8">
              {nav.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={close}
                  aria-current={active === link.id ? 'true' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE, delay: 0.04 * i }}
                  className="flex items-center justify-between border-b-[1.5px] border-ink/15 py-4 font-display text-4xl font-extrabold tracking-tight text-ink"
                >
                  <span className={active === link.id ? 'hl' : undefined}>{link.label}</span>
                  <span aria-hidden="true" className="font-mono text-xs font-normal text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.a>
              ))}
              <a
                href={site.resume}
                download={site.resumeFileName}
                className="mt-8 inline-flex h-12 w-fit items-center gap-1.5 rounded-full bg-ink px-6 font-display font-bold text-white"
              >
                Resume
                <ArrowDown className="size-4" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
