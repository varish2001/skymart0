import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import { SearchIcon, FilterIcon } from '../components/Icons'
import { products, categories } from '../models/productData'

const PAGE_SIZE = 6

export default function Shop() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const [priceLimit, setPriceLimit] = useState(18000)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [query, category, sort, priceLimit])

  const filtered = products
    .filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || product.category === category
      const matchesPrice = product.price <= priceLimit

      return matchesQuery && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return b.featured - a.featured || b.rating - a.rating
    })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Browse catalog"
        title="Shop"
        description="Search, filter, sort, and explore the full mock catalog with a polished storefront layout."
      />

      <div className="mt-8 grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 lg:grid-cols-4">
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 lg:col-span-2">
          <SearchIcon className="h-5 w-5 text-zinc-500" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products or categories"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
          />
        </label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none"
        >
          <option value="All">All Categories</option>
          {categories.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none"
        >
          <option value="featured">Featured</option>
          <option value="rating">Top Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div className="mt-6 grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-400">Price filter</p>
            <p className="mt-1 text-lg font-semibold text-white">
              Up to ₹{priceLimit.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
            <FilterIcon className="h-4 w-4" />
            {filtered.length} products
          </div>
        </div>
        <input
          type="range"
          min="2000"
          max="20000"
          step="500"
          value={priceLimit}
          onChange={(event) => setPriceLimit(Number(event.target.value))}
          className="w-full accent-lime-400"
        />
      </div>

      {paginated.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {paginated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-10 text-center">
          <h2 className="text-xl font-semibold text-white">No products found</h2>
          <p className="mt-2 text-sm text-zinc-400">Try a different search, category, or price limit.</p>
        </div>
      )}

      <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:flex-row">
        <p className="text-sm text-zinc-400">
          Showing {Math.min(filtered.length, (page - 1) * PAGE_SIZE + 1)}-
          {Math.min(filtered.length, page * PAGE_SIZE)} of {filtered.length} products
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            disabled={page === 1}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </Button>
          <div className="rounded-full border border-white/10 bg-zinc-950 px-4 py-2 text-sm text-white">
            Page {page} of {totalPages}
          </div>
          <Button
            variant="secondary"
            disabled={page === totalPages}
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
