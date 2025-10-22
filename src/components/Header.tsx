'use client';

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-[6px] bg-gradient-to-br from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-cyan))] flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-tight leading-none">
            Solana
          </div>
          <div className="text-sm font-bold uppercase tracking-tight leading-none">
            Drawing Arena
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-sm font-medium">
        <a
          href="#"
          className="text-[hsl(var(--text-primary))] hover:text-[hsl(var(--accent-cyan))] transition-colors uppercase tracking-wide"
        >
          Draw
        </a>
        <a
          href="#"
          className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent-cyan))] transition-colors uppercase tracking-wide"
        >
          Gallery
        </a>
        <a
          href="#"
          className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent-cyan))] transition-colors uppercase tracking-wide"
        >
          Leaderboard
        </a>
        <a
          href="#"
          className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent-cyan))] transition-colors uppercase tracking-wide"
        >
          About
        </a>
        <a
          href="#"
          className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent-cyan))] transition-colors uppercase tracking-wide"
        >
          Community
        </a>
      </nav>
    </header>
  );
}
