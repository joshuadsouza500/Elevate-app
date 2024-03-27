
import Link from "next/link";
import React from "react";
import { MotionDiv, Motionh1 ,MotionP } from "./MotionDiv";

function HeroSection() {
  return (
    <>
      <div id="Home" className="flex justify-start h-lvh pl-10 pt-36 sm:pl-20 lg:pl-32 sm:pt-32 ">
        <div className="w-11/12 md:w-4/5 lg:w-2/3">
          <Motionh1 className="text-stone-950 sm:leading-tight lg:leading-none opacity-90 font-Poppins font-bold capitalize text-4xl  sm:text-5xl md:text-5xl lg:text-7xl  "
          initial={{opacity:0 , y: -10}}
          animate= {{opacity: 1 , y: -1}}
          transition={{delay:0.1, duration:0.5, x:{type:"spring"}, ease: "easeIn"  }}
          >
            Elevate your brand, captivate your audience!
          </Motionh1>

          <MotionP
            className="w-4/5 text-xs sm:w-4/5 sm:text-sm lg:w-3/5 opacity-70 text-stone-950  font-normal font-['Poppins'] capitalize my-6 lg:my-8 lg:leading-relaxed"
            initial={{opacity:0 , y: -5}}
            animate= {{opacity: 1 , y: -1}}
          transition={{delay: 0.5, duration:0.7 , x:{type:"spring"}}}
          >
            we specialize in crafting unforgettable marketing strategies that
            leave a lasting impression. connect with your target audience, and
            achieve your business goals.
          </MotionP>
          <MotionDiv  
             initial={{opacity:0 , y: -5}}
             animate= {{opacity: 1 , y: -1}}
           transition={{delay: 0.8, duration:0.7,  x:{type:"spring"}}}
          >
             
        
          <Link href='/contact' className="btn bg-stone-950 opacity-95 text-background hover:bg-stone-900 hover:opacity-80"  
          >
            Get In Touch
          </Link>
          </ MotionDiv>
        </div>
      </div>

      
    </>
  );
};

export default HeroSection;
