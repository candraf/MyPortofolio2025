import React from "react";
import { FcBriefcase } from "react-icons/fc";

function About() {
  return (
    <>
      <section
        id="about"
        className="font-mono flex items-center justify-center  py-20"
      >
        <div className="max-w-3xl mx-auto px-4 bg-gradient-to-t from-teal-500 to-indigo-600  rounded-2xl">
          <h1 className="max-w-3xl bg-red-400 font-semibold mb-12  bg-clip-text text-transparent text-center text-6xl mt-12">
            About Me
          </h1>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2  transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
              A passionate fresh graduate Frontend Engineer with hands-on
              experience in building responsive web applications using HTML,
              CSS, JavaScript, and React.js. Familiar with modern tools like
              Tailwind CSS, and Git. Eager to learn, grow, and contribute to
              dynamic development teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6  transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2 text-white text-lg font-bold ">
                <p>HTML</p>
                <p>React</p>
                <p>Javascript</p>
                <p>Git</p>
              </div>
            </div>

            <div className="p-6  transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    {" "}
                    <em>S.T. in Computer Science </em>{" "}
                  </strong>
                  Universitas Negeri Malang (2018-2023)
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6  transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc  list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-600">
                  <em>Frontend Engineer (Freelance )</em>
                </strong>
                📍
                <br />
                Onsite | Feb 2023 - July 2023 <br />
                - Built responsive websites from provided designs, ensuring
                alignment with user requirements and functionality goals.
                <br />- Developed dynamic user interfaces with JavaScript
                (ES6+), HTML, and CSS with Reactjs. <br />- Collaborate with the
                UI/UX and backend teams using the agile method to complete the
                web application.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
