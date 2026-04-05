"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-[#3d8dca] text-white shadow-[0_14px_38px_rgba(34,76,117,0.28)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8 lg:py-5">
          <a href="#top" className="flex items-center gap-3 pr-2">
            <p className="font-(family-name:--font-display) text-[1.65rem] font-semibold uppercase tracking-tight text-white lg:text-[2rem]">
              T<span className="text-[#d7ebfb]">F</span>T
            </p>
          </a>

          <nav className="hidden flex-1 items-center gap-6 lg:flex">
            <a href="#business" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#eaf5ff] transition-colors hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20s-6-3.5-6-9a6 6 0 0 1 12 0c0 5.5-6 9-6 9Z" />
                <circle cx="12" cy="11" r="2" />
              </svg>
              Store Location
            </a>
            <span className="h-5 w-px bg-white/45" />
            <a href="#products" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#eaf5ff] transition-colors hover:text-white">
              Our Products
            </a>
            <a href="#ingredients" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#eaf5ff] transition-colors hover:text-white">
              Our Proteins
            </a>
            <a href="#why" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#eaf5ff] transition-colors hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#eaf5ff] transition-colors hover:text-white">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <div className="relative">
              <div className="relative flex h-12 w-[17rem] items-center gap-2 border-2 border-[#1d324a] bg-white px-4 text-[#0d1b2b] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0d1b2b]" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <span className="text-lg font-medium tracking-tight">Search</span>
              </div>
              <span className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-[#1d324a]" />
              <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-[#1d324a]" />
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#eef7ff] transition-colors hover:text-white">
              Cart
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="20" r="1.6" />
                <circle cx="17" cy="20" r="1.6" />
                <path d="M3 4h2l2 11h10l2-8H7" />
              </svg>
            </a>
          </div>

          <a href="#business" className="inline-flex items-center rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white lg:hidden">
            Partner
          </a>
        </div>

        <div 
          className="pointer-events-none absolute inset-x-0 -bottom-2 h-2 bg-[#3d8dca]"
          style={{
            clipPath: "polygon(0% 0%, 0.5% 100%, 1% 0%, 1.5% 100%, 2% 0%, 2.5% 100%, 3% 0%, 3.5% 100%, 4% 0%, 4.5% 100%, 5% 0%, 5.5% 100%, 6% 0%, 6.5% 100%, 7% 0%, 7.5% 100%, 8% 0%, 8.5% 100%, 9% 0%, 9.5% 100%, 10% 0%, 10.5% 100%, 11% 0%, 11.5% 100%, 12% 0%, 12.5% 100%, 13% 0%, 13.5% 100%, 14% 0%, 14.5% 100%, 15% 0%, 15.5% 100%, 16% 0%, 16.5% 100%, 17% 0%, 17.5% 100%, 18% 0%, 18.5% 100%, 19% 0%, 19.5% 100%, 20% 0%, 20.5% 100%, 21% 0%, 21.5% 100%, 22% 0%, 22.5% 100%, 23% 0%, 23.5% 100%, 24% 0%, 24.5% 100%, 25% 0%, 25.5% 100%, 26% 0%, 26.5% 100%, 27% 0%, 27.5% 100%, 28% 0%, 28.5% 100%, 29% 0%, 29.5% 100%, 30% 0%, 30.5% 100%, 31% 0%, 31.5% 100%, 32% 0%, 32.5% 100%, 33% 0%, 33.5% 100%, 34% 0%, 34.5% 100%, 35% 0%, 35.5% 100%, 36% 0%, 36.5% 100%, 37% 0%, 37.5% 100%, 38% 0%, 38.5% 100%, 39% 0%, 39.5% 100%, 40% 0%, 40.5% 100%, 41% 0%, 41.5% 100%, 42% 0%, 42.5% 100%, 43% 0%, 43.5% 100%, 44% 0%, 44.5% 100%, 45% 0%, 45.5% 100%, 46% 0%, 46.5% 100%, 47% 0%, 47.5% 100%, 48% 0%, 48.5% 100%, 49% 0%, 49.5% 100%, 50% 0%, 50.5% 100%, 51% 0%, 51.5% 100%, 52% 0%, 52.5% 100%, 53% 0%, 53.5% 100%, 54% 0%, 54.5% 100%, 55% 0%, 55.5% 100%, 56% 0%, 56.5% 100%, 57% 0%, 57.5% 100%, 58% 0%, 58.5% 100%, 59% 0%, 59.5% 100%, 60% 0%, 60.5% 100%, 61% 0%, 61.5% 100%, 62% 0%, 62.5% 100%, 63% 0%, 63.5% 100%, 64% 0%, 64.5% 100%, 65% 0%, 65.5% 100%, 66% 0%, 66.5% 100%, 67% 0%, 67.5% 100%, 68% 0%, 68.5% 100%, 69% 0%, 69.5% 100%, 70% 0%, 70.5% 100%, 71% 0%, 71.5% 100%, 72% 0%, 72.5% 100%, 73% 0%, 73.5% 100%, 74% 0%, 74.5% 100%, 75% 0%, 75.5% 100%, 76% 0%, 76.5% 100%, 77% 0%, 77.5% 100%, 78% 0%, 78.5% 100%, 79% 0%, 79.5% 100%, 80% 0%, 80.5% 100%, 81% 0%, 81.5% 100%, 82% 0%, 82.5% 100%, 83% 0%, 83.5% 100%, 84% 0%, 84.5% 100%, 85% 0%, 85.5% 100%, 86% 0%, 86.5% 100%, 87% 0%, 87.5% 100%, 88% 0%, 88.5% 100%, 89% 0%, 89.5% 100%, 90% 0%, 90.5% 100%, 91% 0%, 91.5% 100%, 92% 0%, 92.5% 100%, 93% 0%, 93.5% 100%, 94% 0%, 94.5% 100%, 95% 0%, 95.5% 100%, 96% 0%, 96.5% 100%, 97% 0%, 97.5% 100%, 98% 0%, 98.5% 100%, 99% 0%, 99.5% 100%, 100% 0%)"
          }}
        />
      </div>
    </header>
  );
}
