import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

const vendorFiles = [
  'vendor/gcs-analytics/dist/index.js',
  'vendor/gcs-analytics/dist/index.mjs',
]

const randomIdBlock = (source) => {
  const start = source.indexOf('var randomId = () => {')
  const end = source.indexOf('var readCookie =', start)
  assert.notEqual(start, -1)
  assert.notEqual(end, -1)
  return source.slice(start, end)
}

test('vendored analytics randomId prefers browser crypto before random fallback', () => {
  for (const file of vendorFiles) {
    const block = randomIdBlock(fs.readFileSync(file, 'utf8'))

    assert.match(block, /randomUUID/)
    assert.match(block, /Math\.random/)
    assert.ok(block.indexOf('randomUUID') < block.indexOf('Math.random'))
  }
})
