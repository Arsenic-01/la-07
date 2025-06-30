"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";

const CallToAction = () => {
  const [scope, animate] = useAnimate();
  const [isHovered, setHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  });

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24 mx-auto">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none pr-16 gap-16 text-5xl lg:text-6xl xl:text-7xl font-medium group cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="flex items-center gap-16" key={index}>
              <span className="text-blue-500 text-7xl">&#10038;</span>
              <span className="group-hover:text-blue-500 transition duration-150 ease-in-out">
                Try it now
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
