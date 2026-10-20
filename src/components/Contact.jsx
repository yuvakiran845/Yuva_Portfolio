import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, Copy, Info, Loader2, Send } from 'lucide-react'
import { contact, site, socials } from '../data/portfolio'
import { brandIcons } from '../lib/icons'
import Reveal from './ui/Reveal'
import Rich from './ui/Rich'
import ExternalLink from './ui/ExternalLink'

const pill =
  'inline-flex h-12 items-center gap-2 rounded-full px-5 font-display text-[15px] font-bold tracking-tight duration-200 sm:h-14 sm:px-6 sm:text-base'
const darkOutline = `${pill} border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-ink`

const field =
  'mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-zinc-500 transition-colors focus:border-pop focus:outline-none focus:ring-2 focus:ring-pop/30'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for browsers without the async clipboard API
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    area.remove()
    return ok
  }
}

// Sends the message to site.email through FormSubmit (see contact.form.endpoint in portfolio.js)
async function sendMessage({ name, email, message }) {
  const { form } = contact
  const res = await fetch(`${form.endpoint}${site.email}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `${form.subject}: ${name}`,
      _replyto: email,
      _template: 'table',
    }),
  })
  const result = await res.json().catch(() => ({}))
  if (!res.ok || String(result.success) !== 'true') {
    throw new Error(result.message || `Request failed (${res.status})`)
  }
}

function MessageForm() {
  const { form } = contact
  // idle | sending | sent | error
  const [state, setState] = useState({ kind: 'idle', detail: '' })
  const sending = state.kind === 'sending'

  const onSubmit = async (e) => {
    e.preventDefault()
    const formEl = e.currentTarget
    const data = new FormData(formEl)
    const value = (key) => String(data.get(key) ?? '').trim()

    // Hidden field that only spam bots fill in: pretend it worked and drop the message
    if (value('_honey')) {
      formEl.reset()
      setState({ kind: 'sent', detail: '' })
      return
    }

    setState({ kind: 'sending', detail: '' })
    try {
      await sendMessage({ name: value('name'), email: value('email'), message: value('message') })
      formEl.reset()
      setState({ kind: 'sent', detail: '' })
    } catch (err) {
      setState({ kind: 'error', detail: err.message })
    }
  }

  return (
    <Reveal delay={120} className="mt-12 max-w-3xl">
      <form onSubmit={onSubmit} className="rounded-[28px] border border-white/10 bg-night-2 p-6 sm:p-8">
        <p className="font-mono text-sm text-zinc-400">
          <span aria-hidden="true">{'// '}</span>
          {form.label}
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="block font-mono text-xs text-zinc-300">
            name
            <input name="name" type="text" required autoComplete="name" placeholder={form.namePlaceholder} className={`${field} font-sans`} />
          </label>
          <label className="block font-mono text-xs text-zinc-300">
            email
            <input name="email" type="email" required autoComplete="email" placeholder={form.emailPlaceholder} className={`${field} font-sans`} />
          </label>
        </div>
        <label className="mt-5 block font-mono text-xs text-zinc-300">
          message
          <textarea name="message" required rows={4} placeholder={form.messagePlaceholder} className={`${field} resize-y font-sans`} />
        </label>
        {/* Spam trap: hidden from people, filled in by bots */}
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-zinc-400">
            <Info className="mt-px size-3.5 shrink-0" aria-hidden="true" />
            {form.note}
          </p>
          <button
            type="submit"
            disabled={sending}
            className="group/btn inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 font-display text-sm font-bold text-ink transition-colors duration-200 hover:bg-pop disabled:cursor-wait disabled:opacity-70"
          >
            {sending ? form.sending : form.submit}
            {sending ? (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send
                className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
        <div role="status" aria-live="polite" className="text-sm leading-relaxed">
          {state.kind === 'sent' && (
            <p className="mt-5 flex items-center gap-2 font-medium text-emerald-400">
              <Check className="size-4 shrink-0" aria-hidden="true" />
              {form.success}
            </p>
          )}
          {state.kind === 'error' && (
            <div className="mt-5">
              <p className="text-rose-300">
                {form.error}{' '}
                <a href={`mailto:${site.email}`} className="font-medium text-white underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
              {state.detail && <p className="mt-1 font-mono text-xs text-zinc-400">{state.detail}</p>}
            </div>
          )}
        </div>
      </form>
    </Reveal>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  const onCopy = async () => {
    if (!(await copyText(site.email))) return
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-night py-16 text-white sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal as="p" className="mb-4 font-mono text-sm text-zinc-400">
          <span aria-hidden="true">{'// '}</span>
          {contact.label}
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          id="contact-heading"
          className="text-[clamp(2.4rem,9vw,6.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white"
        >
          <Rich text={contact.title} />
        </Reveal>
        <Reveal as="p" delay={160} className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
          {contact.text}
        </Reveal>

        <Reveal delay={220} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className={`group/btn ${pill} bg-pop text-ink transition-[translate] hover:-translate-y-0.5`}
          >
            Email me
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <button type="button" onClick={onCopy} className={darkOutline}>
            {copied ? (
              <Check className="size-4 text-emerald-400" aria-hidden="true" />
            ) : (
              <Copy className="size-4" aria-hidden="true" />
            )}
            {copied ? 'Copied!' : 'Copy email'}
          </button>
          {contact.socials.map((key) => {
            const profile = socials[key]
            const Icon = brandIcons[profile.icon]
            return (
              <ExternalLink key={key} href={profile.href} className={darkOutline}>
                <Icon className="size-4" aria-hidden="true" />
                {profile.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ExternalLink>
            )
          })}
        </Reveal>

        <p className="mt-6 font-mono text-sm text-zinc-400">{site.email}</p>

        <MessageForm />
      </div>

      {/* "Copied" toast */}
      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
        <AnimatePresence>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cursor px-4 py-2 font-mono text-sm font-bold text-ink shadow-[3px_3px_0_0_#1f1f1f]"
            >
              <Check className="size-4" aria-hidden="true" />
              Email copied to clipboard
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
