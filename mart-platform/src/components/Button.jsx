import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', className = '', to, ...props }) {
  const styles = {
    primary:
      'bg-lime-400 text-zinc-950 hover:bg-lime-300 shadow-[0_0_24px_rgba(182,255,0,0.15)]',
    secondary:
      'border border-white/10 bg-white/5 text-white hover:border-lime-400/40 hover:bg-white/10',
    ghost: 'border border-transparent bg-transparent text-zinc-300 hover:text-white hover:bg-white/5',
  }

  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
