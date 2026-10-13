import { SparkIcon } from './Icons'

export default function BrandMark({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/30 bg-lime-400/10 text-lime-300 shadow-[0_0_40px_rgba(182,255,0,0.14)]">
        <SparkIcon className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-300">
          SkyMart
        </div>
        {!compact ? <div className="text-xs text-zinc-500">Premium shopping reimagined</div> : null}
      </div>
    </div>
  )
}
