export default function CategoryCard({ category }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-200 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lg font-bold text-lime-300">
          {category.label}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
          <p className="mt-1 text-sm text-zinc-400">{category.count} items</p>
        </div>
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-lime-400 transition-all duration-300 group-hover:w-[90%]"
          style={{ width: `${Math.min(100, 30 + category.count * 2)}%` }}
        />
      </div>
    </div>
  )
}
