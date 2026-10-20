import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/portfolio'
import { accents } from '../lib/colors'
import useMediaQuery from '../hooks/useMediaQuery'
import Section from './ui/Section'
import ExternalLink from './ui/ExternalLink'

const pad = (n) => String(n).padStart(2, '0')

// Browser window with the screenshot; tilts slightly toward the mouse.
function BrowserMockup({ project, accent, tilt }) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 150, damping: 18 })
  const springY = useSpring(rotateY, { stiffness: 150, damping: 18 })
  const host = project.live.replace(/^https?:\/\//, '').replace(/\/$/, '')

  const onMouseMove = (e) => {
    if (!tilt) return
    const r = e.currentTarget.getBoundingClientRect()
    rotateY.set(((e.clientX - r.left) / r.width - 0.5) * 8)
    rotateX.set(-((e.clientY - r.top) / r.height - 0.5) * 8)
  }
  const onMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div className="relative min-w-0 [perspective:1200px]" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <motion.div
        style={{ rotateX: springX, rotateY: springY }}
        className="overflow-hidden rounded-2xl border border-white/15 bg-[#2a2a2a] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)]"
      >
        <div aria-hidden="true" className="flex items-center gap-2 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[#fd5d5c]" />
          <span className="size-2.5 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[#fac900]" />
          <span className="size-2.5 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[#34c75a]" />
          <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-black/30 px-3 py-1 font-mono text-[11px] text-zinc-400">
            {host}
          </span>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full bg-white object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.07]"
          />
          {/* light sweep on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-[linear-gradient(115deg,transparent_35%,rgb(255_255_255/0.14)_50%,transparent_65%)] transition-transform duration-[900ms] group-hover:translate-x-[120%]"
          />
        </div>
      </motion.div>
      <span
        aria-hidden="true"
        className="sticker absolute -right-2 -top-4 rotate-[6deg] group-hover:rotate-[2deg] sm:-right-5"
        style={{ background: accent.color }}
      >
        {project.sticker}
      </span>
    </div>
  )
}

function ProjectCard({ project, index, total, progress, stacking, tilt }) {
  const accent = accents[project.accent] ?? accents.lilac
  // Cards further down the stack shrink a little as later cards slide over them.
  const targetScale = 1 - (total - 1 - index) * 0.04
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])
  const number = pad(index + 1)

  return (
    <motion.article
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      style={{
        '--stack-top': `${96 + index * 24}px`,
        '--glow': accent.glow,
        '--accent': accent.color,
        scale: stacking ? scale : 1,
        transformOrigin: 'top center',
      }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-night-2 p-5 shadow-[0_-20px_60px_-20px_var(--glow)] sm:p-10 lg:sticky lg:top-[var(--stack-top)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full blur-3xl"
        style={{ background: accent.glow }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-4 select-none font-display text-[11rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255/0.07)] sm:text-[15rem]"
      >
        {number}
      </div>

      <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-zinc-300">
            <span>
              {number} / {pad(total)}
            </span>
            <span className="rounded-full px-3 py-0.5 font-bold text-ink" style={{ background: accent.color }}>
              {project.category}
            </span>
          </div>

          <h3
            id={`${project.id}-title`}
            className="mt-5 text-[clamp(1.75rem,4.2vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white"
          >
            {project.title}
          </h3>
          <p className="mt-4 text-[17px] leading-relaxed text-zinc-300">{project.description}</p>

          {project.highlights?.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-zinc-400">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] size-1.5 shrink-0 rounded-full"
                    style={{ background: accent.color }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs text-zinc-200 transition-colors duration-300 group-hover:border-[color-mix(in_srgb,var(--accent)_60%,#3a3a3a)]"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
            <ExternalLink
              href={project.live}
              className="group/btn inline-flex h-10 items-center gap-1.5 rounded-full px-4 font-display text-[13px] font-bold text-ink transition-[translate] duration-200 hover:-translate-y-0.5 sm:h-12 sm:gap-2 sm:px-6 sm:text-[15px]"
              style={{ background: accent.color }}
            >
              Live
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              />
              <span className="sr-only"> site of {project.title}</span>
            </ExternalLink>
            {project.github && (
              <ExternalLink
                href={project.github}
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/25 px-4 font-display text-[13px] font-bold text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-ink sm:h-12 sm:gap-2 sm:px-6 sm:text-[15px]"
              >
                <FaGithub className="size-4" aria-hidden="true" />
                GitHub
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> repository of {project.title}</span>
              </ExternalLink>
            )}
          </div>
        </div>

        <BrowserMockup project={project} accent={accent} tilt={tilt} />
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const listRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start start', 'end end'] })
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const reduceMotion = useReducedMotion()
  const total = projects.items.length

  return (
    <Section
      id="projects"
      dark
      label={projects.label}
      title={projects.title}
      intro={projects.intro}
      className="bg-night text-white"
    >
      <div ref={listRef} className="space-y-8">
        {projects.items.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={total}
            progress={scrollYProgress}
            stacking={isDesktop && !reduceMotion}
            tilt={isDesktop && !reduceMotion}
          />
        ))}
      </div>
    </Section>
  )
}
