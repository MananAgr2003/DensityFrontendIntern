
"use client"
import {useState , useEffect} from 'react'
import Image from 'next/image'
import icon from "@app/assets/icon1.png"
import icon2 from "@app/assets/icon2.png"

export default function Nav() {

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-screen realtive left-[0px] z-10 flex items-center justify-between px-16 ${isSticky ? 'sticky top-0 bg-white shadow-md py-3' : 'py-2'}`}>
      <div className="flex items-center justify-between space-x-4">
        <div className="w-12 h-12 flex items-center justify-center relative left-12">
        <Image src={isSticky ? icon2 : icon} height={50} width={50} alt='icon'></Image>
        </div>
       
      </div>
      <div className="flex items-center justify-between space-x-4 w-2/5 relative left-12 font-semibold">
          <a href="#" className="text-black hover:text-blue-500 relative left-12">Emotions</a>
          <a href="#" className="text-black hover:text-blue-500 relative left-12">Manifesto</a>
          <a href="#" className="text-black hover:text-blue-500 relative left-12">Self-Awareness Test</a>
          <a href="#" className="text-black hover:text-blue-500 relative left-12">Work With Us</a>
        </div>
      <button className="bg-black rounded-full text-white px-6 py-4">
        Download App
      </button>
    </nav>
  )
}
