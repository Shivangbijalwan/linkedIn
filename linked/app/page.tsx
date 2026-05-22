import Image from "next/image";
import { Nav } from "@/components/nav";
import { User } from "@/components/first";
import { Content } from "@/components/second";
import { News } from "@/components/third";
import { MessagingBar } from "@/components/message";


export default function Home() {
  return (
    <div>
      <Nav />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto px-4 mt-6">
        <div className="md:col-span-3"><User /></div>
        <div className="md:col-span-6"><Content /></div>
        <div className="md:col-span-3"><News /></div>
      </main>
      <MessagingBar />
    </div>
  );
}