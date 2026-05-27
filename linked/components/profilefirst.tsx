"use client";

import Link from "next/link";
import { useState } from "react";

export function User() {

    const [liked, setLiked] = useState(false);

    const [followProfile, setFollowProfile] = useState(false);
    const [followActivity, setFollowActivity] = useState(false);

    return (
        <div className="flex flex-col gap-4 w-full">

            {/* Profile Card */}
            <Link href="/profile">
                <div className="bg-[#1b1f23] rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full">

                    <img
                        src="banner.jpg"
                        className="h-20 xs:h-24 sm:h-32 w-full object-cover"
                        alt="banner"
                    />

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
                                    <span className="rotate-300 inline-block">➤</span>
                                    Message
                                </span>
                            </button>

                            {/* Follow Button 1 */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setFollowProfile(!followProfile);
                                }}
                                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 border
                                
                                ${followProfile
                                        ? "bg-gray-700 text-white border-gray-600"
                                        : "border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-black"
                                    }
                                `}
                            >
                                {followProfile ? "✓ Following" : "+ Follow"}
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

                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                    About
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    I'm a passionate Web Developer focused on building scalable SaaS products
                    and modern web experiences. I specialize in JavaScript, Python, Django, and
                    Tailwind CSS.
                </p>

            </div>

            {/* Activity Section */}
            <div className="bg-[#1b1f23] rounded-2xl p-4 sm:p-5 md:p-6 w-full">

                <div className="flex items-center justify-between mb-4">

                    <div>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                            Activity
                        </h2>

                        <span className="text-xs text-blue-300 font-medium">
                            500+ followers
                        </span>
                    </div>

                    {/* Follow Button 2 */}
                    <button
                        onClick={() => setFollowActivity(!followActivity)}
                        className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 border
                        
                        ${followActivity
                                ? "bg-gray-700 text-white border-gray-600"
                                : "border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-black"
                            }
                        `}
                    >
                        {followActivity ? "✓ Following" : "+ Follow"}
                    </button>

                </div>

                <div className="flex flex-col gap-3">

                    {/* Post */}
                    <div className="border border-[#2a2f35] rounded-xl overflow-hidden hover:border-gray-500 transition-colors">

                        {/* Header */}
                        <div className="flex items-start justify-between gap-2 p-3 sm:p-4">

                            <div className="flex items-start gap-2 sm:gap-3">

                                <img
                                    src="profile.jpg"
                                    className="h-9 w-9 sm:h-11 sm:w-11 rounded-full object-cover flex-shrink-0"
                                    alt="Shivang Bijalwan"
                                />

                                <div className="flex flex-col min-w-0">

                                    <span className="text-xs sm:text-sm font-semibold leading-tight">
                                        Shivang Bijalwan
                                    </span>

                                    <span className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                                        💻 Web Developer | Creator of TTA
                                    </span>

                                    <span className="text-[10px] sm:text-xs text-gray-500">
                                        4d · 🌐
                                    </span>

                                </div>

                            </div>

                            <button className="text-gray-400 hover:text-white transition-colors flex-shrink-0 text-lg leading-none">
                                ...
                            </button>

                        </div>

                        {/* Text */}
                        <div className="px-3 sm:px-4 pb-3">

                            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                                My first FREE SaaS product is officially LIVE!
                            </p>

                        </div>

                        {/* Image */}
                        <div className="mx-3 sm:mx-4 mb-3 border border-[#2a2f35] rounded-xl overflow-hidden">

                            <img
                                src="tta.png"
                                className="w-full h-auto object-cover"
                                alt="TTA Preview"
                            />

                        </div>

                        {/* Footer */}
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

                            {/* Like Button */}
                            <button
                                onClick={() => setLiked(!liked)}
                                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#2a2f35] transition-colors text-gray-400 hover:text-white"
                            >

                                <img
                                    src={liked ? "afterlike.png" : "like.png"}
                                    alt="Like"
                                    className="w-5 h-5 invert"
                                />

                                <span className="text-[10px] sm:text-xs font-medium">
                                    {liked ? "Liked" : "Like"}
                                </span>

                            </button>

                            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#2a2f35] transition-colors text-gray-400 hover:text-white">
                                <img src="comment.svg" alt="Comment" className="w-5 h-5 invert" />
                                <span className="text-[10px] sm:text-xs font-medium">Comment</span>
                            </button>

                            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#2a2f35] transition-colors text-gray-400 hover:text-white">
                                <img src="repost.svg" alt="Repost" className="w-5 h-5 invert" />
                                <span className="text-[10px] sm:text-xs font-medium">Repost</span>
                            </button>

                            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#2a2f35] transition-colors text-gray-400 hover:text-white">
                                <img src="share.svg" alt="Send" className="w-5 h-5 invert" />
                                <span className="text-[10px] sm:text-xs font-medium">Send</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}