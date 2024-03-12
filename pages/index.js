'use client';
import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Blog from "./blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hunting Coder</title>
      </Head>
      <main
        className={`flex flex-col items-center justify-between p-20 ${inter.className}`}
      >
        <h1 className="font-bold text-4xl lg:text-6xl text-shadow">Hunter Coder</h1>
         <Image
            src={"/coding.avif"}
            width={237}
            height={158}
            className="rounded-md mt-10 mb-10"
            alt="Coding Image"
          />

        <Blog/>

      </main>
    </div>
  );
}
