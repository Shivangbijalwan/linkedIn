import Link from "next/link";


export function User() {
    return (
        <div className="flex flex-col gap-4 w-full">

            {/* Profile Card */}
            <Link href="/profile">
                <div className="bg-[#1b1f23] rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full">

                    <img src="banner.jpg" className="h-20 xs:h-24 sm:h-32 w-full object-cover" alt="banner" />
                    <img
                        src="profile.jpg"
                        className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full relative z-20 -mt-7 sm:-mt-10 md:-mt-12 ml-3 sm:ml-6 md:ml-8 border-2 border-black"
                        alt="Profile"
                    />

                    <div className="flex flex-col items-start gap-1 mx-3 sm:mx-6 md:mx-8 mt-2 sm:mt-4 pb-5">
                        <span className="text-base sm:text-xl md:text-2xl font-semibold leading-tight">
                            Shivang Bijalwan
                        </span>
                        <span className="text-xs sm:text-sm text-white font-light leading-relaxed">
                            💻 Web Developer | Building SaaS Products | Creator of TTA |{" "}
                            <br className="hidden sm:block" />
                            JS • Django • Tailwind CSS • Python
                        </span>
                        <span className="text-xs sm:text-sm text-gray-400 font-medium">
                            Dehradun, Uttarakhand, India
                        </span>
                        <span className="text-xs sm:text-sm text-blue-300 font-semibold mt-1">
                            500+ Connections
                        </span>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-2 mt-3 w-full">
                            <button className="bg-blue-400 text-black px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-300 transition-colors whitespace-nowrap">
                                <span className="flex items-center gap-1">
                                    <span className="rotate-300 inline-block">➤</span> Message
                                </span>
                            </button>
                            <button className="border border-blue-300 text-blue-300 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:border-2 transition-colors whitespace-nowrap">
                                + Follow
                            </button>
                            <button className="border border-white text-white px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:border-2 transition-colors whitespace-nowrap">
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </Link>

            {/* About Section */}
            <div className="bg-[#1b1f23] rounded-2xl p-4 sm:p-5 md:p-6 w-full">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3">About</h2>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    I'm a passionate Web Developer focused on building scalable SaaS products
                    and modern web experiences. I specialize in JavaScript, Python, Django, and
                    Tailwind CSS. Currently building TTA and helping businesses grow through
                    clean, performant web applications.
                </p>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mt-3">
                    Open to freelance projects, collaborations, and full-time opportunities.
                    Let's build something great together.
                </p>
            </div>

            {/* Activity Section */}
            <div className="bg-[#1b1f23] rounded-2xl p-4 sm:p-5 md:p-6 w-full">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold">Activity</h2>
                        <span className="text-xs text-blue-300 font-medium">500+ followers</span>
                    </div>
                    <button className="border border-blue-300 text-blue-300 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:border-2 transition-colors whitespace-nowrap">
                        + Follow
                    </button>
                </div>

                <div className="flex flex-col gap-3">

                    {/* Post 1 — with document image */}
                    <div className="border border-[#2a2f35] rounded-xl overflow-hidden hover:border-gray-500 transition-colors">
                        {/* Post Header */}
                        <div className="flex items-start justify-between gap-2 p-3 sm:p-4">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <img
                                    src="profile.jpg"
                                    className="h-9 w-9 sm:h-11 sm:w-11 rounded-full object-cover flex-shrink-0"
                                    alt="Shivang Bijalwan"
                                />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs sm:text-sm font-semibold leading-tight">Shivang Bijalwan</span>
                                    <span className="text-[10px] sm:text-xs text-gray-400 leading-tight">💻 Web Developer | Building SaaS Products | Creator of TTA |</span>
                                    <span className="text-[10px] sm:text-xs text-gray-500">4d· 🌐</span>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-white transition-colors flex-shrink-0 text-lg leading-none">
                                ...
                            </button>
                        </div>

                        {/* Post Text */}
                        <div className="px-3 sm:px-4 pb-3">
                            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                                My first FREE SaaS product is officially LIVE!

                                Introducing TTA (Text To Audio) 🔊
                                A fast, simple, and accessible way to convert text into high-quality
                                audio in seconds
                                <span className="text-gray-500">... </span>
                                <button className="text-gray-400 hover:text-white text-xs transition-colors">more</button>
                            </p>
                        </div>

                        {/* Document Preview */}
                        <div className="mx-3 sm:mx-4 mb-3 border border-[#2a2f35] rounded-xl overflow-hidden">
                            <img src="tta.png" className="w-full h-auto object-cover" alt="TTA Preview" />
                        </div>

                        {/* Post Footer */}
                        <div className="px-3 sm:px-4 pb-3 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <span className="text-xs sm:text-sm">🏅</span>
                                <span className="text-xs text-gray-400">18</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-400">
                                <span>2 comments</span>
                                <span>·</span>
                                <span>1 repost</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="border-t border-[#2a2f35] px-2 py-1 flex items-center justify-around">
                            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#2a2f35] transition-colors text-gray-400 hover:text-white">
                                <span className="text-base"><img src="like.png" alt="Like" className="w-5 h-5 invert" /></span>
                                <span className="text-[10px] sm:text-xs font-medium">Like</span>
                            </button>
                            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#2a2f35] transition-colors text-gray-400 hover:text-white">
                                <span className="text-base"><img src="comment.svg" alt="Comment" className="w-5 h-5 invert" /></span>
                                <span className="text-[10px] sm:text-xs font-medium">Comment</span>
                            </button>
                            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#2a2f35] transition-colors text-gray-400 hover:text-white">
                                <span className="text-base"><img src="repost.svg" alt="Repost" className="w-5 h-5 invert" /></span>
                                <span className="text-[10px] sm:text-xs font-medium">Repost</span>
                            </button>
                            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#2a2f35] transition-colors text-gray-400 hover:text-white">
                                <span className="text-base"><img src="share.svg" alt="Send" className="w-5 h-5 invert" /></span>
                                <span className="text-[10px] sm:text-xs font-medium">Send</span>
                            </button>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="border border-[#2a2f35] rounded-xl p-3 sm:p-4 flex flex-col gap-2 hover:border-gray-500 transition-colors">
                        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                            Tailwind CSS v4 is a game changer. Tried it on a new project today — the new config-less setup is 🔥
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                            <span className="text-xs text-gray-500">5 days ago</span>
                            <span className="text-xs text-gray-400">👍 91</span>
                            <span className="text-xs text-gray-400">💬 23</span>
                        </div>
                    </div>

                    {/* Post 3 */}
                    <div className="border border-[#2a2f35] rounded-xl p-3 sm:p-4 flex flex-col gap-2 hover:border-gray-500 transition-colors">
                        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                            Building in public update: 200 users on TTA this month. Starting from 0, every single user matters 🙏
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                            <span className="text-xs text-gray-500">1 week ago</span>
                            <span className="text-xs text-gray-400">👍 134</span>
                            <span className="text-xs text-gray-400">💬 41</span>
                        </div>
                    </div>

                </div>

                <button className="mt-4 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors font-medium">
                    Show all posts →
                </button>
            </div>

            {/* Skills Section */}
            <div className="bg-[#1b1f23] rounded-2xl p-4 sm:p-5 md:p-6 w-full">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold">Skills</h2>

                </div>

                <div className="flex flex-col divide-y divide-[#2a2f35]">

                    {/* Skill 1 */}
                    <div className="flex items-center justify-between gap-2 py-3">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs sm:text-sm font-medium">JavaScript</span>
                                <span className="text-[10px] bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">Top skill</span>
                            </div>
                            <span className="text-xs text-gray-400">42 endorsements</span>
                        </div>

                    </div>

                    {/* Skill 2 */}
                    <div className="flex items-center justify-between gap-2 py-3">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs sm:text-sm font-medium">Python</span>
                                <span className="text-[10px] bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">Top skill</span>
                            </div>
                            <span className="text-xs text-gray-400">38 endorsements</span>
                        </div>

                    </div>

                    {/* Skill 3 */}
                    <div className="flex items-center justify-between gap-2 py-3">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-xs sm:text-sm font-medium">Django</span>
                            <span className="text-xs text-gray-400">29 endorsements</span>
                        </div>

                    </div>

                </div>

                <button className="mt-3 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors font-medium">
                    Show all skills →
                </button>
            </div>

        </div>
    );
}