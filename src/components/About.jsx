import { about } from '../data/portfolio'
import { pastelBg } from '../lib/colors'
import Reveal from './ui/Reveal'
import Rich from './ui/Rich'

// Where each of the three stickers sits around the photo
const stickerSpots = [
  '-right-1 top-2 rotate-[8deg] sm:-right-6',
  '-left-1 bottom-24 rotate-[-6deg] sm:-left-8',
  'bottom-1 right-6 rotate-[4deg]',
]

function Photo() {
  const { photo, stickers } = about
  return (
    <div className="relative mx-auto w-full max-w-[260px] px-4 py-6 sm:max-w-[400px] sm:px-0">
      <div aria-hidden="true" className="absolute inset-x-4 inset-y-6 translate-x-3 translate-y-3 rounded-[28px] bg-ink sm:inset-x-0" />
      <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border-[3px] border-ink bg-p-lilac">
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          decoding="async"
          className="size-full origin-[0%_28%] scale-[1.18] object-cover object-[50%_30%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.23]"
        />
      </div>
      {stickers.map((sticker, i) => (
        <span
          key={sticker.label}
          aria-hidden="true"
          className={`sticker absolute ${stickerSpots[i % stickerSpots.length]} ${pastelBg[sticker.color]}`}
        >
          {sticker.label}
        </span>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="pb-14 pt-10 sm:pb-28 sm:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28">
          <Photo />
        </Reveal>

        <div>
          <Reveal as="p" className="mb-4 font-mono text-sm text-muted">
            <span aria-hidden="true">{'// '}</span>
            {about.label}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            id="about-heading"
            className="text-[clamp(2.6rem,6vw,4.25rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink"
          >
            <Rich text={about.title} />
          </Reveal>

          <Reveal delay={160} className="mt-7 space-y-4 text-lg leading-relaxed text-body">
            {about.paragraphs.map((text) => (
              <p key={text}>
                <Rich text={text} />
              </p>
            ))}
          </Reveal>

          <Reveal as="ul" delay={220} className="mt-7 flex flex-wrap gap-2" aria-label="Focus areas">
            {about.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border-2 border-ink px-4 py-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-cream"
              >
                {chip}
              </li>
            ))}
          </Reveal>

          <Reveal delay={280} className="mt-10">
            <h3 className="mb-1 font-mono text-sm font-normal text-muted">
              <span aria-hidden="true">{'// '}</span>
              {about.educationLabel}
            </h3>
            <ul>
              {about.education.map((row) => (
                <li
                  key={row.degree}
                  className="grid gap-1 border-b-2 border-ink py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <div>
                    <p className="font-display text-lg font-bold tracking-tight text-ink">{row.degree}</p>
                    <p className="font-mono text-xs text-muted">{row.school}</p>
                  </div>
                  <p className="font-mono text-xs text-ink sm:text-right">
                    {row.period}
                    <span className="ml-2 rounded bg-pop px-1.5 py-0.5 font-bold">{row.badge}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
