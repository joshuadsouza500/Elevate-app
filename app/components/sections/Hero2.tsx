import React from "react";
import { MotionB, MotionDiv, Motionh1, MotionP } from "../MotionDiv";
import { ArrowUpRight } from "lucide-react";
import ProductSlider from "../ui/ProductSlider";

function Hero2() {
  return (
    <section
      id="Home"
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-white to-white  flex flex-col  justify-start items-start  h-auto pb-2 md:pb-8 bg-cover   bg-center bg-no-repeat mx-1 md:bg-opacity-50   rounded-2xl max-md:px-2 overflow-hidden relative"
    >
      <div className="w-full   h-[65%] 2xl:h-[75%] py-20 flex flex-col text-center items-center bg-cover justify-center md:pt-32  2xl:pt-40   md:pb-16 xl:pb-24 2xl:pb-32   bg-center bg-no-repeat bg-opacity-30   rounded-2xl   relative">
        <span className="inline-block overflow-hidden">
          <Motionh1
            className=" text- stone-950 text-gray-900   md:leading-[1.1]   font-bold capitalize text-4xl leading-tight  md:text-6xl  2xl:text-7xl xl:leading-tight  "
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
            <span className="text-indigo-600 ">Captivate</span> your audience!
          </Motionh1>
        </span>
        <span className="inline-block overflow-hidden  pl-1 w-4/6  mt-2 mb-4  sm:mt-4 lg:w-4/5 xl:w-7/12 text-opacity-80 text-stone-950 lg:mt-4 lg:mb-8 2xl:mb-10 ">
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
        {/** <MotionB
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
        </MotionB>*/}
        <MotionDiv
          initial={{ y: "5%", opacity: 0.1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.45,
          }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 "
        >
          <button className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-md shadow-md hover-scale button-shadow">
            Contact Us
          </button>
          <button className="hidden md:block w-full  px-8 py-3 text-base font-medium text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-300">
            Learn More
          </button>
        </MotionDiv>
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
