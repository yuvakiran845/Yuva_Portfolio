import { ArrowUpRight } from 'lucide-react'
import { certifications } from '../data/portfolio'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ExternalLink from './ui/ExternalLink'

const countLabel = (count, unit) => `${count} ${unit}${count === 1 ? '' : 's'}`

export default function Certifications() {
  return (
    <Section
      id="certifications"
      label={certifications.label}
      title={certifications.title}
      intro={certifications.intro}
      className="bg-p-butter"
    >
      <div className="border-b-2 border-ink">
        {certifications.groups.map((group) => (
          <Reveal
            key={group.issuer}
            className="grid gap-4 border-t-2 border-ink py-6 sm:py-8 md:grid-cols-[320px_1fr] md:gap-10"
          >
            <div className="min-w-0">
              <h3 className="font-display text-[clamp(1.75rem,5vw,2.75rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-ink [overflow-wrap:anywhere]">
                {group.issuer}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink/70">
                {countLabel(group.items.length, group.unit)}
              </p>
            </div>

            <ul className="space-y-4">
              {group.items.map((item) => (
                <li key={item.title} className="flex items-start justify-between gap-x-4 gap-y-1">
                  <div className="min-w-0">
                    <p className="text-lg font-bold tracking-tight text-ink sm:text-xl">
                      <span className="font-display">{item.title}</span>
                      {item.date && (
                        <span className="ml-3 whitespace-nowrap font-mono text-xs font-normal text-ink/70">
                          {item.date}
                        </span>
                      )}
                    </p>
                    {item.note && <p className="mt-1 font-mono text-xs text-ink/70">{item.note}</p>}
                  </div>
                  {item.link && (
                    <ExternalLink
                      href={item.link.href}
                      className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border-2 border-ink px-2.5 py-0.5 font-mono text-xs font-bold text-ink transition-colors duration-200 hover:bg-ink hover:text-p-butter sm:px-3 sm:py-1"
                    >
                      <span className="max-sm:sr-only">{item.link.label}</span>
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      <span className="sr-only">: {item.title}</span>
                    </ExternalLink>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
