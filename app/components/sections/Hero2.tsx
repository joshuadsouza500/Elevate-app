import Link from "next/link";
import React from "react";
import { MotionDiv, Motionh1, MotionP } from "../MotionDiv";
import NavBar from "../Navbar";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import path from "path";

function Hero2() {
  return (
    <section
      id="Home"
      className="flex flex-col  justify-start items-start h-[100vh] lg:h-auto   bg-cover   max-lg:bg-[url('/Blob2.svg')] bg-center bg-no-repeat mx-1 max-lg:rounded-2xl max-md:px-2"
    >
      <div className="w-full   h-full flex flex-col text-center items-center bg-cover justify-center lg:pt-32 xl:pt-24  pb-6 max:bg-[url('/Blob1.svg')] bg-opacity-50 bg-center bg-no-repeat    rounded-2xl">
        <h1 className=" text-stone-950 leading-[1.15] lg:leading-[1.1]   font-semibold capitalize text-4xl   lg:text-5xl  2xl:text-6xl  ">
          Elevate your brand,
          <br className="md:block hidden 2xl:block" />{" "}
          <span className="text-indigo-600 ">captivate</span> your audience!
        </h1>

        <p className=" hidden lg:block pl-1 lg:w-4/5 text-opacity-80 text-stone-950 mt-4 mb-7  capitalize  lg:leading-relaxed">
          Unlock the Full Potential of Your Brand through Tailored Strategies
          that Engage and Inspire.
        </p>
        <p className="w-4/6 text-xs sm:text-sm mt-2 mb-4  sm:mt-4 text-opacity-80 text-slate-950 lg:hidden">
          Unlock Your {"Brand's"} Potential with Tailored Strategies that Engage
          and Inspire
        </p>
        <button className="group lg:w-36 border-zinc-800 text-background rounded-full  px-3 py-2  bg-gradient-to-br shadow-sm from-Purple to-zinc-300 hover:border-white">
          <Link href="/contact" className="  flex items-center">
            Contact me
            <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
          </Link>
        </button>
      </div>
      <section className="lg:hidden w-full h-[50%]  flex justify-between gap-x-8 overflow-hidden  ">
        <div className="h-auto w-32 bg-[url('/Home/hhh.jpeg')] bg-center bg-no-repeat rounded-xl" />
        <div className="h-auto my-6 w-52  bg-[url('/Home/home2.jpeg')] bg-center bg-no-repeat rounded-xl" />
        <div className="h-auto w-32 bg-[url('/Macy/macy2.jpeg')] bg-center bg-no-repeat rounded-xl" />
      </section>
    </section>
  );
}

export default Hero2;
{
  /**<div className="w-28 h-16 rounded-tl-xl bg-background bottom-0 right-0 absolute pl-2">
          <h6 className="text-sm stat-value">
            200+ <br /> Projects completed
          </h6>{" "}
        </div> */
}
