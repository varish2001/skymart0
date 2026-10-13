import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { StarIcon, CartIcon } from './Icons'
import { formatCurrency } from '../controllers/cartUtils'
import { useStore } from '../controllers/StoreContext'

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useStore()
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    addToCart(product)
    setAdded(true)
  }

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full border border-lime-400/30 bg-zinc-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300 backdrop-blur">
            {product.badge}
          </div>
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={`/product/${product.id}`} className="text-lg font-semibold text-white transition hover:text-lime-300">
              {product.name}
            </Link>
            <p className="mt-1 text-sm text-zinc-500">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-white">{formatCurrency(product.price)}</p>
            <div className="mt-1 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300">
              <StarIcon className="h-3.5 w-3.5 text-lime-300" />
              {product.rating}
            </div>
          </div>
        </div>
        {!compact ? <p className="line-clamp-2 text-sm leading-6 text-zinc-400">{product.description}</p> : null}
        <div className="flex items-center gap-3">
          <Button
            className="flex-1"
            onClick={handleAddToCart}
            disabled={product.stock < 1}
          >
            <CartIcon className="h-4 w-4" />
            {product.stock < 1 ? 'Out of Stock' : added ? 'Added to Cart' : 'Add to Cart'}
          </Button>
          <Link
            to={`/product/${product.id}`}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-lime-400/40 hover:bg-lime-400/10 hover:text-lime-300"
          >
            <span className="text-lg">↗</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
