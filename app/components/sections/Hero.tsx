import Link from "next/link";
import React from "react";
import { MotionDiv, Motionh1, MotionP } from "../MotionDiv";
import NavBar from "../Navbar";
import { ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row justify-between items-start h-auto    "
    >
      <div className="w-full md:w-1/2  h-full flex flex-col max-md:text-center max-md:items-center justify-center pt-44 pb-6">
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
        <button className="group  border-zinc-800 text-background rounded-full  px-3 py-2  bg-gradient-to-br shadow-sm from-purple-900 to-zinc-500 hover:border-white">
          <Link href="/contact" className="  flex items-center">
            Contact me
            <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
          </Link>
        </button>
      </div>
      <div className="hidden md:block md:w-1/2 aspect-square bg-Purple  relative rounded-xl bg-[url('/team.jpg')] bg-cover bg-center shadow-lg">
        <div className="w-24 h-16 rounded-br-xl bg-background top-0 left-0 absolute" />

        <div className="w-28 h-16 rounded-tl-xl bg-background bottom-0 right-0 absolute pl-2">
          <h6 className="text-sm stat-value">
            200+ <br /> Projects completed
          </h6>{" "}
        </div>
      </div>
    </section>
  );
}

export default Hero;
