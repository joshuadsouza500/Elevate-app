"use client";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    id: 0,
    title: "Logo & Branding",
    image: "/Happylfe/happyl.jpeg",
  },
  {
    id: 1,
    title: "App Development",
    image: "/Mhomespace.jpeg",
  },
  {
    id: 2,
    title: "SEO",
    image: "/Home/home2.jpeg",
  },
  {
    id: 3,
    title: "Media Production",
    image: "/Macy/macy2.jpeg",
  },
  {
    id: 4,
    title: "ee Development",
    image: "/Review2.webp",
  },
];

const ProductSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [150, 1000], [-100, -200]);

  return (
    <div ref={containerRef} className=" py-4 ">
      <motion.div style={{ x }} className="flex gap-6 w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative h-60 w-44 md:aspect-square  flex-shrink-0 rounded-2xl overflow-hidden shadow-sm"
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
