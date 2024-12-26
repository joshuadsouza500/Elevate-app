import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { MotionDiv } from "../MotionDiv";
import Image from "next/image";

interface ServiceProps {
  title: string;
  Img: string;
  id: number;
  content: string;
}

const ServiceSmall = ({ title, Img, id, content }: ServiceProps) => {
  return (
    <div className="w-full h-auto  relative text-background2">
      <MotionDiv className="flex gap-x-5 items-center pl-1 w-full z-10 py-4 border-b border-b-black/30">
        <Image
          src={Img}
          alt={title}
          height={200}
          width={200}
          className=" h-16 object-center object-cover w-20 sm:size-20 rounded-lg"
        />
        <div>
          <h2 className="text-2xl  font-medium">{title}</h2>
        </div>
      </MotionDiv>
    </div>
  );
};

export default ServiceSmall;
