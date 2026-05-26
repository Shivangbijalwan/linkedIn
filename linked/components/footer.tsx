export function Footer() {
  return (
    <footer className="w-full mt-8 pb-6 px-4">

      {/* Links Grid */}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-4">
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">About</a>
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">Accessibility</a>
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">Help Center</a>
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">Privacy & Terms</a>
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">Ad Choices</a>
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">Advertising</a>
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">Business Services</a>
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">Get the LinkedIn app</a>
        <a href="#" className="text-[11px] text-gray-400 hover:text-blue-300 hover:underline transition-colors whitespace-nowrap">More</a>
      </div>

      {/* Logo + Copyright */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-1">
          <div className="bg-white rounded px-1.5 py-0.5">
            <span className="text-black font-bold text-sm tracking-tight">in</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">LinkedIn</span>
        </div>
        <span className="text-[11px] text-gray-500">
          LinkedIn Corporation © 2025
        </span>
      </div>

    </footer>
  )
}