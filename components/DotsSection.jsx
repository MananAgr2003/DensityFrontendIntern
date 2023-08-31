import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stepper from "@components/Stepper1";
import StepperComponent from './Stepper2';

gsap.registerPlugin(ScrollTrigger);

const DotsSection = () => {
  useEffect(() => {
    gsap.from('.bounce-element', {
      y: 100,
      opacity: 0,
      ease: 'bounce.out', // Use a bounce ease for a springy effect
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.bounce-element',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className="flex p-24 items-center h-screen flex-col bg-[#EDF8FE] m-[25px] rounded-2xl">
      <div className="text-center bounce-element">
        <p className="text-xl">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
        <h1 className="text-5xl font-bold mb-4 mt-4">Ever wondered what others think of you?</h1>
      </div>
      <div className='w-full mt-20 bounce-element'>
        <Stepper></Stepper>
      </div>
      <div className='w-3/4 h-[300px] mt-20 bg-white p-8 rounded-2xl bounce-element'>
        <StepperComponent></StepperComponent>
      </div>
    </div>
  );
};

export default DotsSection;
