export function User() {
  return (
   
    <div className="flex flex-col gap-3 w-full sm:w-56 self-start sticky top-20">

      {/* Profile Card */}
      <div className="bg-[#1b1f23] rounded-2xl overflow-hidden">
        <img src="banner.jpg" className="h-auto w-full object-cover" alt="banner" />
        <img
          src="profile.jpg"
          className="h-16 w-16 rounded-full relative z-20 -mt-8 ml-3 border-2 border-black"
          alt="Profile"
        />
       
        <div className="flex flex-col items-center gap-2 pb-5 px-3">
          <span className="text-xl font-semibold">Shivang Bijalwan</span>
          <span className="text-xs text-white text-center font-medium">
            💻 Web Developer | Building SaaS Products | Creator of TTA | JS • Django • Tailwind CSS • Python
          </span>
          <span className="text-xs text-gray-400 font-medium">
            Dehradun, Uttarakhand
          </span>
          <span className="text-sm text-gray-300 font-semibold flex items-center gap-1">
            <img src="freelance.svg" className="h-5 w-5" alt="" /> Freelance
          </span>
        </div>
      </div>

      {/* Premium Card */}
      <div className="bg-[#1b1f23] rounded-2xl p-4 flex flex-col gap-1">
        <span className="text-xs text-gray-300">Achieve your goals with premium</span>
        <span className="text-xs font-semibold text-white flex items-center gap-2">
          <img src="premium.svg" className="w-5 h-5" alt="" /> Try Premium for $0
        </span>
      </div>

      {/* Stats Card */}
   
      <div className="bg-[#1b1f23] rounded-2xl p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center gap-8">
          <span className="text-xs font-medium">Profile viewers</span>
          <span className="text-blue-300 text-sm">38</span>
        </div>
        <div className="flex justify-between items-center gap-8">
          <span className="text-xs font-medium">Post impressions</span>
          <span className="text-blue-300 text-sm">84</span>
        </div>
      </div>

      {/* Navigation Card */}
      <div className="bg-[#1b1f23] rounded-2xl py-2">
        <div className="flex items-center gap-2 px-4 py-2">
          <img src="save.svg" className="h-5 w-5 invert" alt="" />
          <span className="text-xs font-medium">Saved Items</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2">
          <img src="group.svg" className="h-5 w-5 invert" alt="" />
          <span className="text-xs font-medium">Groups</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2">
          <img src="newster.svg" className="h-5 w-5 invert" alt="" />
          <span className="text-xs font-medium">Newsletters</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2">
          <img src="events.svg" className="h-5 w-5 invert" alt="" />
          <span className="text-xs font-medium">Events</span>
        </div>
      </div>

    </div>
  );
}