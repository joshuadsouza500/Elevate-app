"use client";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    id: 0,
    title: "Logo & Branding",
    image: "/shot.jpeg",
  },
  {
    id: 1,
    title: "App Development",
    image: "/landing3.jpeg",
  },
  {
    id: 2,
    title: "SEO",
    image: "/landing.jpeg",
  },
  {
    id: 3,
    title: "Media Production",
    image: "/Litlem/lit1.jpeg",
  },
  {
    id: 4,
    title: "ee Development",
    image: "/Macy/macy2.jpeg",
  },
];

const ProductSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [150, 1000], [-100, -200]);

  return (
    <div ref={containerRef} className=" py-4 ">
      <motion.div style={{ x }} className="flex gap-6 w-full ">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative    xl:aspect-[16/12]  flex-shrink-0 rounded-2xl xl:rounded-xl overflow-hidden  drop-shadow-xl"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={256}
              height={256}
              className="w-full h-full  object-cover object-center hover:scale-105 transition-transform duration-200 ease-in-out"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductSlider;
