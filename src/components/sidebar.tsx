import { Logo } from './Icons/logo'

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 w-80 border-r border-white/10 px-6 py-4">
      <Logo />

      <nav className="mt-10">
        <ul role="list">
          <li>
            <h2 className="text-sm font-medium text-zinc-100">Guides</h2>

            <ul
              role="list"
              className="mt-3 border-l border-white/5 pl-2 text-sm"
            >
              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Introduction</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Quickstart</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">SDKs</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Pagination</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Errors</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Webhooks</a>
              </li>
            </ul>
          </li>

          <li className="mt-6">
            <h2 className="text-sm font-medium text-zinc-100">Resources</h2>

            <ul
              role="list"
              className="mt-3 border-l border-white/5 pl-2 text-sm"
            >
              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Contacts</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Conversations</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Messages</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Groups</a>
              </li>

              <li className="px-4 py-1.5 text-zinc-400 transition-colors hover:text-white">
                <a href="">Attachments</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
