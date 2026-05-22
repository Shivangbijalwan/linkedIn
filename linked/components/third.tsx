export function News() {
  return (
    <div className="col-span-3 space-y-2 self-start sticky top-20">

      {/* LinkedIn News Card */}
      <div className="bg-[#1b1f23] rounded-2xl p-4 text-white w-full">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">LinkedIn News</h2>
        </div>

        <p className="text-gray-400 text-sm mb-2">Top stories</p>

        <div className="space-y-3 text-sm">
          {[
            { title: "Meta lays off 8K staffers to operate ...", time: "1h ago", readers: "26,526" },
            { title: "India asks citizens to not travel to Iran", time: "12h ago", readers: "612" },
            { title: "Global varsities plan faculty hiring pus...", time: "10h ago", readers: "407" },
            { title: "Indian pharma targets more global ...", time: "9h ago", readers: "326" },
            { title: "Luxury retail breaks out of metros to ...", time: "9h ago", readers: "208" },
          ].map((item, i) => (
            <div key={i} className="cursor-pointer hover:underline">
              <p className="font-semibold">{item.title}</p>
              <span className="text-gray-400 text-xs">{item.time} • {item.readers} readers</span>
            </div>
          ))}
        </div>

        <div className="mt-4 text-gray-400 text-sm cursor-pointer hover:text-white">
          Show more news ⌄
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full text-gray-400 pt-5 text-xs leading-5">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {["About", "Accessibility", "Help Center", "Privacy & Terms",
            "Ad Choices", "Advertising", "Business Services",
            "Get the LinkedIn app", "More"].map((link) => (
            <span key={link} className="hover:underline cursor-pointer">{link}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4 text-gray-500">
          <span className="font-semibold text-white">Linked</span>
          <span className="bg-white text-black text-[10px] px-1 rounded">in</span>
          <span>LinkedIn Corporation © 2026</span>
        </div>
      </div>

    </div>
  );
}

