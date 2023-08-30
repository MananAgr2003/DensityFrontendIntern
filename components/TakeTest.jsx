import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from GSAP

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function TakeTest() {
  const teamAheadRef = useRef(null);
  const buttonRef = useRef(null);
  const timeTextRef = useRef(null);

  useEffect(() => {
    // Set up GSAP animation when the component is mounted
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Split the text into individual characters for typewriter effect
    const teamAheadText = teamAheadRef.current;
    const characters = teamAheadText.innerText.split('');
    teamAheadText.innerText = ''; // Clear the original text

    // Create a timeline for typewriter animation
    characters.forEach((char, index) => {
      const charElement = document.createElement('span');
      charElement.textContent = char;
      charElement.style.opacity = 0;
      teamAheadText.appendChild(charElement);

      tl.to(charElement, { opacity: 1, duration: 0.1, delay: index * 0.1 }, 'start');
    });

    // Use ScrollTrigger to trigger the animation when scrolled into view
    ScrollTrigger.create({
      trigger: teamAheadText,
      start: 'top 80%', // Adjust the start position as needed
      onEnter: () => tl.play(),
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });

    // Springy animation for button and text below
    gsap.from([buttonRef.current, timeTextRef.current], {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.8)',
      scrollTrigger: {
        trigger: teamAheadText,
        start: 'top 80%', // Adjust the start position as needed
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center py-8 hide-scrollbar px-[100px] mt-20">
      <h1 className="text-lg mb-2 font-medium">
        We take privacy seriously
      </h1>
      <h1 className="text-3xl font-semibold mb-4">Before you get started</h1>
      <h1 className="text-lg mb-2 font-medium w-[500px] text-center">
        "We won't share your answers with anyone (and won't ever tell you which friends said what about you)"
      </h1>
      <h1 className="text-6xl font-semibold mb-8">
        With love , <span className='animated-text' ref={teamAheadRef}>Team Ahead</span>
      </h1>
      <button ref={buttonRef} className="bg-black rounded-full text-white px-6 py-4">
        Start a test
      </button>
      <h1 ref={timeTextRef} className="text-md font-light mt-4">Takes only 5 mins</h1>
    </div>
  );
}

export default TakeTest;
