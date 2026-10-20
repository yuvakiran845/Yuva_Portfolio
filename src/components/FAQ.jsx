import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { faq, socials } from '../data/portfolio'
import Reveal, { EASE } from './ui/Reveal'
import ExternalLink from './ui/ExternalLink'

function FaqItem({ item, open, onToggle }) {
  const id = useId()
  const buttonId = `${id}-button`
  const panelId = `${id}-panel`

  return (
    <li>
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          className="flex w-full items-start justify-between gap-5 border-t-[1.5px] border-ink py-6 text-left text-lg font-semibold text-ink sm:text-xl"
        >
          {item.q}
          <span
            aria-hidden="true"
            className={`font-mono text-2xl leading-none transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          >
            +
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-[56ch] pb-6 leading-relaxed text-body">{item.a}</p>
            {item.links?.length > 0 && (
              <div className="-mt-2 flex flex-wrap gap-x-5 gap-y-1 pb-6">
                {item.links.map((key) => (
                  <ExternalLink
                    key={key}
                    href={socials[key].href}
                    className="inline-flex items-center gap-0.5 font-mono text-sm font-bold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
                  >
                    {socials[key].label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </ExternalLink>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal as="p" className="mb-4 font-mono text-sm text-muted">
            <span aria-hidden="true">{'// '}</span>
            {faq.label}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            id="faq-heading"
            className="text-[clamp(2.6rem,6.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-ink"
          >
            {faq.title}
          </Reveal>
        </div>

        <Reveal as="ul" delay={120} className="border-b-[1.5px] border-ink">
          {faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
