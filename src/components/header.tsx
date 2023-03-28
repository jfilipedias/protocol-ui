import { Moon, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed left-80 right-0 top-0 flex h-14 items-center justify-between border-b border-white/10 px-8 backdrop-blur">
      <button className="flex h-8 w-full max-w-md items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 text-sm text-zinc-400">
        <Search size={14} />
        <span>Find something...</span>
      </button>

      <div className="flex items-center">
        <nav>
          <a href="">API</a>
          <a href="">Documentation</a>
          <a href="">Support</a>
        </nav>

        <div>
          <button>
            <Moon size={14} />
          </button>

          <button>Sign in</button>
        </div>
      </div>
    </header>
  )
}
