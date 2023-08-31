import React, { useEffect } from 'react';
import Image from 'next/image';
import img from "@app/assets/InfoBanner.png";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from('.info-text', {
      x: -200,
      opacity: 0,
      duration: 2,
    });

    tl.from('.info-image', {
      x: -200,
      opacity: 0,
      duration: 2,
    });
  }, []);

  return (
    <div className="p-8">
      <div className="bg-[#FEF7F1] px-16 pt-[100px] pb-[50px] rounded-lg h-[750px]">
        <div>
          <p className="text-2xl text-gray-500 info-text">Built out of frustration</p>
          <h2 className="text-6xl font-bold mt-4 info-text">Meet the ahead app</h2>
          <div className="mt-16 w-full relative flex flex-row items-center justify-between">
            <Image
              src={img}
              alt="Image"
              width={500}
              height="20%"
              className="info-image"
            />

            <p className="ml-4 mt-8 text-gray-700 w-[37%] text-xl relative right-[50px] info-text">
              A personalized pocket coach that provides bite-sized, science
              driven tools to boost emotional intelligence.
              <br /><br />
              Think of it as a pocket cheer leader
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
