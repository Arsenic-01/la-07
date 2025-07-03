"use client";

import React, { useState } from "react";

const CallToAction = () => {
  const [isHovered, setHovered] = useState(false);

  const content = (
    <div className="flex items-center gap-16 pr-16 text-5xl lg:text-6xl xl:text-7xl font-medium group cursor-pointer">
      <span className="text-blue-500 text-7xl">&#10038;</span>
      <span className="group-hover:text-blue-500 transition duration-150 ease-in-out">
        Try it <span className="italic font-normal">now</span>
      </span>
    </div>
  );

  return (
    <section className="py-24 overflow-hidden relative">
      <div
        className={`marquee-container ${isHovered ? "paused" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="marquee-content">
          {/* Repeat content twice for seamless scroll */}
          {Array.from({ length: 2 }).map((_, outerIndex) => (
            <div className="marquee-segment" key={outerIndex}>
              {Array.from({ length: 10 }).map((_, index) => (
                <React.Fragment key={`${outerIndex}-${index}`}>
                  {content}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }

        .paused .marquee-content {
          animation-play-state: paused;
        }

        .marquee-segment {
          display: flex;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
