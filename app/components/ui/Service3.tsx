import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { MotionDiv } from "../MotionDiv";
import { useSpring } from "framer-motion";

const Service3 = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  //We useRef here so that we can - the ClientX and ClientY values of the mouse event relative to the top-left corner of the div. (Defualt is relative to viewport).
  //If y is 200 {mousediv element} would show outside the box but when it is either -somenumber or - by height of the div it would show inside the div.

  const handleMouseMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect(); //getBoundingClientRect provides details about the size of an element and its position relative to the viewport.
      setMouseX(e.clientX - rect.left);
      setMouseY(e.clientY - rect.top);
      //Use spring and usetransform to create stiffness and also create boundary using rect.width and rect.height so that the mousediv element does not go outside the box.
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      onMouseMove={handleMouseMouse}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="width-[400px] h-40 bg-blue-600 cursore pointer my-4 pt-10 relative"
    >
      {mouseX} && {mouseY}
      {isHovering && (
        <MotionDiv
          className="size-14 rounded-xl bg-Purple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            top: mouseY,
            left: mouseX,
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}
        ></MotionDiv>
      )}
    </div>
  );
};

export default Service3;
