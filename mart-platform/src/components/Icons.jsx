const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  )
}

export function CartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M6 6h15l-2 8H8L6 6Z" />
      <path d="M6 6 5 3H2" />
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  )
}

export function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5.5 20c1.8-3.5 4.5-5 6.5-5s4.7 1.5 6.5 5" />
    </svg>
  )
}

export function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}

export function EyeOffIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="m3 3 18 18" />
      <path d="M10.6 10.6A3 3 0 0 0 13.4 13.4" />
      <path d="M6.1 6.1C3.9 7.7 2 12 2 12s3.5 7 10 7c1.8 0 3.3-.4 4.7-1.1" />
      <path d="M9.9 4.3A10.2 10.2 0 0 1 12 4c6.5 0 10 8 10 8a18 18 0 0 1-3 4.4" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="m12 2.5 3.1 6.3 7 1-5 4.8 1.2 6.9L12 18.3 5.7 21.5 6.9 14.6l-5-4.8 7-1L12 2.5Z" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

export function MinusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M5 12h14" />
    </svg>
  )
}

export function TrashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M6 6l1 14h10l1-14" />
      <path d="M10 11v5" />
      <path d="M14 11v5" />
    </svg>
  )
}

export function TruckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M3 7h12v10H3z" />
      <path d="M15 10h4l2 3v4h-6z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="18" cy="18" r="1.8" />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M12 3 20 6v6c0 4.8-3 8.8-8 10-5-1.2-8-5.2-8-10V6l8-3Z" />
      <path d="m9.5 12 1.8 1.8 3.9-4.2" />
    </svg>
  )
}

export function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M12 2 13.8 8.2 20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  )
}

export function BadgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M12 2 4 6v7c0 5 3.3 8.7 8 9 4.7-.3 8-4 8-9V6l-8-4Z" />
      <path d="M9.5 12.2 11.3 14 15 9.8" />
    </svg>
  )
}

export function FilterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...iconProps} {...props}>
      <path d="M4 6h16" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </svg>
  )
}
