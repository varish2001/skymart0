import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { MinusIcon, PlusIcon, TrashIcon } from '../components/Icons'
import { useStore } from '../controllers/StoreContext'
import { formatCurrency } from '../controllers/cartUtils'

export default function Cart() {
  const { cartItems, subtotal, deliveryFee, total, updateQuantity, removeFromCart } = useStore()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Your selection"
        title="Cart"
        description="Review items, adjust quantities, and prepare for the future checkout integration."
      />

      {cartItems.length ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-center"
              >
                <img src={item.image} alt={item.name} className="h-28 w-28 rounded-2xl object-cover" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{item.category}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{formatCurrency(item.price)}</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Item total: {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-lime-400/40 hover:bg-lime-400/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <div className="min-w-12 rounded-full border border-white/10 bg-zinc-950 px-4 py-2 text-center text-sm text-white">
                    {item.quantity}
                  </div>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= Math.min(9, item.stock)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-lime-400/40 hover:bg-lime-400/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-200"
                    aria-label="Remove item"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-semibold text-white">Order Summary</h3>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Delivery Fee</span>
                <span>{formatCurrency(deliveryFee)}</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-base font-semibold text-white">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
            <Button className="mt-6 w-full cursor-not-allowed opacity-50" disabled>Checkout unavailable</Button>
            <p className="mt-4 text-xs leading-6 text-zinc-500">
              Checkout is not connected yet. This UI is prepared for future payment integration.
            </p>
          </aside>
        </div>
      ) : (
        <div className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">Your cart is empty</h2>
          <p className="mt-3 text-zinc-400">Start browsing products and add items to your cart.</p>
          <Button to="/shop" className="mt-8">
            Go to Shop
          </Button>
        </div>
      )}
    </div>
  )
}
