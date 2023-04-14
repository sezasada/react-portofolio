import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import mypicture from "../public/mypicture.png";
import farmworks from "../public/farmworks.png";
import Image from "next/image";
import MarketWatcher from "../public/MarketWatcher.png";
import EarningsData from "../public/EarningsData.png";
function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`px-10 md:px-20 lg:px-40 ${
          darkMode ? "bg-gray-900 dark:text-white" : "bg-D3D3D3"
        }`}
      >
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <div className="font-burtons text-xl">Portfolio</div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link href="/resume">
                  <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                    Resume
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <div className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sebastien Zasada
            </div>
            <div className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a graduate of Emerging Digital Academy, an immersion in
              software engineering education, establishing a foundation that
              will allow me to immediately contribute as an entry level software
              engineer.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link href="https://www.linkedin.com/in/sebastien-zasada">
                <a target="_blank">
                  <AiFillLinkedin className="icon-grow" />
                </a>
              </Link>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={mypicture} alt="Picture of Sebastien" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <div className="text-3xl py-1 dark:text-white ">Projects</div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a junior developer, I&apos;ve been expanding my skills in
              Express.js, Javascript, React.js, PostgreSQL, HTML, CSS, and
              I&apos;m always on the lookout for new challenges and projects to
              tackle. I believe that coding is both an art and a science, and
              I&apos;m committed to crafting elegant, efficient solutions that
              meet the needs of my clients and users.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
                className="text-3xl py-1 dark:text-white"
              >
                Market Watcher
              </div>
              <div style={{ overflow: "hidden", position: "relative" }}>
                <a
                  href="https://marketwatcher.fly.dev/#/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="marketwatcherimg"
                    src={EarningsData}
                    alt="Image of Market Watcher Application"
                    onMouseOver={(e) => {
                      e.target.style.transform = "scale(1.39) translateZ(0)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "scale(1) translateZ(0)";
                    }}
                  />
                </a>
              </div>
              <div className="text-center mt-4">
                <p
                  className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
                  style={{ textAlign: "left" }}
                >
                  Market Watcher is a comprehensive web application designed to
                  provide users with seamless access to the latest earnings
                  reports, financial data, and news for NASDAQ-listed companies.
                  By simply entering a company name or symbol and selecting a
                  time frame, users can quickly view relevant earnings reports.
                  The user-friendly watchlist feature allows users to add stocks
                  with a single click and conveniently rename their watchlist by
                  clicking the pencil icon. The ticker bar at the top of the
                  page displays all the stocks in a user&apos;s watchlist, and
                  clicking on any ticker redirects the user to Trading View for
                  in-depth data analysis and charting. All stock data, news
                  articles, and earnings reports are consistently up to date
                  throught the following APIs:
                </p>
                <p style={{ textAlign: "left" }}>
                  <a
                    className="text-base text-teal-600 font-medium dark:text-teal-400"
                    href="https://site.financialmodelingprep.com/developer/docs/#Earnings-Calendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Financial Modeling Prep
                  </a>
                </p>
                <p style={{ textAlign: "left" }}>
                  <a
                    className="text-base text-teal-600 font-medium dark:text-teal-400"
                    href="https://stocknewsapi.com/examples"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Stock News API
                  </a>
                </p>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
                className="text-3xl py-1 dark:text-white"
              >
                FarmWorks
              </div>
              <a
                href="https://farminthedell.fly.dev/#/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="farmworksimg"
                  src={farmworks}
                  alt="image of farmworks application"
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.6)";
                    e.target.style.transformOrigin = "top";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.transformOrigin = "center";
                  }}
                />
              </a>
              <div className="text-center mt-4">
                <p
                  className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
                  style={{ textAlign: "left" }}
                >
                  Farm in the Dell of the Red River River Valley is a non profit
                  organization that was tracking their tasks around the farm on
                  a whiteboard. This led to some issues of knowing who was
                  responsible for what and what kind of tasks could be done
                  during a specific day. This app is designed to streamline
                  their process of task management. Helping to delegate tasks
                  and keep track of what tasks are going on and who is doing
                  them. For more information about the Farm in the Dell and the
                  application, click here:
                </p>
                <Link href="/task_portal">
                  <p style={{ textAlign: "left" }}>
                    <a
                      className="text-base text-teal-600 font-medium dark:text-teal-400"
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      Application information
                    </a>
                  </p>
                </Link>
              </div>
            </div>

            <div className="basis-1/3 flex-1">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
                className="text-3xl py-1 dark:text-white"
              ></div>
              <p
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  position: "relative",
                  zIndex: 1,
                }}
                src={MarketWatcher}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home;
