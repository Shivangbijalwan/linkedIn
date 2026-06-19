"use client";

import { useState } from "react";
import Link from "next/link";

export function Content() {
  return (
    <div className="w-full lg:col-span-6 flex flex-col gap-4 items-center px-2 sm:px-4">

      {/* Create Post Card */}
      <div className="bg-[#1b1f23] w-full max-w-2xl p-3 sm:p-4 rounded-xl border border-gray-800">
        <div className="flex items-center gap-3">
          <Link href="/profile">
            <img
              src="profile.jpg"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shrink-0 object-cover"
              alt="Profile"
            />
          </Link>
          <div className="border border-gray-600 w-full p-2.5 sm:p-3 pl-4 sm:pl-5 text-sm sm:text-base font-semibold rounded-full cursor-pointer text-gray-400 hover:border-gray-400 transition-colors">
            Start a post
          </div>
        </div>

        {/* Create Options */}
        <div className="w-full mt-4 grid grid-cols-3 gap-2">
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 sm:px-3 py-2 rounded-lg transition-colors">
            <img src="youtube.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
            <span className="text-xs sm:text-sm text-gray-400 font-semibold">Video</span>
          </div>
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 sm:px-3 py-2 rounded-lg transition-colors">
            <img src="img.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
            <span className="text-xs sm:text-sm text-gray-400 font-semibold">Photo</span>
          </div>
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 sm:px-3 py-2 rounded-lg transition-colors">
            <img src="article.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
            <span className="text-xs sm:text-sm text-gray-400 font-semibold">Article</span>
          </div>
        </div>
      </div>

      {/* Posts */}
      <PostCard
        avatar="mannu arora.jpg"
        name="Mannu Arora"
        bio="Founder at Aceternity | Building products and web apps that can impact millions of lives."
        time="1d"
        body="See the different approach of writing the code. The difference between senior and junior developers."
        postImg="mannu post.jpg"
        likes="213"
        comments="1021"
      />

      <PostCard
        avatar="akshay saini.jpg"
        name="Akshay Saini"
        bio="Teacher | YouTuber (2.1M+)"
        time="3d"
        body="See how Javascript helps you in building things and making scalable projects."
        postImg="akshay post.png"
        likes="927"
        comments="103"
      />

    </div>
  );
}

interface PostCardProps {
  avatar: string;
  name: string;
  bio: string;
  time: string;
  body: string;
  postImg?: string;
  likes: string;
  comments: string;
}

function PostCard({ avatar, name, bio, time, body, postImg, likes, comments }: PostCardProps) {
  // ✅ State now lives inside PostCard where all variables are in scope
  const [showStory, setShowStory] = useState(false);

  return (
    <div className="border border-gray-700 bg-[#1b1f23] w-full max-w-2xl rounded-xl overflow-hidden">

      {showStory && postImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setShowStory(false)}
        >
          <div
            className="relative w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowStory(false)}
              className="absolute top-2 right-3 text-white text-3xl z-10"
            >
              ×
            </button>

            <div className="bg-[#1b1f23] rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4">
                <img
                  src={avatar}
                  className="h-10 w-10 rounded-full object-cover"
                  alt={name}
                />
                <div>
                  <p className="text-white font-semibold">{name}</p>
                  <p className="text-gray-400 text-xs">{time}</p>
                </div>
              </div>

              <img
                src={postImg}
                className="w-full max-h-[80vh] object-cover"
                alt="Story"
              />
            </div>
          </div>
        </div>
      )}

      <div className="p-3 sm:p-4">
        <div className="flex items-start gap-3">
       
          <div
            onClick={() => setShowStory(true)}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shrink-0 cursor-pointer"
          >
            <img
              src={avatar}
              className="h-full w-full rounded-full object-cover border-2 border-[#1b1f23]"
              alt={name}
            />
          </div>

          <div className="flex flex-col gap-0.5 min-w-0 flex-1">
            <div className="flex items-center justify-between w-full gap-2">
              <span className="text-sm sm:text-base font-semibold truncate">{name}</span>
              <FollowButton />
            </div>
            <span className="text-xs sm:text-sm text-gray-300 line-clamp-2 block">{bio}</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs text-gray-400">{time}</span>
              <img src="world.svg" className="h-3 w-3 invert opacity-70" alt="Public" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-300 leading-relaxed break-words">{body}</p>
        </div>
      </div>

      {postImg && (
        <img src={postImg} className="w-full max-h-[500px] object-cover" alt="Post" />
      )}

      <div className="grid grid-cols-4 gap-1 sm:gap-2 p-2 sm:p-3 border-t border-gray-700">
        <LikeButton likes={likes} />
        <ActionButton icon="comment.svg" text={comments} />
        <ActionButton icon="repost.svg" text="Repost" />
        <ActionButton icon="share.svg" text="Share" />
      </div>

    </div>
  );
}

function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <button
      onClick={() => setFollowing((prev) => !prev)}
      className={`text-xs sm:text-sm font-bold transition-colors shrink-0 ${
        following ? "text-gray-400" : "text-blue-400"
      }`}
    >
      {following ? "✓ Following" : "+ Follow"}
    </button>
  );
}

function LikeButton({ likes }: { likes: string }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(Number(likes));

  const handleClick = () => {
    if (!liked) {
      setLiked(true);
      setCount((prev) => prev + 1);
    } else {
      setLiked(false);
      setCount((prev) => prev - 1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 py-2 rounded-lg transition-colors"
    >
      <img
        src={liked ? "afterlike.png" : "like.png"}
        className={`h-4 w-4 sm:h-5 sm:w-5 ${!liked ? "invert" : ""}`}
        alt="Like"
      />
      <span className="text-[11px] sm:text-sm text-gray-400 font-semibold truncate">
        {count}
      </span>
    </button>
  );
}

function ActionButton({
  icon,
  text,
  onClick,
}: {
  icon: string;
  text: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 py-2 rounded-lg transition-colors"
    >
      <img src={icon} className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
      <span className="text-[11px] sm:text-sm text-gray-400 font-semibold truncate">{text}</span>
    </div>
  );
}