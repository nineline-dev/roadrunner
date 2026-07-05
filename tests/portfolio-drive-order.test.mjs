import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = new URL('..', import.meta.url)

const expectedDriveOrder = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/hero.jpg',
  '/images/property-living-pool.jpg',
  '/images/property-game-room.jpg',
  '/images/property-lounge.jpg',
  '/videos/hero-video.mp4',
  '/videos/portfolio-video-2.mp4',
  '/videos/portfolio-video-3.mp4',
  '/videos/portfolio-video-4.mp4',
]

test('portfolio contains only the Drive folder assets in order', () => {
  const source = fs.readFileSync(new URL('../src/components/Portfolio.jsx', import.meta.url), 'utf8')
  const actual = Array.from(source.matchAll(/src: '([^']+)'/g), (match) => match[1])

  assert.deepEqual(actual, expectedDriveOrder)
  assert.equal(actual.filter((src) => src.startsWith('/videos/')).length, 4)
  assert.doesNotMatch(source, /INITIAL_SHOW/)
  assert.doesNotMatch(source, /showAll/)
  assert.match(source, /const FILTERS = \['All', 'Photos', 'Videos'\]/)
  assert.match(source, /grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/)
  assert.match(source, /aspect-\[4\/3\]/)
  assert.match(source, /h-full w-full object-cover/)
  assert.match(source, /gridImageSrc/)
  assert.match(source, /\/images\/grid\//)
  assert.match(source, /poster: '\/images\/thumb-hero-video\.jpg'/)
  assert.match(source, /loading=\{index < 9 \? 'eager' : 'lazy'\}/)
  assert.doesNotMatch(source, /columns-1/)
})

test('portfolio support assets stay optimized for the rendered grid', () => {
  const gridFiles = [
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
    '8.webp',
    '9.webp',
    'hero.webp',
    'property-living-pool.webp',
    'property-game-room.webp',
    'property-lounge.webp',
    'thumb-hero-video.webp',
    'thumb-portfolio-video-2.webp',
    'thumb-portfolio-video-3.webp',
    'thumb-portfolio-video-4.webp',
  ]

  const totalGridBytes = gridFiles.reduce((sum, file) => {
    const stats = fs.statSync(path.join(root.pathname, 'public/images/grid', file))
    assert.ok(stats.size < 220_000, `${file} is too heavy for a grid thumbnail`)
    return sum + stats.size
  }, 0)

  assert.ok(totalGridBytes < 1_700_000, 'grid thumbnails should stay below 1.7 MB total')
  assert.ok(fs.statSync(path.join(root.pathname, 'public/images/thumb-hero-video.jpg')).size < 220_000)
  assert.ok(fs.statSync(path.join(root.pathname, 'public/images/thumb-hero-video.webp')).size < 180_000)
  assert.ok(fs.statSync(path.join(root.pathname, 'public/images/logo-roadrunner-display.png')).size < 25_000)
  assert.ok(fs.statSync(path.join(root.pathname, 'public/images/colin-hero-display.webp')).size < 40_000)

  const videoFiles = [
    'hero-video.mp4',
    'portfolio-video-2.mp4',
    'portfolio-video-3.mp4',
    'portfolio-video-4.mp4',
  ]
  const totalVideoBytes = videoFiles.reduce((sum, file) => (
    sum + fs.statSync(path.join(root.pathname, 'public/videos', file)).size
  ), 0)

  assert.ok(totalVideoBytes < 78 * 1024 * 1024, 'portfolio videos should stay below 78 MB total')
})
