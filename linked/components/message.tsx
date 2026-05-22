export function MessagingBar() {
  return (
    <div className="fixed bottom-0 right-6 w-[300px] bg-[#1b1f23] text-white rounded-t-xl shadow-lg px-4 py-2 flex items-center justify-between z-50">
      <div className="flex items-center gap-2">
        <div className="relative">
          <img src="profile.jpg" className="w-8 h-8 rounded-full object-cover" alt="Profile" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-black rounded-full" />
        </div>
        <span className="font-semibold text-sm">Messaging</span>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
        <span className="cursor-pointer hover:text-white">•••</span>
        <span className="cursor-pointer hover:text-white">✎</span>
        <span className="cursor-pointer hover:text-white rotate-[270deg]">➤</span>
      </div>
    </div>
  );
}