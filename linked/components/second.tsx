export function Content() {
  return (
    <div className="col-span-6 flex flex-col gap-3 items-center w-full">

      {/* Create Post Card */}
      <div className="bg-[#1b1f23] w-full max-w-2xl p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            src="profile.jpg"
            className="h-12 w-12 rounded-full shrink-0"
            alt="Profile"
          />
          <div className="border border-gray-600 w-full p-3 pl-5 font-semibold rounded-full cursor-pointer text-gray-400 hover:border-gray-400 transition-colors">
            Start a post
          </div>
        </div>

        <div className="w-full mt-4 flex justify-between items-center gap-4 px-6">
          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
            <img src="youtube.svg" className="h-5 w-5 invert" alt="" />
            <span className="text-sm text-gray-400 font-semibold">Video</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
            <img src="  img.svg" className="h-5 w-5 invert" alt="" />
            <span className="text-sm text-gray-400 font-semibold">Photo</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
            <img src="article.svg" className="h-5 w-5 invert" alt="" />
            <span className="text-sm text-gray-400 font-semibold">Article</span>
          </div>
        </div>
      </div>

      {/* Post Card — reusable structure */}
      <PostCard
        avatar="mannu arora.jpg"
        name="Mannu Arora"
        bio="Founder at Aceternity | Building products and web apps that can impact millions of lives."
        time="1d"
        body="See the different approach of writing the code. the difference of Senior Er and junior ...more"
        postImg="mannu post.jpg"
        likes="213"
        comments="1021"
      />

      <PostCard
        avatar="akshay saini.jpg"
        name="Akshay Saini"
        bio="Teacher | YouTuber (2.1M+)"
        time="3d"
        body="See how Javascript help you in building things and make your projects ...more"
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
  return (
    <div className="border border-gray-700 bg-[#1b1f23] w-full max-w-2xl p-4 rounded-lg">

      {/* Author Row */}
      <div className="flex items-start gap-3">
        <img src={avatar} className="h-12 w-12 rounded-full shrink-0" alt={name} />
        <div className="flex flex-col gap-0.5">
          <span className="text-base font-semibold">{name}</span>
          <span className="text-sm text-gray-300">{bio}</span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-xs text-gray-400">{time}</span>
            <img src=" world.svg" className="h-3 w-3 invert" alt="Public" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-4">
        <p className="text-sm text-gray-300">{body}</p>
        <img src={postImg} className="h-auto w-full mt-4 rounded-lg object-cover" alt="Post" />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-4 px-2">
        <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
          <img src="like.svg" className="h-5 w-5 invert" alt="" />
          <span className="text-sm text-gray-400 font-semibold">{likes}</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
          <img src="comment.svg" className="h-5 w-5 invert" alt="" />
          <span className="text-sm text-gray-400 font-semibold">{comments}</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
          <img src="repost.svg" className="h-5 w-5 invert" alt="" />
          <span className="text-sm text-gray-400 font-semibold">Repost</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
          <img src="share.svg" className="h-5 w-5 invert" alt="" />
          <span className="text-sm text-gray-400 font-semibold">Share</span>
        </div>
      </div>

    </div>
  );
}