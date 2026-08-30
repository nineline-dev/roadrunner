import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'))
const matchesEmbed = (condition) =>
  condition?.type === 'query' && condition.key === 'embed' && condition.value === '9line'
const headerValue = (rule, key) => rule.headers.find((header) => header.key === key)?.value

test('only the owned 9Line embed mode relaxes Roadrunner framing', () => {
  const standalone = config.headers.find((rule) => rule.missing?.some(matchesEmbed))
  const embed = config.headers.find((rule) => rule.has?.some(matchesEmbed))

  assert.equal(headerValue(standalone, 'X-Frame-Options'), 'SAMEORIGIN')
  assert.match(headerValue(standalone, 'Content-Security-Policy'), /frame-ancestors 'none'/)
  assert.equal(headerValue(embed, 'X-Frame-Options'), undefined)
  assert.match(headerValue(embed, 'Content-Security-Policy'), /frame-ancestors https:\/\/9line\.dev(?:;|$)/)
  assert.doesNotMatch(headerValue(embed, 'Content-Security-Policy'), /frame-ancestors[^;]*\*/)
})
