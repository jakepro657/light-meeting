"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const ContentSecond = (props: Props) => {
  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const ref = useRef<any>();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //     },
  //     // { rootMargin: "-300px" }
  //   );
  //   console.log(isIntersecting);
  //   observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     ref.current.className = "flex flex-row w-full justify-evenly animate-fade-up animate-once animate-duration-1000 animate-ease-out"
  //   } else {
  //     ref.current.className = "flex flex-row w-full justify-evenly"
  //   }
  // }, [isIntersecting]);

  return (
    <div className="h-screen bg-slate-200 flex flex-row justify-evenly items-center">
      <div>
        <Image
          className="drop-shadow-xl rounded-3xl"
          alt="Hi"
          src={"/Upload.svg"}
          width={256}
          height={1}
        />
      </div>
      <div className="h-96 flex flex-col justify-evenly">
        <div className="m-4 text-5xl font-bold">

          <span className="bg-amber-300">3분 만에 만드는</span>
          <span>&nbsp;이벤트</span>
        </div>
        <div className="m-4 text-lg text-gray-600">
          <div>회원가입 후 번개모임을 생성할 때까지 단 3분.</div>
          <div>
          복잡한 과정 없이 나만의 모임, 나만의 이벤트를 만들 수 있습니다.
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-600">
          <Link href={"#"} className="m-4">더 알아보기 ➡️</Link>
      </div>
      
      </div>
      {/* <div ref={ref} className="flex flex-row w-full justify-evenly">

      </div> */}
    </div>
  );
};

export default ContentSecond;
