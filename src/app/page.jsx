"use client";

import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import downarrow from "./../../public/animations/downarrow.json";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Reviews from "@/Components/Reviews";
import Contact from "@/Components/Contact";
import Whatsapp from "@/Components/Whatsapp";
import Projects from "@/Components/Projects";


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
    <div className="text-white">
      {/* banner */}
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="space-y-1">
              <h1>WELCOME TO MY WORLD</h1>
              <h2><span className="text-2xl font-semibold">Hi,</span> I'm Abu Sayed Sohag</h2>
              <h3 className="text-5xl font-black"><span className="text-[#B14DB6]">Full-Stack</span> Web Developer</h3>
              <h1 className="h-20"><span ref={typedRef}></span></h1>
            </div>

            <div className="flex gap-4">
              <a href="#myprojects" className="p-2 px-10 font-semibold bg-white text-black rounded-full">My Projects</a>
              <a href="./Abu_Sayed.pdf" download="Abu_Sayed_Resume.pdf" className="p-2 px-4 rounded-full border-l border-r">Download CV</a>
            </div>
            <div className="flex gap-2 md:gap-4">
              <a target="_blank" href="https://www.facebook.com/abusayedsohagislam/" className="w-10 h-10 flex justify-center items-center hover:bg-pink-300 fa-xl bg-white text-black rounded-full"><i className="fa-brands fa-facebook"></i></a>
              <a target="_blank" href="mailto:abusayedsohagislam25@gmail.com" className="w-10 h-10 flex justify-center items-center hover:bg-pink-300 fa-xl bg-white text-black rounded-full"><i className="fa-solid fa-envelope"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/abu-sayed-sohag-islam/" className="w-10 h-10 flex justify-center items-center hover:bg-pink-300 fa-xl bg-white text-black rounded-full"><i className="fa-brands fa-linkedin"></i></a>
              <a target="_blank" href="https://www.instagram.com/abusayedsohagislam/" className="w-10 h-10 flex justify-center items-center hover:bg-pink-300 fa-xl bg-white text-black rounded-full"><i className="fa-brands fa-instagram"></i></a>
              <a target="_blank" href="https://wa.me/8801761555819" className="w-10 h-10 flex justify-center items-center hover:bg-pink-300 fa-xl bg-white text-black rounded-full"><i className="fa-brands fa-whatsapp"></i></a>
              <a target="_blank" href="https://github.com/abusayedsohag" className="w-10 h-10 flex justify-center items-center hover:bg-pink-300 fa-xl bg-white text-black rounded-full"><i className="fa-brands fa-github"></i></a>
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
        <a href="#about" className="bg-white w-12 h-12 flex justify-center items-center rounded-full mx-auto">
          <Lottie
            animationData={downarrow}
            loop={true}
            className="w-10 h-10"
          />
        </a>
      </div>
      <div className="h-[1px] m-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      {/* About me */}
      <div className="">
        <About></About>
      </div>
      <div className="h-[1px] m-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      <div className="">
        <Services></Services>
      </div>
      <div className="h-[1px] m-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      <div className="">
        <Reviews></Reviews>
      </div>
      <div className="h-[1px] mx-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      <div className="">
        <Projects></Projects>
      </div>
      <div className="h-[1px] mx-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      <div className="">
        <Contact></Contact>
      </div>

      <Whatsapp></Whatsapp>
    </div>
  );
}
