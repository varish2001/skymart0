import BrandMark from './BrandMark'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <BrandMark />
            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              SkyMart is a premium, modern e-commerce experience built for fast browsing,
              elevated product discovery, and a clean cart-ready interface.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-300">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              <Link to="/" className="transition hover:text-lime-300">Home</Link>
              <Link to="/shop" className="transition hover:text-lime-300">Shop</Link>
              <Link to="/about" className="transition hover:text-lime-300">About</Link>
              <Link to="/cart" className="transition hover:text-lime-300">Cart</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-300">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <p>support@skymart.shop</p>
              <p>+91 99999 12345</p>
              <p>Open daily, 9 AM - 9 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-zinc-500">
          © 2026 SkyMart. Premium e-commerce UI concept.
        </div>
      </div>
    </footer>
  )
}
