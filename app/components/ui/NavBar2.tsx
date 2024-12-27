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

const NavBar2 = () => {
  const { scrollY } = useScroll();
  const [width, setWidth] = useState("100%");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setWidth("80%");
    } else {
      setWidth("100%");
    }
    // console.log("Scrollty", latest);
  });

  return (
    <MotionNav
      className=" flex   border-b border-background2/10  p-2  mx-auto   z-20 bg-white sticky top-0 rounded-2xl xl:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ width: width }}
    >
      <div className="absolute right-6 md:hidden">
        <div
          className="dropdown dropdown-end 
  "
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-background rounded-box w-52 "
          >
            <li>
              <Link href="#Home">Home</Link>
            </li>
            <li>
              <Link href="#About">About</Link>
            </li>
            <li>
              <Link href="#Services"> Services</Link>
            </li>
            <li>
              <Link href="#Work">Our Work</Link>
            </li>

            <li>
              <Link href="#Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="44"
          fill="none"
          viewBox="0 0 41 44"
        >
          <path
            fill="#1C1616"
            d="M20.594 43.089 2.78 10.943l35.345-.154-17.532 32.3Z"
          />
          <path
            fill="#FAFAF5"
            d="m19.867 1.739 16.775 30.533-32.484.58 15.71-31.113Z"
          />
        </svg>
        <h4 className=" text-background2 text-xl md:text-3xl pt-2 pl-1  font-bold tracking-tight">
          Elevate<span className="text-primary">.</span>
        </h4>
      </div>

      <nav className="w-full hidden md:flex justify-between items-center ml-10 pt-1">
        <ul className="flex flex-row justify-around gap-4 pr-8 mr-2  text-lg font-semibold text-background2 ">
          <li>
            <Link
              href="#Home"
              className="hover:border-b hover:border-black transition-all duration-300 ease-in-out hover:border-solid scroll-smooth"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#About"
              className="hover:border-b hover:border-black transition-all duration-300 ease-in-out hover:border-solid scroll-smooth"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#Services"
              className="hover:border-b hover:border-black transition-all duration-300 ease-in-out hover:border-solid scroll-smooth"
            >
              Services
            </Link>
          </li>
        </ul>
        <button className="w-24 md:w-32 rounded-2xl bg-purple-400 h-9 text-background hover:bg-purple-700 ">
          <Link href="/contact" className=" ">
            Contact
          </Link>
        </button>
      </nav>
    </MotionNav>
  );
};

export default NavBar2;

{
  /**   */
}