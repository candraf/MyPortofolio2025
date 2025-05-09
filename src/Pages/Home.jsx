import React from "react";
import myImage from "../assets/profilepic.jpg";
import About from "../components/About";
import Contact from "../components/Contact";
import Foter from "../components/Foter";
import { GoDownload } from "react-icons/go";
import { LuContactRound } from "react-icons/lu";
import MyResume from '../assets/CV.pdf'
import MyProfile from '../assets/MyProfile.png'

function Home() {
  return (
    <>
      <section
        id="#home"
        className="my-70 flex flex-col items-center lg:flex-row-reverse gap-9 lg:gap-30  container mx-auto"
      >
        <div className="text-center  px-4 ">
          <img
            className="w-[400px] h-[400px] sm:w-[250px] sm:h-[350px]  border-0 mt-20 rounded-4xl shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px]  object-cover object-bottom  transition-all "
            src={MyProfile}
            alt="Profile Image"
          />
        </div>
        <div className="text-center font-mono  px-4 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w[600px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-right ">
            I am Candra Friyandi Harianja
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I am a frontend developer who loves creation interactive, scalable
            web applications. My purpose is to build solutions that offer
            dynamic UI, high performance and delightful UX.
          </p>
          <div className="flex justify-center items-center space-x-4 m-15 ">
            <a
              className=" bg-gradient-to-b flex flex-row from-teal-500 to-indigo-900 py-3 px-6 rounded hover:-translate-y-1   hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]  font-bold transition  overflow-hidden"
              href="#contact"
            >
              <p>contact </p>
              <span className="h-5 ml-3 text-2xl ">
              <LuContactRound className="flex items-center justify-center "/>
              </span>
              
            </a>
            <a
              className="bg-gradient-to-b flex flex-row from-teal-500 to-indigo-900 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]  font-bold transition overflow-hidden "
              href={MyResume}
              download
            >
              <p>Resume </p>
              <span className="h-5 ml-3 text-2xl ">
              <GoDownload className="flex items-center justify-center "/>
              </span>
            </a>
          </div>
        </div>
      </section>

      <About />
      <Contact />
      <Foter />
    </>
  );
}

export default Home;
