import Image from "next/image";
import banner from "./assets/banner.png";

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center py-5">
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

      <div className="flex flex-col items-left py-8 hide-scrollbar px-6 mt-20">
        <h1 className="text-5xl font-semibold mb-12">
          Does This Sound Familiar...
        </h1>
        <div className="flex overflow-x-scroll p-4 hide-scrollbar relative right-96 my-5 w-fit">
          <div className="w-96 h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
            <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
            <h2 className="text-base font-medium mb-2">Small Heading</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="w-96 h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
            <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
            <h2 className="text-base font-medium mb-2">Small Heading</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="w-96 h-64 bg-yellow-200 mx-4 rounded-2xl p-4 rotate-[-3deg]">
            <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
            <h2 className="text-base font-medium mb-2">Small Heading</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="w-96 h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
            <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
            <h2 className="text-base font-medium mb-2">Small Heading</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="w-96 h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
            <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
            <h2 className="text-base font-medium mb-2">Small Heading</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="w-96 h-64 bg-yellow-200 mx-4 rounded-2xl p-4">
            <h1 className="text-2xl font-semibold mb-2">Big Heading</h1>
            <h2 className="text-base font-medium mb-2">Small Heading</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  );
}
