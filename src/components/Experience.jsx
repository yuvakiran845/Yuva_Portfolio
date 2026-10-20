import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { experience } from '../data/portfolio'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ExternalLink from './ui/ExternalLink'

export default function Experience() {
  return (
    <Section id="experience" label={experience.label} title={experience.title} intro={experience.intro}>
      <ol className="border-b-2 border-ink">
        {experience.items.map((job) => (
          <Reveal
            as="li"
            key={job.company}
            className="grid gap-6 border-t-2 border-ink py-8 sm:py-10 max-lg:gap-4 lg:grid-cols-[320px_1fr] lg:gap-12"
          >
            <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-3 lg:sticky lg:top-28 lg:block lg:self-start">
              <p className="font-display text-[clamp(2rem,6vw,3rem)] font-extrabold leading-none tracking-[-0.05em] text-ink [overflow-wrap:anywhere] max-lg:basis-full">
                {job.company}
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-muted lg:mt-3">{job.period}</p>
              {job.certificate && (
                <ExternalLink
                  href={job.certificate}
                  className="inline-flex items-center gap-1 rounded-full border-2 border-ink px-3 py-1 font-mono text-xs font-bold text-ink transition-colors duration-200 hover:bg-ink hover:text-cream lg:mt-4"
                >
                  View certificate
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only"> for {job.company}</span>
                </ExternalLink>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl font-bold tracking-tight text-ink">{job.role}</h3>
              <p className="mt-1 font-mono text-sm text-muted">{job.meta}</p>
              <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-body">{job.summary}</p>

              {job.bullets?.length > 0 && (
                <ul className="mt-4 max-w-3xl space-y-2">
                  {job.bullets.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-body">
                      <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-ink" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {job.cta && (
                <a
                  href={job.cta.href}
                  className="group/link mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-pop px-4 py-2 font-display text-sm font-bold text-ink transition-[translate,background-color] duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-pop"
                >
                  {job.cta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              )}

              {job.chips?.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills used">
                  {job.chips.map((chip) => (
                    <li key={chip} className="rounded-full border-2 border-ink px-3 py-0.5 font-mono text-xs text-ink">
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
