"use client";
import Image from "next/image";
import banner from "./assets/banner.png";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BoxSection from "@components/BoxSection";
import ScrollComponent from "@components/ScrollComponent";
import TakeTest from "@components/TakeTest";
import Careers from "@components/Careers";
import Info from "@components/Info";
import DotsComponent from "@components/DotsSection";
import WorkWithSection from "@components/WorkWithUs";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const boxesRef = useRef(null);

  

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    gsap.registerPlugin(ScrollTrigger);

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Adjust this value for when you want the animation to start
        },
      });
    });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section1");

    sections.forEach((section, index) => {
      const opacityValue = index === 0 ? 1 : 0.5; // Change the default opacity

      gsap.to(section, {
        opacity: opacityValue,
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
          onEnter: () => {
            // Set opacity to 1 when section comes into view
            gsap.set(sections, { opacity: 0.5 });
            gsap.to(section, { opacity: 1, duration: 0.5 });
          },
          onLeaveBack: () => {
            // Set opacity back to default when section goes out of view
            gsap.to(sections, { opacity: opacityValue, duration: 0.5 });
          },
        },
      });
    });
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center py-1 px-[30px]">
        <Image
          src={banner}
          alt="banner"
          width=""
          height=""
          className="w-full object-cover"
        ></Image>
      </div>

      <div className="flex p-6">
        <div className="w-1/3 p-4">
          <p className="text-3xl font-semibold">EQ beats IQ</p>
        </div>
        <div className="w-1/3 py-4 px-16">
          <p className="text-lg">
            People with high emotional intelligence (EQ) live more fullfilled
            lives and tend to be happier and have healthier reationships.
          </p>
        </div>
        <div className="w-1/3 py-4 px-16">
          <p className="text-lg">
            They are more successfull in their pursuits and make for inspiring
            leaders. According to science, they earn $29K a year.
          </p>
        </div>
      </div>

      <BoxSection></BoxSection>

      <Info></Info>

     
      <ScrollComponent></ScrollComponent>

      <div className="flex p-6 mt-72 mb-72" >
        <div className="w-1/3 p-4">
          <p className="text-3xl font-semibold">EQ beats IQ</p>
        </div>
        <div className="w-1/3 py-4 px-16">
          <p className="text-lg">
            People with high emotional intelligence (EQ) live more fullfilled
            lives and tend to be happier and have healthier reationships.
          </p>
        </div>
        <div className="w-1/3 py-4 px-16">
          <p className="text-lg">
            They are more successfull in their pursuits and make for inspiring
            leaders. According to science, they earn $29K a year.
          </p>
        </div>
      </div>
      
   
      <DotsComponent></DotsComponent>
      <TakeTest></TakeTest>
      <WorkWithSection></WorkWithSection>

      <Careers></Careers>
      
    </>
  );
}
