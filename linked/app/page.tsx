import { Nav } from "@/components/nav";
import { User } from "@/components/first";
import { Content } from "@/components/second";
import { News } from "@/components/third";
import { MessagingBar } from "@/components/message";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Nav />

      <main className="max-w-7xl mx-auto px-2 sm:px-4 mt-4 lg:mt-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Left Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20">
              <User />
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-span-1 lg:col-span-6">
            <Content />
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20">
              <News />
            </div>
          </div>

        </div>
     
      </main>
   <div> <Footer /> </div>
      <MessagingBar />
    </div>
    <div></div>
  );
}
