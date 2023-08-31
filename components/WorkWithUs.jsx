import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import icon from "@app/assets/icon2.png";

const WorkWithSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".animate-box", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".animate-box",
        start: "top 80%",
      },
    });

    gsap.from(".animate-right", {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".animate-right",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="flex p-8 bg-[#F3F1FF] m-7 rounded-xl h-[700px]">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-5xl font-bold mt-8">Work With Us</h2>
        <div className="mt-8 space-y-4">
          {/* Box 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md w-[80%] h-[300px] flex flex-col animate-box">
            <Image src={icon} alt="Icon" width={50} height={50} />
            <div>
              <p className="font-bold text-xl mt-4">About</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas aspernatur ab officia nobis doloribus facilis perspiciatis fugit incidunt, numquam tenetur a reiciendis veritatis cupiditate.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-[#FEF7F1] p-4 rounded-3xl shadow-md w-[80%] h-[250px] flex flex-col relative bottom-8 animate-box">
            <p className="font-bold text-xl mt-4">Product</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptates facilis quas sit non ullam eius iure! Quia molestiae, sit voluptas maiores in dolores deleniti.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 ml-8 relative">
        <h2 className="text-6xl font-bold m-9 text-[#5E3CE8] absolute right-5">ahead</h2>

        <div className="p-4 mt-8 absolute top-20 right-5 h-[530px] overflow-y-auto purple-scrollbar animate-right">
          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[200px] w-[400px] mb-4">
            <h3 className="font-bold">Box 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[200px] w-[400px] mb-4">
            <h3 className="font-bold">Box 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Repeat the pattern for other boxes */}
          {/* Box 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[200px] w-[400px] mb-4">
            <h3 className="font-bold">Box 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Box 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[200px] w-[400px] mb-4">
            <h3 className="font-bold">Box 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Box 5 */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[200px] w-[400px] mb-4">
            <h3 className="font-bold">Box 5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Box 6 */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[200px] w-[400px] mb-4">
            <h3 className="font-bold">Box 6</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithSection;
