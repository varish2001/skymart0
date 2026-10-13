/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { clamp, formatCurrency } from './cartUtils'
import { products } from '../models/productData'

const StoreContext = createContext(null)

function loadCart(cartKey) {
  try {
    const savedCart = JSON.parse(localStorage.getItem(cartKey) || '[]')
    if (!Array.isArray(savedCart)) return []

    return savedCart.flatMap(({ productId, quantity }) => {
      const product = products.find((item) => item.id === productId)
      if (!product || !Number.isInteger(quantity) || quantity < 1) return []
      return [{ ...product, quantity: clamp(quantity, 1, Math.min(9, product.stock)) }]
    })
  } catch {
    return []
  }
}

export function StoreProvider({ children, cartKey }) {
  const [cartItems, setCartItems] = useState(() => loadCart(cartKey))

  useEffect(() => {
    const savedCart = cartItems.map(({ id, quantity }) => ({ productId: id, quantity }))
    localStorage.setItem(cartKey, JSON.stringify(savedCart))
  }, [cartItems, cartKey])

  function addToCart(product, quantity = 1) {
    const maxQuantity = Math.min(9, product.stock)
    if (maxQuantity < 1) return

    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: clamp(item.quantity + quantity, 1, maxQuantity) }
            : item,
        )
      }

      return [...current, { ...product, quantity: clamp(quantity, 1, maxQuantity) }]
    })
  }

  function removeFromCart(productId) {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }

  function updateQuantity(productId, nextQuantity) {
    const product = products.find((item) => item.id === productId)
    if (!product) return
    const safeQuantity = clamp(nextQuantity, 1, Math.min(9, product.stock))

    setCartItems((current) =>
      current.map((item) => (item.id === productId ? { ...item, quantity: safeQuantity } : item)),
    )
  }

  const value = useMemo(() => {
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const deliveryFee = cartItems.length ? 249 : 0
    const total = subtotal + deliveryFee

    return {
      products,
      cartItems,
      cartCount,
      subtotal,
      deliveryFee,
      total,
      currency: formatCurrency,
      addToCart,
      removeFromCart,
      updateQuantity,
    }
  }, [cartItems])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used inside StoreProvider')
  }

  return context
}
