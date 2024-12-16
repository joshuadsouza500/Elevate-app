"use client";

import RootLayout from "./layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Reviews from "./components/Reviews";
import ContactMe from "./components/ContactMe";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/Navbar";

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
        <NavBar />
        <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <ContactMe />
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
