export function Content() {
  return (
    <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 items-center w-full px-2 sm:px-4">

      {/* Create Post Card */}
      <div className="bg-[#1b1f23] w-full max-w-2xl p-3 sm:p-4 rounded-xl">
        <div className="flex items-center gap-3">
          <img
            src="profile.jpg"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shrink-0"
            alt="Profile"
          />

          <div className="border border-gray-600 w-full p-2.5 sm:p-3 pl-4 sm:pl-5 text-sm sm:text-base font-semibold rounded-full cursor-pointer text-gray-400 hover:border-gray-400 transition-colors">
            Start a post
          </div>
        </div>

        {/* Create Options */}
        <div className="w-full mt-4 flex items-center justify-between gap-2 sm:gap-4">

          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-2 sm:px-3 py-2 rounded-lg transition-colors">
            <img src="youtube.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
            <span className="text-xs sm:text-sm text-gray-400 font-semibold">
              Video
            </span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-2 sm:px-3 py-2 rounded-lg transition-colors">
            <img src="img.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
            <span className="text-xs sm:text-sm text-gray-400 font-semibold">
              Photo
            </span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/5 px-2 sm:px-3 py-2 rounded-lg transition-colors">
            <img src="article.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
            <span className="text-xs sm:text-sm text-gray-400 font-semibold">
              Article
            </span>
          </div>

        </div>
      </div>

      {/* Posts */}
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

function PostCard({
  avatar,
  name,
  bio,
  time,
  body,
  postImg,
  likes,
  comments,
}: PostCardProps) {
  return (
    <div className="border border-gray-700 bg-[#1b1f23] w-full max-w-2xl p-3 sm:p-4 rounded-xl">

      {/* Author Row */}
      <div className="flex items-start gap-3">
        <img
          src={avatar}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shrink-0 object-cover"
          alt={name}
        />

        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-sm sm:text-base font-semibold truncate">
            {name}
          </span>

          <span className="text-xs sm:text-sm text-gray-300 line-clamp-2">
            {bio}
          </span>

          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-xs text-gray-400">{time}</span>

            <img
              src="world.svg"
              className="h-3 w-3 invert"
              alt="Public"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          {body}
        </p>

        {postImg && (
          <img
            src={postImg}
            className="h-auto w-full mt-4 rounded-lg object-cover max-h-[500px]"
            alt="Post"
          />
        )}
      </div>

      {/* Actions */}
      <div className="grid grid-cols-4 gap-1 sm:gap-2 mt-4">

        <div className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 py-2 rounded-lg transition-colors">
          <img src="like.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
          <span className="text-xs sm:text-sm text-gray-400 font-semibold">
            {likes}
          </span>
        </div>

        <div className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 py-2 rounded-lg transition-colors">
          <img src="comment.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
          <span className="text-xs sm:text-sm text-gray-400 font-semibold">
            {comments}
          </span>
        </div>

        <div className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 py-2 rounded-lg transition-colors">
          <img src="repost.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
          <span className="hidden sm:block text-sm text-gray-400 font-semibold">
            Repost
          </span>
        </div>

        <div className="flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 px-2 py-2 rounded-lg transition-colors">
          <img src="share.svg" className="h-4 w-4 sm:h-5 sm:w-5 invert" alt="" />
          <span className="hidden sm:block text-sm text-gray-400 font-semibold">
            Share
          </span>
        </div>

      </div>
    </div>
  );
}