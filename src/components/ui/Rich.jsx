// Renders text with the inline formatting used in portfolio.js:
//   ==words==  -> lavender highlight block
//   **words**  -> bold
const TOKEN = /(==[^=]+==|\*\*[^*]+\*\*)/g

export default function Rich({ text }) {
  return text.split(TOKEN).map((part, i) => {
    if (part.length > 4 && part.startsWith('==') && part.endsWith('==')) {
      return (
        <mark key={i} className="hl">
          {part.slice(2, -2)}
        </mark>
      )
    }
    if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}
