import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'
import { ShieldIcon, SparkIcon, TruckIcon } from '../components/Icons'

const stats = [
  { label: 'Products Curated', value: '20K+', hint: 'Mock marketplace scale' },
  { label: 'Cities Reached', value: '120+', hint: 'Premium logistics vision' },
  { label: 'Happy Shoppers', value: '8M+', hint: 'Brand trust signal' },
  { label: 'Categories', value: '6+', hint: 'Core storefront groups' },
]

const values = [
  {
    title: 'Trust',
    description: 'We design for confidence with clean layouts, clear pricing, and dependable structure.',
    icon: ShieldIcon,
  },
  {
    title: 'Speed',
    description: 'Fast discovery, quick filtering, and a UI that feels snappy from home to cart.',
    icon: TruckIcon,
  },
  {
    title: 'Community',
    description: 'A brand built to feel welcoming, modern, and easy to come back to again and again.',
    icon: SparkIcon,
  },
  {
    title: 'Quality',
    description: 'Every surface aims to feel premium, deliberate, and ready for a real commerce product.',
    icon: ShieldIcon,
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About SkyMart"
        title="A premium e-commerce experience with a modern edge"
        description="SkyMart is envisioned as a high-end storefront with a dark aesthetic, neon accents, and a clean path from discovery to purchase."
      />

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Our Story</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            SkyMart was shaped around the idea that online shopping should feel premium without
            feeling complicated. The design leans into dark surfaces, luminous highlights, and clear
            product storytelling so users can browse with ease.
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            This frontend focuses on visual polish, reusable components, and future-ready layout
            structure. It is intentionally mock-driven today, while leaving room for backend,
            checkout, and account integration later.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-sm text-zinc-400">Mission</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Make shopping feel focused, modern, and premium.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-sm text-zinc-400">Approach</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Clear hierarchy, subtle motion, and usable cart flows.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-lime-400/20 bg-[radial-gradient(circle_at_top,_rgba(182,255,0,0.16),_transparent_35%),linear-gradient(180deg,_#111,_#0a0a0a)] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime-300">Why SkyMart</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Designed to feel like a real retail brand.
          </h3>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-zinc-400">Premium UI</p>
              <p className="mt-2 text-base text-white">Dark background, sharp borders, lime accent.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-zinc-400">Future-ready</p>
              <p className="mt-2 text-base text-white">Built for API wiring without layout rewrites.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-zinc-400">Reusable system</p>
              <p className="mt-2 text-base text-white">Cards, sections, buttons, and pages stay consistent.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Values"
          title="The principles behind the brand"
          description="These values keep the storefront professional, fast, and trustworthy."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
