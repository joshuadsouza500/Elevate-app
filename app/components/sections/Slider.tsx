import Image from "next/image";
import React from "react";
import { MotionDiv } from "../MotionDiv";

const Images = [
  { id: 1, img: "/Logos/arab.svg" },
  { id: 2, img: "/Logos/podcastle.svg" },
  { id: 3, img: "/Logos/Logo1.svg" },
  { id: 4, img: "/Logos/venc.svg" },
  { id: 5, img: "/Logos/taper.svg" },
];
const Slider = () => {
  return (
    <section className="flex flex-col items-center pt-12 pb-3 md:py-12  ">
      <div>
        <p className=" text-Purple max-md:text-sm font-medium">
          {" "}
          * Who {"we've"} worked with
        </p>
      </div>
      <div className="relative w-full py-2  overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-10 sm:w-14 lg:w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-10 sm:w-14 lg:w-20 bg-gradient-to-l from-background to-transparent" />
        <MotionDiv
          className="flex    gap-x-6 md:gap-x-16  "
          // initial={{ x: 0 }}
          //  animate={{ x: "-100%" }}
          //  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div className="flex   items-center  w-full gap-x-6 md:gap-x-24  animate-loop-scroll justify-around ">
            {Images.map((image) => (
              <div key={image.id} className="size-16 md:size-28  ">
                {" "}
                <Image
                  height={100}
                  width={50}
                  src={image.img}
                  alt="logo"
                  className="w-full object-center     h-full"
                />
              </div>
            ))}
          </div>
          <div className="flex  items-center  w-full gap-x-6  md:gap-x-24  animate-loop-scroll justify-around ">
            {Images.map((image) => (
              <div key={image.id} className="size-16 md:size-28  ">
                {" "}
                <Image
                  height={100}
                  width={50}
                  src={image.img}
                  alt="logo"
                  className="w-full object-center     h-full"
                />
              </div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Slider;
