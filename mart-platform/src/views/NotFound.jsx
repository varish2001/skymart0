import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 text-zinc-400">The route you tried to open does not exist in this frontend.</p>
      <Button to="/" className="mt-8">
        Return Home
      </Button>
    </div>
  )
}
