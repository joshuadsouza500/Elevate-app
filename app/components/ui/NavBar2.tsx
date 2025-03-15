"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { MotionDiv, MotionNav } from "../MotionDiv";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const NavBar2 = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const is2xl = useMediaQuery({ query: "(min-width: 1536px)" });
  const Width = useTransform(
    scrollY,
    [0, 100],
    ["100%", is2xl ? "40%" : "70%"]
  );
  const BgColour = useTransform(
    scrollY,
    [0, 100],
    ["#fefefa ", "rgba(245,245,245,0.9)"]
  );
  return (
    <MotionNav
      className=" md:px-6 flex    p-4 mx-auto  z-20  sticky top-0.5 mb-1 rounded-full md:py-4 items-center max-w-7xl 2xl:max-w-8xl  transition-all duration-200 ease-in-out"
      variants={{
        hidden: {
          y: -100,
        },
        visible: {
          y: 0,
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ width: Width, backgroundColor: BgColour }}
    >
      <div className="absolute right-2 md:hidden  ">
        <div
          className="dropdown dropdown-end dropdown-bottom
  "
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="dropdown-content ">
            <ul
              tabIndex={0}
              className=" text-xl   z-[1] menu p-2  shadow bg-background text-background2 font-medium rounded-box w-44 "
            >
              <li className="">
                <Link href="#Home">Home</Link>
              </li>
              <li>
                <Link href="#About">About</Link>
              </li>
              <li>
                <Link href="#Services"> Services</Link>
              </li>

              <li>
                <Link href="#Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-md:pl-0.5">
        <div className="flex   ">
          <Link
            href="/"
            className=" text-background2 text-xl md:text-3xl     font-bold tracking-normal"
          >
            Elevate<span className="text-primary">.</span>
          </Link>
        </div>

        <nav className=" hidden md:flex justify-between items-center  ">
          <ul className="flex flex-row justify-around gap-4 xl:gap-6  mr-2  2xl:text-lg font-medium text-background2 ">
            <li>
              <Link
                href="#Home"
                className="hover:text-indigo-600 transition-all duration-300 ease-in-out hover:font-semibold hover:border-solid scroll-smooth"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#About"
                className="hover:text-indigo-600 transition-all duration-300 ease-in-out hover:font-semibold hover:border-solid scroll-smooth"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Services"
                className="hover:text-indigo-600 transition-all duration-300 ease-in-out hover:font-semibold hover:border-solid scroll-smooth"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <button className="hidden md:block group  border-zinc-800 text-sm text-background rounded-full  px-3 py-2 xl:py-3 xl:px-3.5  bg-gradient-to-br shadow-sm from-zinc-900 to-zinc-600 hover:border-white">
          <Link href="/contact" className="  flex items-center">
            Contact me
            <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
          </Link>
        </button>
      </div>
    </MotionNav>
  );
};

export default NavBar2;

{
  /**   
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
   
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      
 
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
    
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
**/
}
