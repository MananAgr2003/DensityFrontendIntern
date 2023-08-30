"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollComponent from "@components/ScrollComponent";
import TakeTest from "@components/TakeTest";
gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const boxesRef = useRef(null);

  return (
    <div
      className="flex flex-col items-left py-8 hide-scrollbar px-6 mt-20"
      ref={containerRef}
    >
      <h1
        className="text-5xl font-semibold mb-12 expand-element ml-10"
        ref={headingRef}
      >
        Open Vacancies
      </h1>
      <div
        className="flex items-center justify-center overflow-x-scroll p-4 hide-scrollbar my-5 w-full"
        ref={boxesRef}
      >
        <div class="w-[405px] bg-[#FEFBEC] mx-4 rounded-2xl p-8 flex items-left flex-col h-60 hover-box hover:h-[17rem] transition-all duration-200 ease-in-out hover:bg-[#FFEFD7]">
          <h1 class="text-2xl font-semibold mb-2">
            Senior Full-Stack Developer
          </h1>
          <h2 class="text-base font-medium mb-2 mt-3">Full Time Position</h2>
          <h2 class="text-base font-medium mb-2 mt-2">Berlin or Remote</h2>
          <h2 class="text-base font-medium mb-2 mt-2">
            $65k-$85k, equity share options
          </h2>
          <button class="hidden-button">Apply Now</button>
        </div>
        <div class="w-[405px] bg-[#FEFBEC] mx-4 rounded-2xl p-8 flex items-left flex-col h-60 hover-box hover:h-[17rem] transition-all duration-200 ease-in-out hover:bg-[#FFEFD7]">
          <h1 class="text-2xl font-semibold mb-2">
            Senior Full-Stack Developer
          </h1>
          <h2 class="text-base font-medium mb-2 mt-3">Full Time Position</h2>
          <h2 class="text-base font-medium mb-2 mt-2">Berlin or Remote</h2>
          <h2 class="text-base font-medium mb-2 mt-2">
            $65k-$85k, equity share options
          </h2>
          <button class="hidden-button">Apply Now</button>
        </div>
        <div class="w-[405px] bg-[#FEFBEC] mx-4 rounded-2xl p-8 flex items-left flex-col h-60 hover-box hover:h-[17rem] transition-all duration-200 ease-in-out hover:bg-[#FFEFD7]">
          <h1 class="text-2xl font-semibold mb-2">
            Senior Full-Stack Developer
          </h1>
          <h2 class="text-base font-medium mb-2 mt-3">Full Time Position</h2>
          <h2 class="text-base font-medium mb-2 mt-2">Berlin or Remote</h2>
          <h2 class="text-base font-medium mb-2 mt-2">
            $65k-$85k, equity share options
          </h2>
          <button class="hidden-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
