import React from 'react'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-5 py-5">
      <div className="flex items-center justify-between space-x-4">
        <div className="bg-blue-500 w-10 h-10 flex items-center justify-center relative left-12">
          <span className="text-white">Icon</span>
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
