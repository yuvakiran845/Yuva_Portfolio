import { Sparkle } from 'lucide-react'
import { marquee } from '../data/portfolio'

// Tilted black band with the tech stack scrolling forever (pauses on hover).
export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="-mx-[5%] w-[110%] -rotate-[1.5deg] bg-ink py-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Two identical copies: the band shifts by -50% and loops seamlessly */}
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-label={copy === 0 ? 'Tech stack' : undefined}
              aria-hidden={copy === 1 ? 'true' : undefined}
              className="flex shrink-0 items-center"
            >
              {marquee.map((item) => (
                <li key={item} className="flex items-center whitespace-nowrap">
                  <span className="px-7 font-mono text-lg font-bold uppercase tracking-wide text-cream">
                    {item}
                  </span>
                  <Sparkle className="size-5 fill-pop text-pop" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
