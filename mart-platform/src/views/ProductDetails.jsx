import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { CartIcon, MinusIcon, PlusIcon, StarIcon } from '../components/Icons'
import { products } from '../models/productData'
import { formatCurrency } from '../controllers/cartUtils'
import { useStore } from '../controllers/StoreContext'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useStore()
  const navigate = useNavigate()

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-white">Product not found</h1>
        <p className="mt-4 text-zinc-400">The selected product is not available in the mock catalog.</p>
        <Button to="/shop" className="mt-8">
          Back to Shop
        </Button>
      </div>
    )
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  ).slice(0, 4)
  const maxQuantity = Math.min(9, product.stock)

  function handleAddToCart(goToCart = false) {
    addToCart(product, quantity)
    setAdded(true)
    if (goToCart) navigate('/cart')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Product view"
        title={product.name}
        description="A detailed mock product detail page ready for future backend and checkout integration."
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-4">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full rounded-[24px] object-cover"
          />
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
              {product.badge}
            </span>
            <span className="rounded-full border border-white/10 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
              {product.category}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white">{product.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="text-3xl font-semibold text-white">{formatCurrency(product.price)}</div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-zinc-300">
              <StarIcon className="h-4 w-4 text-lime-300" />
              {product.rating} rating
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">{product.description}</p>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-zinc-950 p-5">
            <p className="text-sm font-medium text-zinc-300">Quantity</p>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-lime-400/40 hover:bg-lime-400/10"
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              <div className="min-w-16 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-center text-sm text-white">
                {quantity}
              </div>
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.min(maxQuantity, current + 1))}
                disabled={quantity >= maxQuantity}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-lime-400/40 hover:bg-lime-400/10"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="flex-1" onClick={() => handleAddToCart()} disabled={product.stock < 1}>
              <CartIcon className="h-4 w-4" />
              {product.stock < 1 ? 'Out of Stock' : added ? 'Added to Cart' : 'Add to Cart'}
            </Button>
            <Button variant="secondary" className="flex-1" onClick={() => handleAddToCart(true)} disabled={product.stock < 1}>
              Buy Now
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-zinc-400">Product ID</p>
              <p className="mt-2 font-semibold text-white">#{product.id}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-zinc-400">Category</p>
              <p className="mt-2 font-semibold text-white">{product.category}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-zinc-400">Stock</p>
              <p className="mt-2 font-semibold text-white">{product.stock} units</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 grid gap-4 lg:grid-cols-3">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">Information</p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            Built with a future-ready UI structure so product metadata, checkout flow, and inventory
            can be connected later without reworking the page layout.
          </p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">Shipping</p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            Designed for fast shipping, clean product storytelling, and a premium cart experience.
          </p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">Support</p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            The mock detail view can easily plug into backend APIs, related product logic, and live stock updates later.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="More options"
          title="Related Products"
          description="More items from the same category to keep browsing flowing."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.length ? (
            relatedProducts.map((item) => <ProductCard key={item.id} product={item} compact />)
          ) : (
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-zinc-400">
              No related products available right now.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
