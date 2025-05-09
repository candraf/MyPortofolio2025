import React from 'react'
//icon
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Foter() {
  return (
    <>
        <footer>
          <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 ">
            <div className="flex gap-10 p-4 justify-center text-white ">
              <a
                href="https://github.com/candraf"
                className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white "
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/candra-friyandi-harianja-dev/"
                className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white "
                target="_blank"
              >
              <FaLinkedin />
              </a>
              <a
                href="https://discord.com/invite/candrafriyandi"
                className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gray-800 text-white "
                target="_blank"
              >
               <FaDiscord />
    
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center bg-gray-800 pb-8 text-white ">
            <p className="font-mono font-bold mt-10 ">@2025 Candra Friyandi Harianja  </p>
            </div>
        </footer>
    </>
  )
}

export default Foter