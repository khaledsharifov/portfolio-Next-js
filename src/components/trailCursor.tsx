"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const TrailCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.8
    });
  };

  useEffect(() => {
    gsap.set(cursorRef, {
      xPercent: 100,
      yPercent: 100,
    });
    window.addEventListener("mousemove", moveCursor)
  }, []);


  return (
    <div
      ref={cursorRef}
      className="w-[260px] h-[150px] bg-[#FFFFFF2E] blur-[80px] rounded-[50px] fixed left-[-130px] top-[-70px] z-[-1]"
    ></div>
  );
};

export default TrailCursor;
