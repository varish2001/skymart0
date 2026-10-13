import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './views/Home'
import Shop from './views/Shop'
import ProductDetails from './views/ProductDetails'
import Cart from './views/Cart'
import About from './views/About'
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './views/NotFound'
import { StoreProvider } from './controllers/StoreContext'

export default function App() {
  const location = useLocation()
  const authenticatedEmail = sessionStorage.getItem('skymart-authenticated-email')
  const isAuthenticated = Boolean(authenticatedEmail)

  return (
    <StoreProvider key={authenticatedEmail || 'guest'} cartKey={`skymart-cart-${encodeURIComponent(authenticatedEmail || 'guest')}`}>
      <Routes location={location}>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/" replace /> : <Register />} />
        <Route element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StoreProvider>
  )
}
