import Link from "next/link";
import React from "react";
import { MotionDiv, Motionh1, MotionP } from "../MotionDiv";
import NavBar from "../Navbar";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import path from "path";
import ProductSlider from "../ui/ProductSlider";

function Hero2() {
  return (
    <section
      id="Home"
      className="md:bg-radial-gradient-custom  flex flex-col  justify-start items-start  h-auto pb-2 md:pb-8 bg-cover   bg-center bg-no-repeat mx-1  md:bg-opacity-10  rounded-2xl max-md:px-2 overflow-hidden"
    >
      <div className="w-full   h-[60%] py-20 flex flex-col text-center items-center bg-cover justify-center md:pt-32  2xl:pt-40   md:pb-16 2xl:pb-32  bg-opacity-30 bg-center bg-no-repeat    rounded-2xl max-md: ">
        <h1 className=" text-stone-950 leading-[1.2] md:leading-[1.1]   font-semibold capitalize text-4xl   md:text-5xl  xl:text-6xl xl:leading-[1.1]  ">
          Elevate your brand,
          <br className="md:block hidden 2xl:block" />{" "}
          <span className="text-indigo-600 ">captivate</span> your audience!
        </h1>

        <p className=" hidden lg:block pl-1 lg:w-4/5 xl:w-3/6 text-opacity-80 text-stone-950 mt-4 mb-7  capitalize  lg:leading-relaxed">
          Unlock the Full Potential of Your Brand through Tailored Strategies
          that Engage and Inspire.
        </p>
        <p className="w-4/6 text-xs sm:text-sm mt-2 mb-4  sm:mt-4 text-opacity-80 text-slate-950 lg:hidden">
          Unlock Your {"Brand's"} Potential with Engaging Strategies
        </p>
        <button className="group lg:w-36 border-zinc-800 text-background rounded-full text-sm px-3 py-2  bg-gradient-to-br shadow-sm from-Purple/70 to-zinc-500 hover:border-white">
          <Link href="/contact" className="  flex items-center">
            Contact me
            <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
          </Link>
        </button>
      </div>
      <ProductSlider />
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

{
  /**'use client'

import { Button } from "@/components/ui/button"
import { Sparkles, Star, Palette, Shapes, Lightbulb, Rocket } from 'lucide-react'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-[80vh] relative overflow-hidden flex items-center justify-center px-4">
      {/* Background gradient */
}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-white to-white" />;

/* Floating icons 
      <motion.div 
        className="absolute top-20 left-10"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-8 h-8 text-purple-500" />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-12"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Star className="w-8 h-8 text-amber-500" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 left-8"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Palette className="w-8 h-8 text-emerald-500" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 right-10"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Shapes className="w-8 h-8 text-blue-500" />
      </motion.div>
      
      <motion.div 
        className="absolute top-32 left-1/2 -translate-x-1/2"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Lightbulb className="w-8 h-8 text-yellow-500" />
      </motion.div>


      <div className="relative max-w-md mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Elevate your brand
          <span className="block text-purple-600">captivate your audience</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Transform your vision into a powerful brand identity that resonates with your target audience and sets you apart.
        </p>
        <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700">
          Get Started <Rocket className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  )
} */
