"use client";

import RootLayout from "./layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

import Work from "./components/sections/Work";
import Reviews from "./components/sections/Reviews";
import ContactMe from "./components/ContactMe";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/Navbar";
import Services from "./components/sections/Services";

//npm install to reinstall node modules//

export default function Home() {
  /**  useEffect( () => {
            const lenis = new Lenis()

            function raf(time: number) {
              lenis.raf(time)  
              requestAnimationFrame(raf)
            }
            requestAnimationFrame(raf)
          })
 */

  return (
    <>
      <motion.div className="max-w-5xl mx-auto px-2 md:px-6 xl:max-w-6xl 2xl:max-w-7xl  bg-background">
        {/** 
        <Hero />
        <section className="w-full h-28 bg-gray-300 my-8">
          <p className="text-center ">Logo Slider</p>
        </section>
        <About />
        <Services />*/}
        <Work />
      </motion.div>
    </>
  );
}

{
  /**  const {scrollY} = useScroll()
// Define color transitions based on scroll position
    const bgColor = useTransform(
      scrollY,
      [0, 500,600,800,1700,1800], // Adjust these values as needed
      ["#FAFAF5", "#100E0E","#100E0E", "#100E0E",  "#100E0E","#FAFAF5"] // Corresponding background colors
    ); */
}
