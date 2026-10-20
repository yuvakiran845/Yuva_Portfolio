import { footer, nav, site, socials } from '../data/portfolio'
import ExternalLink from './ui/ExternalLink'

export default function Footer() {
  return (
    <footer className="bg-night font-mono text-sm text-zinc-400">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-2 md:items-start">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-8 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-pop"
              >
                &gt;_
              </span>
              <span className="font-bold text-white">{site.shortName}</span>
              <span className="sr-only">, back to top</span>
            </a>
            <p className="mt-4">
              © {new Date().getFullYear()} {site.name}
            </p>
            <p className="mt-1">{footer.builtWith}</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Footer">
              <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-400">Sections</h2>
              <ul className="space-y-2">
                {nav.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-zinc-300 transition-colors hover:text-pop">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-400">Elsewhere</h2>
              <ul className="space-y-2">
                {footer.socials.map((key) => (
                  <li key={key}>
                    <ExternalLink href={socials[key].href} className="text-zinc-300 transition-colors hover:text-pop">
                      {socials[key].label} <span aria-hidden="true">↗</span>
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
