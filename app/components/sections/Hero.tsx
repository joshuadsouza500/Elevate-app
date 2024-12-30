import Link from "next/link";
import React from "react";
import { MotionDiv, Motionh1, MotionP } from "../MotionDiv";
import NavBar from "../Navbar";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row justify-start items-start h-[100vh] md:h-auto   bg-cover   max-md:bg-[url('/Blob2.svg')] bg-center bg-no-repeat"
    >
      <div className="w-full md:w-1/2  h-full flex flex-col max-md:text-center max-md:items-center bg-cover justify-center md:pt-32 xl:pt-40 pb-6 max-md:bg-[url('/Blob1.svg')] bg-opacity-50 bg-center bg-no-repeat ">
        <h1 className=" text-stone-950 leading-[1.15] md:leading-[1.1]   font-semibold capitalize text-4xl   md:text-5xl  2xl:text-6xl  ">
          Elevate your brand,
          <br className="hidden 2xl:block" />{" "}
          <span className="text-indigo-600 ">captivate</span> your audience!
        </h1>

        <p className=" hidden md:block pl-1 lg:w-4/5 text-opacity-80 text-stone-950 mt-4 mb-7  capitalize  lg:leading-relaxed">
          Unlock the Full Potential of Your Brand through Tailored Strategies
          that Engage and Inspire.
        </p>
        <p className="w-4/6 text-xs sm:text-sm mt-2 mb-5  sm:mt-4 text-opacity-80 text-slate-950 md:hidden">
          Unlock Your {"Brand's"} Potential with Tailored Strategies that Engage
          and Inspire
        </p>
        <button className="group md:w-36 border-zinc-800 text-background rounded-full  px-3 py-2  bg-gradient-to-br shadow-sm from-Purple to-zinc-500 hover:border-white">
          <Link href="/contact" className="  flex items-center">
            Contact me
            <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
          </Link>
        </button>
      </div>
      <section className="md:hidden w-full h-[50%]  flex justify-between gap-x-8 overflow-hidden  ">
        <div className="h-auto w-32 bg-[url('/Home/hhh.jpeg')] bg-center bg-no-repeat rounded-xl" />
        <div className="h-auto my-6 w-52  bg-[url('/Home/home2.jpeg')] bg-center bg-no-repeat rounded-xl" />
        <div className="h-auto w-32 bg-[url('/Macy/macy2.jpeg')] bg-center bg-no-repeat rounded-xl" />
      </section>
      <div className="hidden md:block h-full w-1/2 aspect-square  bg-[url('/Box.svg')]  bg-center bg-no-repeat relative">
        <div className="w-28 h-16 rounded-tl-xl bg-background bottom-0 right-0 absolute pl-2">
          <h6 className="text-sm stat-value">
            200+ <br /> Projects completed
          </h6>{" "}
        </div>
        ;
      </div>
    </section>
  );
}

export default Hero;
{
  /** */
}
