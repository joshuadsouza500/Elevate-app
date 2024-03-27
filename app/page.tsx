'use client'


import RootLayout from "./layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Reviews from "./components/Reviews";
import ContactMe from "./components/ContactMe";
import {  motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from '@studio-freight/lenis'


  export default function Home() {

       useEffect( () => {
            const lenis = new Lenis()

            function raf(time: number) {
              lenis.raf(time)  
              requestAnimationFrame(raf)
            }
            requestAnimationFrame(raf)
          })

  

    const {scrollY} = useScroll()
// Define color transitions based on scroll position
    const bgColor = useTransform(
      scrollY,
      [0, 500,600,800,1700,1800], // Adjust these values as needed
      ["#FAFAF5", "#100E0E","#100E0E", "#100E0E",  "#100E0E","#FAFAF5"] // Corresponding background colors
    );
 
    return (
    <>
    <motion.div   style=
    {{
          width: "100%",
          backgroundColor: bgColor,
        }}
      
    >
    <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <ContactMe />
        </motion.div>
    </>
    )
  }
