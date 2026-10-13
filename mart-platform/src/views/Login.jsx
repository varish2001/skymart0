import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthShell from './AuthShell'
import Button from '../components/Button'
import { EyeIcon, EyeOffIcon } from '../components/Icons'
import { authenticateUser } from '../controllers/authUtils'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const user = authenticateUser(formData.get('email'), formData.get('password'))

    if (!user) {
      setMessage('Email or password is incorrect. Create an account first if you are new to SkyMart.')
      return
    }

    sessionStorage.setItem('skymart-authenticated-email', user.email)
    navigate('/', { replace: true })
  }

  return (
    <AuthShell
      title="Login"
      description="Welcome back to SkyMart"
      sideTitle="SkyMart"
      sideDescription="A polished storefront experience with premium product cards, a dark neon theme, and a clean path from discovery to cart."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400/40 focus:ring-2 focus:ring-lime-400/10"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 pr-12 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400/40 focus:ring-2 focus:ring-lime-400/10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-lime-300"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-lime-400" />
            Remember me
          </label>
          <a href="#!" className="transition hover:text-lime-300">Forgot password?</a>
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      {message ? <p role="alert" className="mt-4 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{message}</p> : null}
      <p className="mt-6 text-sm text-zinc-400">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="font-semibold text-lime-300 transition hover:text-lime-200">
          Create one
        </Link>
      </p>
    </AuthShell>
  )
}
