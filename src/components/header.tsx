import { Moon, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed left-80 right-0 top-0 flex h-14 items-center justify-between border-b border-white/10 px-8 backdrop-blur">
      <button className="flex h-8 w-full max-w-md items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 text-sm text-zinc-400">
        <Search size={14} />
        <span>Find something...</span>
      </button>

      <div className="flex items-center">
        <nav className="flex items-center gap-6 text-sm">
          <a
            className="text-zinc-400 transition-colors hover:text-zinc-100"
            href=""
          >
            API
          </a>
          <a
            className="text-zinc-400 transition-colors hover:text-zinc-100"
            href=""
          >
            Documentation
          </a>
          <a
            className="text-zinc-400 transition-colors hover:text-zinc-100"
            href=""
          >
            Support
          </a>
        </nav>

        <div className="ml-6 flex items-center gap-6 border-l border-white/10 pl-6">
          <button>
            <Moon className="text-zinc-100" size={14} />
          </button>

          <button className="rounded-full border border-emerald-800 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-400 transition-colors hover:border-emerald-300 hover:text-emerald-300">
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
