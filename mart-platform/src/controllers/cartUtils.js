export function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function createArtwork(title, accent = '#b6ff00', accent2 = '#1f1f1f') {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0a"/>
          <stop offset="100%" stop-color="#111111"/>
        </linearGradient>
        <linearGradient id="accent" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="${accent2}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(#bg)" rx="56" />
      <circle cx="650" cy="150" r="120" fill="${accent}" fill-opacity="0.12" />
      <circle cx="170" cy="620" r="160" fill="${accent}" fill-opacity="0.1" />
      <path d="M128 520C218 372 338 290 492 250C602 222 682 244 740 304L620 480C560 412 474 388 354 418C250 444 178 500 128 520Z" fill="url(#accent)" fill-opacity="0.35"/>
      <path d="M132 548C238 428 368 358 528 334C622 320 688 338 736 378" stroke="${accent}" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.9"/>
      <text x="72" y="176" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700">${title}</text>
      <text x="72" y="238" fill="#8a8a8a" font-family="Arial, Helvetica, sans-serif" font-size="24">SkyMart Collection</text>
    </svg>
  `
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
