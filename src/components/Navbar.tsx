import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed top-0 z-30 w-full h-[64px] bg-white drop-shadow-md flex flex-row items-center">
      <div className="flex mx-auto font-bold text-xl"><img loading='lazy' className="mr-2 w-8 h-7" src="/logo.svg"/>번쩍파이</div>
      <div className="mx-auto">
        <Link href={"#"} className="text-gray-600 mx-4 p-3 hover:bg-slate-100 rounded-md">
          회사 소개
        </Link>
        <Link href={"#"} className="text-gray-600 mx-4 p-3 hover:bg-slate-100 rounded-md">
          FQA
        </Link>
        <Link href={"#"} className="text-gray-600 mx-4 p-3 hover:bg-slate-100 rounded-md">
          고객센터
        </Link>
        <Link href={"#"} className="text-gray-600 mx-4 p-3 hover:bg-slate-100 rounded-md">
          채용
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
