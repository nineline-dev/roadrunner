import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const checkedFiles = [
  'index.html',
  'public/llms.txt',
  'src/App.jsx',
  'src/components/Services.jsx',
  'src/components/Testimonials.jsx',
]

test('site content does not advertise discontinued services', () => {
  const content = checkedFiles
    .map((file) => fs.readFileSync(path.join(root.pathname, file), 'utf8'))
    .join('\n')

  assert.doesNotMatch(content, /headshot/i)
  assert.doesNotMatch(content, /logo redesign/i)
  assert.doesNotMatch(content, /Logo & Brand Design/)
})

test('site publishes non-headshot testimonials only', () => {
  const content = checkedFiles
    .map((file) => fs.readFileSync(path.join(root.pathname, file), 'utf8'))
    .join('\n')

  assert.match(content, /aggregateRating/)
  assert.match(content, /"review"\s*:/)
  assert.match(content, /Selected Testimonials/)
  assert.match(content, /Testimonials/)
  assert.match(content, /Mikalyn A\.|Megan B\.|Whitney|Anna V\.|Brooke W\.|Tori C\.|Luci L\./)
  assert.match(content, /under contract in only 4 days/)
  assert.match(content, /critical piece of my business/)
  assert.match(content, /quality and craftsmanship/)
  assert.match(content, /story through video/)
  assert.match(content, /videography skills/)
  assert.match(content, /turn around time was fantastic/)
  assert.match(content, /quality photos and videos/)
  assert.doesNotMatch(content, /Anna van Ham|Mikalyn Almberg|Megan Behrens|Brooke Watton|Tori Canedy|Luci Lien/)
  assert.doesNotMatch(content, /Sarah M\.|James R\.|Diana K\./)
  assert.doesNotMatch(content, /Colin delivered absolutely stunning photos/)
  assert.doesNotMatch(content, /video tour felt like something out of a luxury magazine/)
  assert.doesNotMatch(content, /Fast, professional, and the results speak for themselves/)
  assert.doesNotMatch(content, /Mark T\.|Priya S\./)
  assert.doesNotMatch(content, /The headshot session was so relaxed/)
  assert.doesNotMatch(content, /whole team's headshots and the logo redesign/)
})

test('app supports direct section links after React renders', () => {
  const source = fs.readFileSync(path.join(root.pathname, 'src/App.jsx'), 'utf8')

  assert.match(source, /window\.location\.hash\.slice\(1\)/)
  assert.match(source, /requestAnimationFrame/)
  assert.match(source, /scrollIntoView/)
  assert.match(source, /hashchange/)
})

test('critical image hints do not force unnecessary downloads', () => {
  const html = fs.readFileSync(path.join(root.pathname, 'index.html'), 'utf8')

  assert.match(html, /rel="icon" href="\/favicon-32x32\.png"/)
  assert.match(html, /rel="apple-touch-icon" href="\/apple-touch-icon\.png"/)
  assert.match(html, /rel="preload" as="image" href="\/images\/hero\.webp"/)
  assert.doesNotMatch(html, /rel="preload" as="image" href="\/images\/hero\.jpg"/)
})
