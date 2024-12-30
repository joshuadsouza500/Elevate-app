"use client";

import RootLayout from "./layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

import Work from "./components/sections/Work";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import NavBar from "./components/Navbar";
import Services from "./components/sections/Services";
import NavBar2 from "./components/ui/NavBar2";
import Slider from "./components/sections/Slider";

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
        <NavBar2 />
        {/***/}

        <Hero />
        <Slider />
        <About />
        <Services />
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
