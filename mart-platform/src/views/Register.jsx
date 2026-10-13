import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthShell from './AuthShell'
import Button from '../components/Button'
import { EyeIcon, EyeOffIcon } from '../components/Icons'
import { registerUser } from '../controllers/authUtils'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const password = formData.get('password')

    if (password !== formData.get('confirmPassword')) {
      setIsError(true)
      setMessage('Passwords do not match.')
      return
    }

    const result = registerUser({
      name: formData.get('name'),
      email: formData.get('email'),
      password,
    })

    if (!result.success) {
      setIsError(true)
      setMessage(result.message)
      return
    }

    setIsError(false)
    setMessage('Account created. Please sign in with your new credentials.')
    window.setTimeout(() => navigate('/login', { replace: true }), 900)
  }

  return (
    <AuthShell
      title="Create Account"
      description="Join the SkyMart experience"
      sideTitle="SkyMart"
      sideDescription="Create your account, explore curated collections, and build a premium cart-ready shopping journey."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Full Name</label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder="Your full name"
            className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400/40 focus:ring-2 focus:ring-lime-400/10"
          />
        </div>
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
              autoComplete="new-password"
            minLength={8}
              required
              placeholder="Create a password"
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
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              autoComplete="new-password"
              required
              placeholder="Confirm your password"
              className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 pr-12 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400/40 focus:ring-2 focus:ring-lime-400/10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((current) => !current)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-lime-300"
              aria-label="Toggle confirm password visibility"
            >
              {showConfirm ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
      {message ? <p role={isError ? 'alert' : 'status'} className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${isError ? 'border-red-400/20 bg-red-400/10 text-red-200' : 'border-lime-400/20 bg-lime-400/10 text-lime-100'}`}>{message}</p> : null}
      <p className="mt-6 text-sm text-zinc-400">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-lime-300 transition hover:text-lime-200">
          Sign in
        </Link>
      </p>
    </AuthShell>
  )
}
