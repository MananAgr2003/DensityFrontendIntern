"use client"
import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function ScrollComponent() {
    const componentRef = useRef(null);
    const headingRef = useRef(null);

    const [isComponentVisible, setIsComponentVisible] = useState(false);

    
    useEffect(() => {
        const heading = headingRef.current;

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

        const handleScroll = () => {
          if (componentRef.current) {
            const rect = componentRef.current.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
            setIsComponentVisible(isVisible);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>

<div className="container" ref={componentRef}>
      <div className={`flex flex-col items-left py-8 hide-scrollbar px-[100px] mt-20 sticky-heading ${isComponentVisible ? 'sticky1' : ''} bg-transparent`}   ref={headingRef}>
        <h1 className="text-xl mb-3 font-medium" >
          Wrong with self improvement & how we are fixing it
        </h1>
        <h1 className="text-6xl font-semibold mb-8">Self-improvement. Ugh.</h1>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center section scroll-section py-5">
        <div className="flex bg-white  rounded-md space-x-4 section1">
          <div className="relative w-1 h-40  bg-gradient-to-b from-purple-500 to-purple-700">
            <div className="absolute w-5 h-5  bg-gradient-to-b from-purple-500 to-purple-700 rounded-full -left-2 glow-effect"></div>
          </div>
          <div className="flex-1 px-5 w-[620px]">
            <h2 className="text-xl font-semibold mb-2">
              Its not easy as 1-2-3.
            </h2>
            <p className="text-gray-700">
              Your journey might be long but opur sessions are quick. We get to
              the point and tell you what you want to know (and nothing else)
            </p>
          </div>
        </div>
        <div className="flex bg-white  rounded-md space-x-4 section1">
          <div className="relative w-1 h-40 bg-gradient-to-b from-purple-500 to-purple-700">
            <div className="absolute w-5 h-5 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full -left-2 glow-effect"></div>
          </div>
          <div className="flex-1 px-5 w-[620px]">
            <h2 className="text-xl font-semibold mb-2">
              Its not easy as 1-2-3.
            </h2>
            <p className="text-gray-700">
              Your journey might be long but opur sessions are quick. We get to
              the point and tell you what you want to know (and nothing else)
            </p>
          </div>
        </div>
        <div className="flex bg-white  rounded-md space-x-4 section1">
          <div className="relative w-1 h-40 bg-gradient-to-b from-purple-500 to-purple-700">
            <div className="absolute w-5 h-5 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full -left-2 glow-effect"></div>
          </div>
          <div className="flex-1 px-5 w-[620px]">
            <h2 className="text-xl font-semibold mb-2">
              Its not easy as 1-2-3.
            </h2>
            <p className="text-gray-700">
              Your journey might be long but opur sessions are quick. We get to
              the point and tell you what you want to know (and nothing else)
            </p>
          </div>
        </div>
        <div className="flex bg-white  rounded-md space-x-4 section1">
          <div className="relative w-1 h-40 bg-gradient-to-b from-purple-500 to-purple-700">
            <div className="absolute w-5 h-5 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full -left-2 glow-effect"></div>
          </div>
          <div className="flex-1 px-5 w-[620px]">
            <h2 className="text-xl font-semibold mb-2">
              Its not easy as 1-2-3.
            </h2>
            <p className="text-gray-700">
              Your journey might be long but opur sessions are quick. We get to
              the point and tell you what you want to know (and nothing else)
            </p>
          </div>
        </div>
        <div className="flex bg-white  rounded-md space-x-4 section1">
          <div className="relative w-1 h-40 bg-gradient-to-b from-purple-500 to-purple-700">
            <div className="absolute w-5 h-5 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full -left-2 glow-effect"></div>
          </div>
          <div className="flex-1 px-5 w-[620px]">
            <h2 className="text-xl font-semibold mb-2">
              Its not easy as 1-2-3.
            </h2>
            <p className="text-gray-700">
              Your journey might be long but opur sessions are quick. We get to
              the point and tell you what you want to know (and nothing else)
            </p>
          </div>
        </div>
        
        <div className="flex bg-white  rounded-md space-x-4 section1">
          <div className="relative w-1 h-0 bg-black">
            <div className="absolute w-5 h-5 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full -left-2 glow-effect"></div>
          </div>
          <div className="flex-1 px-5 w-[620px]">
            <h2 className="text-xl font-semibold mb-2">
              Its not easy as 1-2-3.
            </h2>
            <p className="text-gray-700">
              Your journey might be long but opur sessions are quick. We get to
              the point and tell you what you want to know (and nothing else)
            </p>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}
