import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Service2 = ({ title, Img, id, content }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef(null); // Reference to the hovering element

  // Update mouse position
  const handleMouseMove = (event) => {
    // Get bounding rectangle of the hovered element
    const rect = hoverRef.current.getBoundingClientRect();

    // Calculate mouse positions in relation to the hovered element
    setMouseX(event.clientX - rect.left);
    setMouseY(event.clientY - rect.top);
  };

  // Handle mouse enter/leave events
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      ref={hoverRef} // Assign the ref to the element
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" text-black  relative w-full flex justify-between py-12 font-semibold border-b-2 bg-blue-300"
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
          <p className="text-xs w-[70%] text-black/50 leading-none">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Service2;
