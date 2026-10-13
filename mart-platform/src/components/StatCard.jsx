import { BadgeIcon } from './Icons'

export default function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-400">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
          {hint ? <p className="mt-2 text-xs text-zinc-500">{hint}</p> : null}
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300">
          <BadgeIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
