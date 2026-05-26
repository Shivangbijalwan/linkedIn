import { Nav } from "@/components/nav";
import { User } from "@/components/profilefirst";
import { News } from "@/components/third";
import { MessagingBar } from "@/components/message";
import { Footer } from "@/components/footer";

export default function ProfilePage() {
  return (
    <div>
      <Nav />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-6xl mx-auto px-4 mt-4">
        {/* Left Sidebar */}
        <div className=" lg:col-span-8">
          <User />
        </div>

        {/* Right Sidebar (add later) */}
        <div className=" lg:col-span-3 sticky top-20 h-max rounded-lg p-4 bg-[#1b1f23]">
          <News />
        </div>
      </div>
      <div> <Footer /> </div>
      <MessagingBar />
    </div>
 
  );
}