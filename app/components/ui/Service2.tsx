import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Service2 = ({ title, Img, id, content }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Update mouse position
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
      ref={ref} // Assign the ref to the element
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" text-black  relative w-full flex justify-between py-14 font-semibold border-b-2 bg-blue-300"
    >
      <div className="flex gap-x-4 items-center pl-2 w-full">
        <p className="text-sm">{id + 1}</p>
        <h2 className="text-3xl">{title}</h2>
      </div>

      {isHovering && (
        <motion.img
          src={Img} // replace with your image path
          alt="Follower"
          className="size-44 rounded-lg z-20"
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
        <div className="w-full place-items-end">
          <p className="text-sm w-[70%] text-black/50  font-medium">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Service2;
