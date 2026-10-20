import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero, socials } from '../data/portfolio'
import { brandIcons } from '../lib/icons'
import Rich from './ui/Rich'
import ExternalLink from './ui/ExternalLink'
import Terminal from './Terminal'
import { EASE } from './ui/Reveal'

// Fade-up used for the hero pieces on page load (delays in ms)
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay: delay / 1000 },
})

const rise = (delay) => ({
  initial: { y: '105%' },
  animate: { y: 0 },
  transition: { duration: 1, ease: EASE, delay: delay / 1000 },
})

export default function Hero() {
  const [firstLine, secondLine] = hero.headline
  const firstWords = firstLine.split(' ')

  return (
    <section id="top" className="relative isolate overflow-hidden pb-14 pt-24 sm:pb-20">
      {/* Background: fading grid and two slowly morphing blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="absolute -right-16 top-16 size-40 animate-morph rounded-[42%_58%_55%_45%/48%_42%_58%_52%] bg-pop/70 blur-[2px] sm:right-[4%] sm:top-20 sm:size-64 lg:size-72" />
        <div className="absolute -left-20 bottom-24 hidden size-48 animate-morph rounded-[55%_45%_40%_60%/50%_60%_40%_50%] bg-p-lime/80 blur-[2px] [animation-delay:-6s] lg:block" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 font-mono text-sm text-ink"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {hero.badge}
        </motion.p>

        <h1 className="mt-6 text-[clamp(2.05rem,7.4vw,6.6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-ink">
          <span className="sr-only">{hero.headline.join(' ')}</span>
          <span aria-hidden="true" className="block overflow-hidden">
            {firstWords.map((word, i) => (
              <span key={word + i}>
                {i > 0 && ' '}
                <motion.span className="inline-block" {...rise(100 + i * 90)}>
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
          <span aria-hidden="true" className="mt-2 block overflow-hidden">
            <motion.span
              className="-ml-[0.12em] inline-block rounded-[0.06em] bg-pop px-[0.12em] pb-[0.04em]"
              {...rise(260)}
            >
              {secondLine}
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 grid items-center gap-12 sm:mt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <motion.div {...fadeUp(350)} className="font-mono text-xs leading-relaxed text-muted sm:text-sm">
              {hero.stats.map((line) => {
                // Wrap long lines at the " · " separators rather than mid-phrase
                const parts = line.split(' · ')
                return (
                  <p key={line}>
                    {parts.map((part, i) => (
                      <span key={part}>
                        {i > 0 && ' '}
                        <span className="inline-block">
                          {part}
                          {i < parts.length - 1 && ' ·'}
                        </span>
                      </span>
                    ))}
                  </p>
                )
              })}
            </motion.div>

            <motion.p
              {...fadeUp(420)}
              className="mt-4 max-w-xl text-xl leading-relaxed text-ink sm:text-2xl sm:leading-snug"
            >
              <Rich text={hero.intro} />
            </motion.p>

            <motion.div {...fadeUp(500)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="group/btn inline-flex h-14 items-center gap-2 rounded-full bg-ink px-7 font-display text-base font-bold tracking-tight text-white transition-colors duration-200 hover:bg-black"
              >
                {hero.primaryCta.label}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-ink px-7 font-display text-base font-bold tracking-tight text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
              >
                {hero.secondaryCta.label}
              </a>
            </motion.div>

            <motion.ul {...fadeUp(580)} className="mt-7 flex items-center gap-1" aria-label="Profiles">
              {hero.socials.map((key) => {
                const profile = socials[key]
                const Icon = brandIcons[profile.icon]
                return (
                  <li key={key}>
                    <ExternalLink
                      href={profile.href}
                      aria-label={profile.label}
                      className="inline-flex size-12 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-ink hover:text-cream"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </ExternalLink>
                  </li>
                )
              })}
            </motion.ul>
          </div>

          <motion.div {...fadeUp(600)} className="hidden sm:block">
            <Terminal filename={hero.terminal.filename} session={hero.terminal.session} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
