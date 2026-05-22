export function Nav() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-[#1b1f23] border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 md:px-6 py-2">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img
            src="logo.svg"
            alt="LinkedIn Logo"
            className="h-8 w-8"
          />

          {/* Search Bar */}
          <div className="hidden sm:flex items-center gap-2 bg-[#2a2f35] px-4 h-10 rounded-full w-52 md:w-72 lg:w-80">
            <img
              src="search.svg"
              className="h-4 w-4 invert opacity-70"
              alt="Search"
            />

            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-full"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex items-center gap-4 md:gap-6 text-gray-300">

          <div className="flex flex-col items-center text-xs cursor-pointer hover:text-white">
            <img src="home.svg" className="h-5 w-5 invert" alt="Home" />
            <p className="hidden md:block">Home</p>
          </div>

          <div className="flex flex-col items-center text-xs cursor-pointer hover:text-white">
            <img src="network.svg" className="h-5 w-5 invert" alt="Network" />
            <p className="hidden md:block">Network</p>
          </div>

          <div className="flex flex-col items-center text-xs cursor-pointer hover:text-white">
            <img src="jobs.svg" className="h-5 w-5 invert" alt="Jobs" />
            <p className="hidden md:block">Jobs</p>
          </div>

          <div className="flex flex-col items-center text-xs cursor-pointer hover:text-white">
            <img src="message.svg" className="h-5 w-5 invert" alt="Messages" />
            <p className="hidden md:block">Messages</p>
          </div>

          <div className="flex flex-col items-center text-xs cursor-pointer hover:text-white">
            <img
              src="notification.svg"
              className="h-5 w-5 invert"
              alt="Notifications"
            />
            <p className="hidden md:block">Notifications</p>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center text-xs cursor-pointer hover:text-white">
            <img
              src="profile.jpg"
              className="h-7 w-7 rounded-full object-cover"
              alt="Profile"
            />
            <p className="hidden md:block">Me</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-5 text-gray-300 border-l border-gray-700 pl-5">

          <div className="flex flex-col items-center text-xs cursor-pointer hover:text-white">
            <img
              src="buisness.svg"
              className="h-5 w-5 invert"
              alt="Business"
            />
            <p>Business</p>
          </div>

          <div className="flex flex-col items-center text-xs cursor-pointer text-yellow-400 hover:text-yellow-300">
            <img
              src="premium.svg"
              className="h-5 w-5"
              alt="Premium"
            />
            <p>Try Premium</p>
          </div>
        </div>
      </div>
    </nav>
  );
}