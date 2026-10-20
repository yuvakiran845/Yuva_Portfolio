import { skills } from '../data/portfolio'
import { pastelBg } from '../lib/colors'
import { featureIcons } from '../lib/icons'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

const desktopSpan = { 1: '', 2: 'lg:col-span-2', 3: 'lg:col-span-3', 4: 'lg:col-span-4' }

// On phones (2 columns) cards with longer chip lists take the full row.
const spanClasses = (group) =>
  `${group.items.length > 3 ? 'col-span-2 sm:col-span-1' : ''} ${desktopSpan[group.span] ?? ''}`

export default function Skills() {
  return (
    <Section id="skills" tightTop label={skills.label} title={skills.title} intro={skills.intro}>
      <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {skills.groups.map((group, i) => {
          const Icon = featureIcons[group.icon]
          return (
            <Reveal
              as="li"
              key={group.title}
              delay={(i % 4) * 70}
              className={`group card-hard rounded-[22px] border-2 border-ink p-5 sm:p-6 ${pastelBg[group.color]} ${spanClasses(group)}`}
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-ink text-pop transition-transform duration-300 group-hover:-rotate-6 sm:size-12">
                {Icon && <Icon className="size-5" aria-hidden="true" />}
              </span>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-ink sm:mt-6">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border-[1.5px] border-ink/70 bg-white/50 px-2.5 py-0.5 text-[13px] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
