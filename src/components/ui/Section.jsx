import Reveal from './Reveal'
import Rich from './Rich'

// Shared section shell: "// label", big heading, optional mono intro, then content.
export default function Section({
  id,
  label,
  title,
  intro,
  dark = false,
  tightTop = false,
  className = '',
  children,
}) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative ${tightTop ? 'scroll-mt-16 pt-8 sm:pt-12' : 'pt-14 sm:pt-28'} pb-14 sm:pb-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-10 max-w-3xl sm:mb-14">
          {label && (
            <Reveal as="p" className={`mb-4 font-mono text-sm ${dark ? 'text-zinc-400' : 'text-muted'}`}>
              <span aria-hidden="true">{'// '}</span>
              {label}
            </Reveal>
          )}
          <Reveal
            as="h2"
            delay={80}
            id={headingId}
            className={`text-[clamp(2.1rem,6.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em] ${dark ? 'text-white' : 'text-ink'}`}
          >
            <Rich text={title} />
          </Reveal>
          {intro && (
            <Reveal
              as="p"
              delay={160}
              className={`mt-5 max-w-2xl font-mono text-[15px] leading-relaxed ${dark ? 'text-zinc-400' : 'text-muted'}`}
            >
              {intro}
            </Reveal>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
