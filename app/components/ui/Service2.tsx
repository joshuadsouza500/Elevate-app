"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MotionP } from "../MotionDiv";

interface ServiceProps {
  title: string;
  Img: string;
  id: number;
  content: string;
}

const Service2 = ({ title, Img, id, content }: ServiceProps) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  //We useRef here so that we can - the ClientX and ClientY values of the mouse event relative to the top-left corner of the div. (Defualt is relative to viewport).
  //If y is 200 {mousediv element} would show outside the box but when it is either -somenumber or - by height of the div it would show inside the div.
  // Update mouse position

  const handleMouseMove = (e: any) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect(); //getBoundingClientRect provides details about the size of an element and its position relative to the viewport.
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Boundary checks Math.max(0, ...): This function then takes the larger of 0 and the result from the first step. This ensures that if x is less than 0, boundedX will be set to 0.
      const boundedX = Math.max(0, Math.min(x, rect.width));
      const boundedY = Math.max(0, Math.min(y, rect.height));

      setMouseX(boundedX);
      setMouseY(boundedY);
      //Use spring and usetransform to create stiffness and damping effect
    }
  };

  // Handle mouse enter/leave events
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" text-black border-b-black/20 border-b-2 mx-auto  relative w-full flex justify-between py-10 h-auto  group"
    >
      <motion.div
        className="flex gap-x-8 items-center pl-1 w-full z-10 py-2  "
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovering ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm font-medium">{id + 1} .</p>
        <h2 className="text-4xl  font-medium">{title}</h2>
      </motion.div>

      {isHovering && (
        <motion.img
          src={Img}
          alt="Follower"
          className="size-40 xl:size-52 rounded-lg z-10 drop-shadow-xl   object-cover object-center"
          style={{
            position: "absolute",
            top: mouseY,
            left: mouseX,
            pointerEvents: "none", // To allow mouse events to pass through
            transform: "translate(-50%, -50%)", // Center the image around the cursor
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, type: "spring" }}
        />
      )}

      {isHovering && (
        <div className="w-full place-items-end  ">
          <MotionP
            className="text-sm w-[65%] text-black/70 font-medium leading-tight tracking-wide"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovering ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </MotionP>
        </div>
      )}
      <motion.div
        className="absolute -bottom-[2px] left-0 h-[2px] bg-black"
        initial={{ width: 0, opacity: 0 }}
        viewport={{ once: true }}
        animate={{
          width: isHovering ? "100%" : "40%",
          opacity: isHovering ? 0.4 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Service2;
