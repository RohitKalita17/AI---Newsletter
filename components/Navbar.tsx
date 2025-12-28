import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-white/10 text-xl font-bold text-white">
            R
          </div>
          <span className="text-xl font-semibold text-white">The Rundown</span>
        </Link>
        
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/articles" className="text-sm text-white/80 hover:text-white transition-colors">
            Articles
          </Link>
          <Link href="/guides" className="text-sm text-white/80 hover:text-white transition-colors">
            Guides
          </Link>
          <Link href="/tools" className="text-sm text-white/80 hover:text-white transition-colors">
            Tools
          </Link>
        </div>

        <Link
          href="/login"
          className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
        >
          Login →
        </Link>
      </div>
    </nav>
  );
}

