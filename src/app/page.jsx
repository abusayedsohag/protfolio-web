"use client";

import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import downarrow from "./../../public/animations/downarrow.json";
import About from "@/Components/About";
import Services from "@/Components/Services";


export default function Home() {

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "I am a full-stack web developer specializing in building responsive, scalable, and modern web applications. Passionate about crafting seamless user experiences and clean code.",
        "Full-stack web developer with a love for turning ideas into functional and beautiful web applications. Skilled in both front-end and back-end technologies, creating projects that users enjoy.",
        "I am a full-stack web developer proficient in React, Next.js, Node.js, and Tailwind CSS. I build high-performance web applications with clean code and modern design.",
      ],
      typeSpeed: 10,
      backSpeed: 5,
      backDelay: 5000,
      loop: true,
    }, []);

    return () => typed.destroy();
  }, []);





  return (
    <div className="text-white w-11/12 mx-auto">
      {/* banner */}
      <div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <h1>WELCOME TO MY WORLD</h1>
              <h2><span className="text-2xl font-semibold">Hi,</span> I'm Abu Sayed Sohag</h2>
              <h3 className="text-5xl font-black"><span className="text-[#B14DB6]">Full-Stack</span> Web Developer</h3>
              <h1 className="h-20"><span ref={typedRef}></span></h1>
            </div>

            <div className="flex gap-4">
              <button className="p-2 px-10 font-semibold bg-white text-black rounded-full">My Projects</button>
              <button className="p-2 px-4 rounded-full border-l border-r">Download CV</button>
            </div>
            <div className="flex gap-2 md:gap-4">
              <button className="w-10 h-10 fa-xl bg-white text-black rounded-full"><i className="fa-brands fa-facebook"></i></button>
              <button className="w-10 h-10 fa-xl bg-white text-black rounded-full"><i className="fa-solid fa-envelope"></i></button>
              <button className="w-10 h-10 fa-xl bg-white text-black rounded-full"><i className="fa-brands fa-linkedin"></i></button>
              <button className="w-10 h-10 fa-xl bg-white text-black rounded-full"><i className="fa-brands fa-instagram"></i></button>
            </div>
          </div>

          <div className="flex justify-end drop-shadow-[-40px_-40px_80px_rgba(40,15,150,1)]">
            <div className="">
              <img
                src="./me.png"
                width={350}
              />
            </div>
          </div>
        </div>
        <button className="bg-white w-12 h-12 flex justify-center items-center rounded-full mx-auto">
          <Lottie
            animationData={downarrow}
            loop={true}
            className="w-10 h-10"
          />
        </button>
      </div>
      <br />

      <hr />

      {/* About me */}
      <div className="my-20">
        <About></About>
      </div>

      <div className="my-20">
        <Services></Services>
      </div>
    </div>
  );
}
