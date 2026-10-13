import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'
import CategoryCard from '../components/CategoryCard'
import FeatureCard from '../components/FeatureCard'
import ProductCard from '../components/ProductCard'
import { categories, features, newArrivals, topRatedProducts } from '../models/productData'
import { useStore } from '../controllers/StoreContext'
import { ArrowRightIcon, ShieldIcon, TruckIcon } from '../components/Icons'
import { formatCurrency } from '../controllers/cartUtils'

export default function Home() {
  const { cartCount, subtotal } = useStore()

  const stats = [
    { label: 'Cart Items', value: cartCount, hint: 'Ready for checkout later' },
    { label: 'Cart Value', value: formatCurrency(subtotal), hint: 'Current mock cart total' },
    { label: 'Top Products', value: topRatedProducts.length, hint: 'Highest rated picks' },
    { label: 'Categories', value: categories.length, hint: 'Browse by collection' },
  ]

  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(182,255,0,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(182,255,0,0.09),_transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-lime-300">
                Welcome back to SkyMart
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Premium shopping, made dark, fast, and beautifully simple.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                Discover a curated marketplace with modern product cards, refined category browsing,
                and a cart-first experience designed for clean, confident shopping.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/shop" className="w-full sm:w-auto">
                  Shop Now
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Button to="/shop" variant="secondary" className="w-full sm:w-auto">
                  View All Products
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-zinc-400">20K+ Products</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Curated catalog</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-zinc-400">Free Delivery</p>
                  <p className="mt-3 text-2xl font-semibold text-white">On premium orders</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-zinc-400">Secure Payments</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Future checkout ready</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Featured vibe</p>
                    <p className="mt-2 text-2xl font-semibold text-white">SkyMart premium drop</p>
                  </div>
                  <div className="rounded-2xl border border-lime-400/20 bg-lime-400/10 p-3 text-lime-300">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-zinc-950 p-4">
                    <p className="text-sm text-zinc-500">Live carts</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{cartCount}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-zinc-950 p-4">
                    <p className="text-sm text-zinc-500">Collections</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{categories.length}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-3xl border border-lime-400/20 bg-lime-400/10 p-4">
                  <TruckIcon className="h-5 w-5 text-lime-300" />
                  <div>
                    <p className="text-sm font-medium text-lime-100">Fast delivery promise</p>
                    <p className="text-xs text-lime-100/80">High-end logistics, future-ready checkout flow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Categories"
          title="Shop by Category"
          description="Browse polished collections built for quick discovery and premium visual hierarchy."
          action={
            <Button to="/shop" variant="ghost" className="px-0 text-lime-300 hover:text-lime-200">
              Explore all
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured products"
          title="Top Rated"
          description="The best performing picks in the current mock catalog."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topRatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fresh arrivals"
          title="New Arrivals"
          description="Recently added products with a clean premium presentation."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>
    </div>
  )
}
