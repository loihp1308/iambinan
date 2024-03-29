"use client"

import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
          
        </div>
      </div>

     
      <div className="text-transparent text-6xl bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600">
        <TypewriterComponent
          options={{
            strings: [
              "Xin chào bạn",
              "Tôi là Bình An",
              "Đợi một chút, tôi đang hoàn thiện website này",
              "Cảm ơn bạn đã ghé thăm",
              "Hẹn gặp lại bạn sau",
            ],
            autoStart: true,
            loop: true
          }}
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       

      </div>
    </main>
  );
}
