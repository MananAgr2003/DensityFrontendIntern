"use client"
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollComponent from "@components/ScrollComponent";
import TakeTest from "@components/TakeTest";
gsap.registerPlugin(ScrollTrigger);



export default function BoxSection() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const boxesRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const heading = headingRef.current;
        const boxes = boxesRef.current;
    
        const headingExpand = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top bottom", // Modify this if needed
          },
        });
    
        headingExpand.from(heading, {
          x: -800, // Change this value to adjust the amount of expansion
          opacity: 0,
          duration: 3,
          ease: "elastic.out(1, 0.9)",
        });
    
        // Animation timeline
    
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
          },
        });
    
        tl2.to(boxes.children, {
          x: -780,
          duration: 6,
          ease: "power4.out",
        });
      }, []);
  return (
    <div
    className="flex flex-col items-left py-8 hide-scrollbar px-6 mt-20"
    ref={containerRef}
  >
    <h1
      className="text-5xl font-semibold mb-12 expand-element"
      ref={headingRef}
    >
      Does This Sound Familiar...
    </h1>
    <div
      className="flex overflow-x-scroll p-4 hide-scrollbar relative my-5 w-fit right-14"
      ref={boxesRef}
    >
      <div className="w-[355px] h-64 bg-yellow-200 mx-4 rounded-2xl p-4 w">
        <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
        <h2 className="text-base font-medium mb-2">Small Heading</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="w-[355px] h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
        <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
        <h2 className="text-base font-medium mb-2">Small Heading</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="w-[355px] h-64 bg-yellow-200 mx-4 rounded-2xl p-4 rotate-[-3deg]">
        <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
        <h2 className="text-base font-medium mb-2">Small Heading</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="w-[355px] h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
        <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
        <h2 className="text-base font-medium mb-2">Small Heading</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="w-[355px] h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
        <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
        <h2 className="text-base font-medium mb-2">Small Heading</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="w-[355px] h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
        <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
        <h2 className="text-base font-medium mb-2">Small Heading</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>

  )
}
