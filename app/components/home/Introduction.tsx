"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../misc/SectionTitle";
import { useScroll, useTransform } from "motion/react";
import { twMerge } from "tailwind-merge";

const text = `You deserve fresh, imported products without chasing suppliers, minimum orders, or inconsistent stock.`;

const Introduction = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const words = text.split(" ");
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);
  return (
    <div className="py-24 lg:py-40">
      <div className="container flex flex-col items-center justify-center mx-auto max-w-5xl 2xl:max-w-7xl">
        <div className="sticky top-28 md:top-32 2xl:top-52">
          <div className="flex items-center">
            <SectionTitle title="Introducing Exovia Exports" divElement />
          </div>
          <div className="text-4xl md:text-5xl 2xl:text-6xl text-center font-medium sm:mt-5">
            <span>
              Buying quality frozen foods shouldn&apos;t be complicated.
            </span>{" "}
            <span className="text-gray-400">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "transition duration-500 text-black/15",
                    index < currentWord && "text-black"
                  )}
                >
                  {`${word} `}{" "}
                </span>
              ))}
            </span>
            <span className="text-blue-500 block">
              That&apos;s why we started Exovia.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </div>
  );
};

export default Introduction;
