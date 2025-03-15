import Link from "next/link";
import React from "react";
import { MotionB, MotionDiv, Motionh1, MotionP } from "../MotionDiv";
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
        <span className="inline-block overflow-hidden">
          <Motionh1
            className=" text-stone-950  md:leading-[1.1]   font-bold capitalize text-4xl leading-tight  md:text-6xl  xl:text-7xl xl:leading-tight  "
            initial={{ y: "100%", opacity: 0.4 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.4,
            }}
            viewport={{ once: true }}
          >
            Elevate your brand,
            <br className="md:block hidden 2xl:block" />{" "}
            <span className="text-indigo-600 ">captivate</span> your audience!
          </Motionh1>
        </span>
        <span className="inline-block overflow-hidden  pl-1 w-4/6  mt-2 mb-4  sm:mt-4 lg:w-4/5 xl:w-3/6 text-opacity-80 text-stone-950 lg:mt-4 lg:mb-7">
          <MotionP
            initial={{ y: "100%", opacity: 0.4 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.4,
            }}
            viewport={{ once: true }}
            className=" hidden lg:block   capitalize md:text-xl  text-gray-600 lg:leading-relaxed"
          >
            Unlock the Full Potential of Your Brand through Tailored Strategies
            that Engage and Inspire.
          </MotionP>

          <p className="text-xs sm:text-sm text-opacity-80 text-slate-950 lg:hidden">
            Unlock Your {"Brand's"} Potential with Engaging Strategies
          </p>
        </span>
        <MotionB
          initial={{ y: "5%", opacity: 0.1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.45,
          }}
          viewport={{ once: true }}
          className="group lg:w-[132px] border-zinc-800 text-background rounded-full text-sm px-3 py-2  bg-gradient-to-br shadow-sm from-zinc-900 to-zinc-700 hover:border-white"
        >
          <Link href="/contact" className="  flex items-center">
            Contact me
            <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
          </Link>
        </MotionB>
      </div>
      <ProductSlider />
    </section>
  );
}

export default Hero2;
{
  /**
  <span className="inline-block overflow-hidden">
  <Motionh1
    className={cn("w-full", className)}
    initial={{ y: "100%", opacity: 0.4 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      delay: delay || 0.1,
      duration: duration || 0.2,
    }}
    viewport={{ once: true }}
  >
    {text}
  </Motionh1>
</span> **/
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
