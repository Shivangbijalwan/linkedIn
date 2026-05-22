export function Nav() {
  return (
    <nav className="border-0 border-white max-w-full flex justify-center items-center bg-[#1b1f23] p-0 mx-auto self-start sticky top-0 z-50">
      <div className="border-0 border-white flex justify-between items-center gap-4 px-4 py-2 rounded-lg">
        <img src="logo.svg" alt="LinkedIn Logo" />
        <div className="border border-gray-300 w-80 h-10 flex justify-content items-center gap-2 pl-4 rounded-3xl ">
          <img src="search.svg" className="h-4 w-4 invert" alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="border-0 border-white pl-10 text-gray-300 flex justify-between items-center gap-6 px-4 py-2 rounded-lg">
        <div className="border-0 flex flex-col justify-center items-center">
          <img src="home.svg" className="h-5 w-5 invert " alt="Home" />
          <p>Home</p>
        </div>
        <div className="border-0 flex flex-col justify-center items-center">
          <img src="network.svg" className="h-5 w-5 invert" alt="Network" />
          <p>Network</p>
        </div>
        <div className="border-0 flex flex-col justify-center items-center">
          <img src="jobs.svg" className="h-5 w-5 invert" alt="Jobs" />
          <p>Jobs</p>
        </div>
        <div className="border-0 flex flex-col justify-center items-center">
          <img src="message.svg" className="h-5 w-5 invert" alt="Messages" />
          <p>Messages</p>
        </div>
        <div className="border-0 flex flex-col justify-center items-center">
          <img src="notification.svg" className="h-5 w-5 invert" alt="Notifications" />
          <p>Notifications</p>
        </div>
        <div>
          <img src="profile.jpg" className="h-6 w-6 rounded-full" alt="Profile" />
          <p>me</p>
        </div>
      </div>
      <div className="border-0 border-white pl-10 text-gray-300 flex justify-between items-center gap-2 px-4 py-2 rounded-lg">
        <div className="border-0 flex flex-col justify-center items-center">
          <img src="buisness.svg" className="h-5 w-5 invert" alt="Work" />
          <p>For Buisness</p>
        </div>
        <div className="border-0 flex flex-col justify-center items-center">
          <img src="premium.svg" className="h-5 w-5" alt="Learning" />
          <p>Try Premium for $0</p>
        </div>
      </div>
    </nav>
  );
}