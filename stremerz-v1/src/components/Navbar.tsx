// import { Link } from "react-router-dom"
import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleOpen() {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="fixed top-4 m-2 left-0 right-0 z-10">
      {/* nav for bigger screen */}
      <div className="flex justify-between items-center bg-black/60 backdrop-blur-sm max-w-7xl rounded-xl mx-auto px-5 py-3 border border-neutral-800">
        <div>
          <img src={logo} alt="logo" className="w-auto h-[1.7rem]" />
        </div>
        <div className="hidden md:flex space-x-6">
          <div className="cursor-pointer hover:text-neutral-200">
            How it works
          </div>
          <div className="cursor-pointer hover:text-neutral-200">Pricing</div>
          <div className="cursor-pointer hover:text-neutral-200">
            Testimonials
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="cursor-pointer hover:text-neutral-200">Login</div>
          <div className="border border-neutral-700 cursor-pointer transition py-2 px-4 rounded-xl hover:bg-neutral-800">
            Get a demo
          </div>
          <div className="text-white bg-blue-600 cursor-pointer transition py-2 px-4 rounded-xl hover:bg-blue-500">
            Start a Free Trial
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleOpen}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill size={24} /> : <RiMenu3Fill size={24} />}
          </button>
        </div>
      </div>
      {/* nav for Mobile screen */}
      {isOpen && (
        <div className="md:hidden w-full bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 mt-1 rounded-xl">
          <div className="flex flex-col space-y-3">
            <div className="cursor-pointer hover:text-neutral-200">
              How it works
            </div>
            <div className="cursor-pointer hover:text-neutral-200">Pricing</div>
            <div className="cursor-pointer hover:text-neutral-200">
              Testimonials
            </div>
            <div className="text-white text-start min-w-1/3 border border-neutral-700 cursor-pointer transition py-2 px-6 rounded-xl hover:bg-neutral-800">
              Get a Demo
            </div>
            <div className="min-w-1/3 text-start text-white bg-blue-600 cursor-pointer transition py-2 px-6 rounded-xl hover:bg-blue-500">
              Start a Free Trial
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
