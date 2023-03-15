import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import mypicture from "../public/mypicture.png"
import feedback from '../public/Feedback.png';
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import MarketWatcher from "../public/MarketWatcher.png"
import Movies from "../public/Movies.png";
import EarningsData from "../public/EarningsData.png";
import Resume from "./resume";

function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`px-10 md:px-20 lg:px-40 ${darkMode ? 'bg-gray-900 dark:text-white' : 'bg-D3D3D3'}`}>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                {/* <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a> */}
                <a href="/resume" className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sebastien Zasada
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a student at Emerging Digital Academy, an immersion in software engineering education,
              establishing a foundation that will allow me to immediately contribute as an entry level software engineer.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/sebastien-zasada-b0545a259/" target="_blank">

                <AiFillLinkedin className="icon-grow"/>
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={mypicture} />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a junior developer, I've been honing my skills in Express.js, Javascript, React.js, PostgreSQL, HTML, CSS,
              and I'm always on the lookout for new challenges and projects to tackle. I believe that coding is both an art
              and a science, and I'm committed to crafting elegant, efficient solutions that meet the needs of my clients and users.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <h3 style={{ display: "flex", justifyContent: "center", textAlign: "center", marginBottom: "10px" }} className="text-3xl py-1 dark:text-white">Market Watcher</h3>
              <div style={{ overflow: "hidden", position: "relative" }}>
                <a href="https://marketwatcher.fly.dev/#/home" target="_blank" rel="noopener noreferrer">
                  <Image
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", position: "relative", zIndex: 1 }}
                    src={EarningsData}
                    onMouseOver={(e) => { e.target.style.transform = "scale(1.39) translateZ(0)" }}
                    onMouseOut={(e) => { e.target.style.transform = "scale(1) translateZ(0)" }}
                  />
                </a>
              </div>
            </div>


            <div className="basis-1/3 flex-1">
              <h3 style={{ display: "flex", justifyContent: "center", textAlign: "center", marginBottom: "10px" }} className="text-3xl py-1 dark:text-white">Movie Sagas</h3>
              <a href="http://moviesagas.fly.dev" target="_blank" rel="noopener noreferrer">
                <Image
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", position: "relative", zIndex: 1 }}
                  src={Movies}
                  onMouseOver={(e) => { e.target.style.transform = "scale(1.2)"; e.target.style.transformOrigin = "top" }}
                  onMouseOut={(e) => { e.target.style.transform = "scale(1)"; e.target.style.transformOrigin = "center" }}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <h3 style={{ display: "flex", justifyContent: "center", textAlign: "center", marginBottom: "10px" }} className="text-3xl py-1 dark:text-white">Feedback Loop</h3>
              <a href="https://feedbackloop.fly.dev/#/" target="_blank" rel="noopener noreferrer">
                <Image
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", position: "relative", zIndex: 1 }}
                  src={feedback}
                  onMouseOver={(e) => { e.target.style.transform = "scale(1.6)"; e.target.style.transformOrigin = "top" }}
                  onMouseOut={(e) => { e.target.style.transform = "scale(1)"; e.target.style.transformOrigin = "center" }}
                />

              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <h3 style={{ display: "flex", justifyContent: "center", textAlign: "center", marginBottom: "10px" }} className="text-3xl py-1 dark:text-white"></h3>
              <p
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", position: "relative", zIndex: 1 }}
                src={MarketWatcher}
                onMouseOver={(e) => { e.target.style.transform = "scale(1.4)" }}
                onMouseOut={(e) => { e.target.style.transform = "scale(1)" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home;
