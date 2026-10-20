# Design notes: what was observed in each reference screenshot

Values in `code` were measured from the live reference site's stylesheet, not guessed
from the screenshots, so they are the exact numbers the clone uses.

## Global

- Fonts: headings **Plus Jakarta Sans 800** (the reference's real display font), body **Inter**,
  labels/meta **JetBrains Mono**. Headings use tight tracking (`-0.04em` to `-0.05em`) and `text-wrap: balance`.
- Colors: cream `#f5f3ea`, ink `#1f1f1f`, body text `#3a3a3a`, muted `#5c5a52`, dark sections `#141414`,
  dark cards `#1d1d1d`, lavender `#c9b6ff`, cursor lime `#e0fd72`.
  Pastels: lilac `#e4dcff`, lime `#e6f99d`, sky `#cfe2ff`, pink `#ffd9de`, mint `#cdf3dc`, butter `#f3ea9f`.
- Content column `max-width: 72rem` with 20px / 32px side padding; navbar row is wider (`80rem`).
- Highlight block: lavender background, radius `.12em`, padding `0 .12em .04em`, dark text even on dark sections.
- Stickers: mono 12px bold, 2px ink border, radius 8px, `2px 2px 0` ink shadow, rotated 2–8°.
- Neo-brutalist cards: 2px ink border, radius 22px, `4px 4px 0` ink shadow that grows to `7px 7px`
  while the card lifts 3px up-left on hover.
- Section rhythm: "// label" (mono 14px, muted) → heading `clamp(2.1rem, 6.5vw, 4.5rem)`, line-height 1.1 →
  optional mono 15px intro. Sections pad 112px top/bottom on desktop.
- Scroll progress: 3px lavender bar fixed to the top.
- Custom cursor: 16px lime dot with a 1.5px ink border; grows to 54px (semi-transparent) over links and
  buttons, shrinks on press, hides over text fields. Mouse devices only.

## Screenshot 1 – Hero (top)

- Fixed 72px navbar, transparent at the top. Logo: 36×32 ink rounded square with lavender `>_`, then the
  short name in bold mono. Centered links (15px), black pill "Resume ↓" (44px tall) on the right.
- Faint 56px square grid behind the hero, fading out toward the bottom. Lavender blob top-right
  (288px), lime blob bottom-left (192px), both organic rounded shapes.
- "Available for work" pill: 2px ink border, mono 14px, green dot.
- Headline: uppercase, `clamp(2.6rem, 7.4vw, 6.6rem)`, line-height .95; line 2 sits on a lavender block.
- Below, two columns (1.1fr / 1fr): two mono stat lines (muted), 24px intro with the name in semibold;
  terminal card on the right.

## Screenshot 2 – Hero (bottom) + marquee

- Buttons: black filled pill (56px tall) with arrow, outlined pill; then a row of 48px round icon buttons.
- Terminal: max 448px wide, rotated -2°, second ink layer offset 8px behind it, `#1b1b1b` body, red/yellow/green
  dots, file name top-right, 13px mono with 28px lines, lavender commands, blinking lavender block cursor.
- Marquee: full-bleed black band rotated -1.5°, bold uppercase mono 18px in cream, lavender 4-point stars,
  45s loop.
- Once scrolled, the navbar turns cream (95%) with a blur and a hairline bottom border.

## Screenshots 3–4 – About

- Two columns (0.9fr / 1.1fr). Photo card max 400px, 4:5, 3px ink border, radius 28px, a solid ink block
  offset 12px behind it, slight zoom on hover. Three stickers: top-right (sky), left (mint), bottom-right (pink).
  The photo column stays sticky while the text scrolls.
- Heading `clamp(2.6rem, 6vw, 4.25rem)`, line-height 1.12, last words highlighted.
- 18px paragraphs, then outlined chips (2px border, 14px). Active nav item gets a lavender pill.
- "// education": rows with 2px ink bottom borders; display 18px bold title, mono 12px school;
  date right-aligned in mono with a lavender bold badge.

## Screenshots 5–8 – Projects (dark)

- `#141414` section, white heading with a dark-on-lavender highlight, mono intro in grey.
- Cards: `#1d1d1d`, radius 28px, 1px white/10 border, an accent glow top-right and a soft accent glow above
  the card, a huge outlined number in the bottom-right corner.
- Cards are sticky at `96px + 24px × index`, so each new card slides over the previous one and the earlier
  cards' top edges stay visible (the clone also shrinks the cards underneath slightly).
- Left: mono "01 / 04" + accent category pill, title `clamp(1.75rem, 4.2vw, 3.25rem)`, 17px description,
  mono tech tags (1px white/15 border, radius 6px), accent-filled "Live" pill + outlined pill.
- Right: browser mockup `#2a2a2a` with grey traffic lights (they light up on hover), dark URL bar in mono,
  the screenshot, a light sweep and zoom on hover, accent sticker overlapping the top-right corner.
- Screenshot 8 ("more projects" grid) is not used because there are three main projects.

## Screenshots 9–10 – Experience

- Rows separated by 2px ink lines. Left column 320px (sticky): company name `clamp(2rem, 6vw, 3rem)`,
  uppercase mono dates, outlined mono "View certificate ↗" pill.
- Right: role 24px bold, mono meta, 17px summary, small ink-dot bullets, lavender CTA pill with a 2px border,
  then mono outline chips.

## Screenshot 11 – Skills (bento)

- 4-column grid; wide cards span 2 columns. Pastel cards with 2px border and hard shadow, 48px ink icon square
  with a lavender line icon, 20px extra-bold title, chips with a 1.5px ink/70 border on white/50.

## Screenshot 12 – What I do

- 5 equal pastel cards (2 per row on phones), no hard shadow, lime icons, lift on hover.

## Screenshot 13 – Certifications

- Butter-yellow section. Group rows with 2px borders: big issuer name + mono "N CREDENTIALS" on the left,
  list of title + mono date with right-aligned outlined "View certificate ↗" pills that invert on hover.

## Screenshot 14 – FAQ

- Two columns (0.8fr / 1.2fr). Accordion rows separated by 1.5px ink lines, 18–20px semibold questions,
  mono "+" that rotates into "×", first item open, height animates.

## Screenshots 15–16 – Contact + footer

- Dark section. Heading `clamp(2.4rem, 9vw, 6.5rem)`, line-height .98; last word highlighted.
- Pill row (56px tall): lavender "Email me →", then outlined white pills; email address in mono below.
- Form card `#1d1d1d`, radius 28px: mono labels, dark inputs, info note, white "Send message" pill.
- Footer: mono 14px, hairline divider, logo + copyright + "Built with…", two link columns with uppercase mono headers.

## Where the clone differs from the written spec, and why

| Spec said | Used | Reason |
| --- | --- | --- |
| Bricolage Grotesque / Inter Tight | Plus Jakarta Sans 800 | It is the font the reference actually loads |
| Ink `#161616`, lavender `#c9b8fb`, pastels `#e3dbff`… | Measured values above | Exact values from the reference stylesheet |
| Card shadow 6px → 9px | 4px → 7px with a 3px lift | Matches the reference |
| Chip border 1.5px, grid ~40px | 2px, 56px | Matches the reference |
| Terminal ~-3°, marquee ~-2° | -2°, -1.5° | Matches the reference |
| Screenshots 16:10 | 16:9 | Your screenshots are 16:9; 16:10 would crop the page edges |
