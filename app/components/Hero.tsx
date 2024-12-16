import Link from "next/link";
import React from "react";
import { MotionDiv, Motionh1, MotionP } from "./MotionDiv";

function Hero() {
  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row justify-between items-center h-screen   2xl:bg-green-600"
    >
      <div className="w-11/12 md:w-1/2 ">
        <h1 className="text-stone-950   font-semibold capitalize text-4xl   md:text-5xl  2xl:text-6xl  ">
          Elevate your brand,
          <br className="hidden 2xl:block" />{" "}
          <span className="text-indigo-600">captivate</span> your audience!
        </h1>

        <p className="w-4/5 text-xs sm:text-sm pl-1 lg:w-4/5 text-opacity-80 text-stone-950 mt-2 mb-5  md:mt-4 md:mb-7  capitalize  lg:leading-relaxed">
          Unlock the Full Potential of Your Brand through Tailored Strategies
          that Engage and Inspire.
        </p>
        <button className="w-24 md:w-32 rounded-2xl bg-purple-400 h-9 text-background hover:bg-purple-700 ">
          <Link href="/contact" className=" ">
            Contact
          </Link>
        </button>
      </div>
      <div className="md:w-1/2 bg-violet-600 h-full relative rounded-xl">
        <div className="w-20 h-12 rounded-br-xl bg-background top-0 left-0 absolute" />
        <h1>Image</h1>
        <div className="w-24 h-16 rounded-tl-xl bg-background bottom-0 right-0 absolute">
          <h6>
            200+ <br /> Projects completed
          </h6>{" "}
        </div>
      </div>
    </section>
  );
}

export default Hero;
