import { services } from '../data/portfolio'
import { pastelBg } from '../lib/colors'
import { featureIcons } from '../lib/icons'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

export default function Services() {
  const last = services.items.length - 1
  // With an odd number of cards, the last one spans both phone columns.
  const oddCount = services.items.length % 2 === 1

  return (
    <Section id="services" tightTop label={services.label} title={services.title} intro={services.intro}>
      <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
        {services.items.map((item, i) => {
          const Icon = featureIcons[item.icon]
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 70}
              className={`group flex flex-col rounded-[22px] border-2 border-ink p-5 transition-[translate] duration-300 hover:-translate-y-1 sm:p-6 ${pastelBg[item.color]} ${
                oddCount && i === last ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-ink text-cursor transition-transform duration-300 group-hover:-rotate-6 sm:size-12">
                {Icon && <Icon className="size-5" aria-hidden="true" />}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-tight tracking-tight text-ink sm:mt-8 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body sm:text-[15px]">{item.text}</p>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
