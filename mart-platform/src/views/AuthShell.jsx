import BrandMark from '../components/BrandMark'

export default function AuthShell({ title, description, children, sideTitle, sideDescription }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[1.15fr_0.85fr]">
        <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
          <div className="w-full max-w-md">
            <BrandMark />
            <div className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime-300">
                {title}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">{description}</h1>
              <div className="mt-8">{children}</div>
            </div>
          </div>
        </section>

        <aside className="hidden overflow-hidden border-l border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(182,255,0,0.16),_transparent_40%),linear-gradient(180deg,_#111,_#070707)] lg:block">
          <div className="flex h-full flex-col justify-between px-10 py-12">
            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime-300">
                {sideTitle}
              </p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white">
                Premium commerce built for modern shopping.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">{sideDescription}</p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-zinc-400">Curated collections</p>
                <p className="mt-2 text-2xl font-semibold text-white">20K+ products</p>
              </div>
              <div className="rounded-[28px] border border-lime-400/20 bg-lime-400/10 p-5 text-zinc-950">
                <p className="text-sm font-medium text-lime-950/80">Fast checkout experience</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-950">Built for smooth browsing</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
