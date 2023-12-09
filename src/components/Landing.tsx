import Image from "next/image";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
  
  return (
    <div className="h-screen flex flex-row justify-evenly items-center">
      <Image
        loading='lazy'
        className="drop-shadow-xl z-10 mt-16 select-nonefs"
        src={"/Main2.svg"}
        alt="screen.js"
        width={256}
        height={1}
      />
      <div className="z-20">
        <h1 className="bg-white p-4 rounded-full mt-32 text-5xl font-bold animate-fade-up animate-once animate-duration-500 animate-ease-out">번개모임은? 번쩍파이와 함께!</h1>
        <div className="animate-fade-up animate-once animate-duration-500 animate-ease-out flex mt-8">
          <Image
            loading='lazy'
            className="ml-auto"
            width={148}
            height={1}
            src={"/playstore.png"}
            alt="store"
          />
          <img className="" src="appstore.svg" alt="My Happy SVG" />
        </div>
      </div>
      <div className="rounded-3xl bg-slate-200 w-64 h-64 rotate-45 absolute left-0 z-0"></div>
      <div className="rounded-full bg-red-300 w-64 h-64 -rotate-12 absolute left-[24vw] top-40 z-0"></div>
      <div className="rounded-full bg-green-300 w-64 h-64 -rotate-12 absolute left-[80vw] top-40 z-0"></div>
      <div className="rounded-3xl bg-yellow-300 w-64 h-64 rotate-45 absolute left-[56vw] top-40 z-0"></div>
      <div className="rounded-3xl bg-blue-300 w-64 h-64 -rotate-6 absolute left-[36vw] top-96 z-0"></div>
    </div>
  );
};

export default Landing;
