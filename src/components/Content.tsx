"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Image from "next/image";

type Props = {};

const Content = (props: Props) => {
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
    <div className="h-screen bg-slate-50 flex flex-row justify-evenly items-center">
      <div className="h-96 flex flex-col justify-evenly">
        <div className="m-4 text-5xl font-bold">
          <span>번개모임, 이제&nbsp;</span>
          <span className="bg-amber-300">간단하게</span>
          <span>&nbsp;모여봐요</span>
        </div>
        <div className="m-4 text-lg text-gray-600">
          <div>번개 시작부터 끝까지 번쩍파이가 도와드릴게요.</div>
          <div>
            번쩍파이를 사용하면 모임에 필요한 모든 기능을 쉽고 빠르게
            만나볼 수 있습니다.
          </div>
        </div>
        <div className="text-lg font-bold text-gray-600">
          <div className="m-4">✅ 빠르게 이벤트를 만들고 손쉽게 공유하세요</div>
          <div className="m-4">
          ✅ 참가자 관리와 홍보를 한 곳에서 해보세요.
          </div>
          <div className="m-4">
            ✅ 정산 기능으로 빠르게 결제하세요.
          </div>
        </div>
      </div>
      <div>
        <Image
          className="drop-shadow-xl rounded-3xl"
          alt="Hi"
          src={"/Main.svg"}
          width={256}
          height={1}
        />
      </div>
      {/* <div ref={ref} className="flex flex-row w-full justify-evenly">

      </div> */}
    </div>
  );
};

export default Content;
