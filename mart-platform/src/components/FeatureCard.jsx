import { ArrowRightIcon } from './Icons'

export default function FeatureCard({ feature }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{feature.description}</p>
        </div>
        <div className="rounded-full border border-lime-400/20 bg-lime-400/10 p-3 text-lime-300">
          <ArrowRightIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
