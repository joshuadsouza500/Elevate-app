import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { MotionDiv } from "../MotionDiv";
import Image from "next/image";

interface ServiceProps {
  title: string;
  Img: string;
  id: number;
}

const ServiceSmall = ({ title, Img, id }: ServiceProps) => {
  return (
    <div className="w-full h-auto  relative text-background2 border-b py-2 border-b-black/30">
      <MotionDiv className="flex gap-x-5 items-center pl-1 w-full z-10 py-1 ">
        <Image
          src={Img}
          alt={title}
          height={200}
          width={200}
          className=" h-14 object-center object-cover w-[75px]  rounded-lg"
        />
        <div>
          <h2 className=" text-3xl  font-medium">{title}</h2>
        </div>
      </MotionDiv>
    </div>
  );
};

export default ServiceSmall;
