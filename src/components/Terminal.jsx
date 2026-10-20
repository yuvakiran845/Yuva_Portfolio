import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Turns [{ command, output: [] }] into display lines, with a blank line between blocks.
function toLines(session) {
  return session.flatMap((block, i) => [
    ...(i > 0 ? [{ kind: 'blank' }] : []),
    { kind: 'command', text: block.command },
    ...block.output.map((text) => ({ kind: 'output', text })),
  ])
}

function Cursor() {
  return <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-pop" />
}

function Line({ line, typed, showCursor }) {
  if (line.kind === 'blank') return <div>&nbsp;</div>
  if (line.kind === 'output') return <div className="whitespace-pre text-cream/90">{line.text}</div>
  return (
    <div className="whitespace-pre">
      <span className="text-zinc-500">$ </span>
      <span className="text-pop">{typed ?? line.text}</span>
      {showCursor && <Cursor />}
    </div>
  )
}

// Dark, slightly rotated terminal card that types out a short shell session.
export default function Terminal({ filename, session }) {
  const lines = useMemo(() => toLines(session), [session])
  const reduceMotion = useReducedMotion()
  const [pos, setPos] = useState({ line: 0, char: 0 })
  const progress = reduceMotion ? { line: lines.length, char: 0 } : pos
  const done = progress.line >= lines.length

  useEffect(() => {
    if (reduceMotion || done) return
    const current = lines[pos.line]
    let delay
    let next
    if (current.kind === 'command' && pos.char < current.text.length) {
      delay = pos.line === 0 && pos.char === 0 ? 900 : 45 + Math.random() * 55
      next = { line: pos.line, char: pos.char + 1 }
    } else {
      delay = current.kind === 'command' ? 380 : current.kind === 'blank' ? 80 : 160
      next = { line: pos.line + 1, char: 0 }
    }
    const timer = setTimeout(() => setPos(next), delay)
    return () => clearTimeout(timer)
  }, [pos, lines, reduceMotion, done])

  const transcript = session.map((b) => `$ ${b.command}: ${b.output.join(', ')}`).join('. ')

  return (
    <div className="relative mx-auto w-full max-w-md rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
      <div aria-hidden="true" className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-ink" />
      <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-[#1b1b1b]">
        <div aria-hidden="true" className="flex items-center gap-2 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-auto font-mono text-xs text-zinc-400">{filename}</span>
        </div>

        <p className="sr-only">Terminal session. {transcript}</p>

        {/* Ghost copy reserves the final height so the card never jumps while typing */}
        <div aria-hidden="true" className="grid overflow-x-auto px-5 pb-6 pt-1 font-mono text-[13px] leading-7">
          <div className="invisible [grid-area:1/1]">
            {lines.map((line, i) => (
              <Line key={i} line={line} />
            ))}
            <div>
              <span>$</span>
              <Cursor />
            </div>
          </div>
          <div className="[grid-area:1/1]">
            {lines.slice(0, Math.min(progress.line + 1, lines.length)).map((line, i) => {
              const isCurrent = i === progress.line
              if (isCurrent && line.kind !== 'command') return null
              return (
                <Line
                  key={i}
                  line={line}
                  typed={isCurrent ? line.text.slice(0, progress.char) : undefined}
                  showCursor={isCurrent}
                />
              )
            })}
            {done && (
              <div>
                <span className="text-zinc-500">$</span>
                <Cursor />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
