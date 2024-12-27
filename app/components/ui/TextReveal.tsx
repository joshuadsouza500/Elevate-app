"use client";

import { cn } from "@/app/utils/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface TextReveal {
  text: string;
  className?: string;
  Colour: string;
}

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  Colour: string;
}

const Word: FC<WordProps> = ({ children, progress, range, Colour }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className=" relative mx-1 lg:mx-1.5 my-[1px] xl:my-0.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={Colour}>
        {children}
      </motion.span>
    </span>
  );
};

export const TextReveal: FC<TextReveal> = ({ text, className, Colour }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "-0.4 start"],
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative font-Poppins flex   items-center bg-transparent  w-[95%] md:w-4/5   mx-auto  ",
        className
      )}
    >
      <p
        ref={targetRef}
        className={
          "flex flex-wrap justify-center text-xl md:text-3xl 2xl:text-4xl text-pretty font-medium text-white/30  text-center "
        }
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              Colour={Colour}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

export default TextReveal;
