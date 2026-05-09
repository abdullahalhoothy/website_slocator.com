export default function Footer() {
  return (
    <footer className="bg-[#0b0216] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Logos Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 w-full mb-12">
          {/* S-LOC Logo */}
          <a
            href="/"
            className="hover:opacity-80 transition-opacity hover:-translate-y-1 transform duration-300"
          >
            <img
              src="https://www.s-locator.com/wp-content/uploads/2024/10/cropped-S-LOC-FF-02-2-scaled-208x74.png"
              alt="S-LOC"
              className="w-48 md:w-56 h-auto object-contain drop-shadow-lg"
            />
          </a>

          {/* Divider line for mobile (hidden on desktop) */}
          <div className="w-16 h-px bg-gray-800 md:hidden"></div>

          {/* Northern Analytics Logo */}
          <a
            href="https://northernacs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity hover:-translate-y-1 transform duration-300"
          >
            <img
              src="https://www.s-locator.com/wp-content/uploads/2026/04/logo.png"
              alt="Northern Analytics"
              className="w-48 md:w-56 h-auto object-contain drop-shadow-lg"
              // Fallback styling just in case the image path changes
              onError={e => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'block'
              }}
            />
            {/* Fallback Text if image fails to load */}
            <span
              style={{ display: 'none' }}
              className="text-white font-bold text-xl tracking-widest"
            >
              NORTHERN <span className="text-[#38e54d]">ANALYTICS</span>
            </span>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 flex flex-col items-center">
          <p className="tracking-wide">
            S-Locator | by{' '}
            <a
              href="https://northernacs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38e54d] hover:text-[#45c960] font-semibold transition-colors"
            >
              Northern Analytics
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
