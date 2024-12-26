import Link from "next/link";
import React from "react";
import { MotionDiv, Motionh1, MotionP } from "../MotionDiv";
import NavBar from "../Navbar";

function Hero() {
  return (
    <section>
      <section
        id="Home"
        className="flex flex-col md:flex-row justify-between items-start h-auto    "
      >
        <div className="w-full md:w-1/2  h-full flex flex-col max-md:text-center max-md:items-center justify-center pt-44 pb-6">
          <h1 className=" text-stone-950 md:leading-[1.1]   font-semibold capitalize text-4xl   md:text-5xl  2xl:text-6xl  ">
            Elevate your brand,
            <br className="hidden 2xl:block" />{" "}
            <span className="text-indigo-600 ">captivate</span> your audience!
          </h1>

          <p className="w-4/6 text-xs sm:text-sm pl-1 lg:w-4/5 text-opacity-80 text-stone-950 mt-2 mb-5  sm:mt-4 md:mb-7  capitalize  lg:leading-relaxed">
            Unlock the Full Potential of Your Brand through Tailored Strategies
            that Engage and Inspire.
          </p>
          <button className="w-24 md:w-32 rounded-2xl bg-purple-400 h-9 text-background hover:bg-purple-700 ">
            <Link href="/contact" className=" ">
              Contact
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
    </section>
  );
}

export default Hero;
