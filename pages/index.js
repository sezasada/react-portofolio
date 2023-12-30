import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import mypicture from "../public/mypicture.png";
import farmworks from "../public/farmworks.png";
import Image from "next/image";
import MarketWatcher from "../public/MarketWatcher.png";
import cryptoExchange from "../public/crypto-exchange.png";
import EarningsData from "../public/EarningsData.png";
function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [clickedLetters, setClickedLetters] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const secretSequence = "is";
  const videoRef = useRef(null);

  useEffect(() => {
    if (clickedLetters.slice(-secretSequence.length) === secretSequence) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }, [clickedLetters, secretSequence]);

  const letters = [
    "C",
    "r",
    "y",
    "p",
    "t",
    "o",
    "E",
    "x",
    "c",
    "h",
    "a",
    "n",
    "g",
    "e",
    "`",
    "i",
    "s",
    "`",
    "a",
    "`",
    "s",
    "o",
    "l",
    "i",
    "d",
    "i",
    "t",
    "y",
    "/",
    "j",
    "s",
    "`",
    "a",
    "p",
    "p",
    "l",
    "i",
    "c",
    "a",
    "t",
    "i",
    "o",
    "n",
    "`",
    "t",
    "h",
    "a",
    "t",
    "`",
    "a",
    "l",
    "l",
    "o",
    "w",
    "s",
    "`",
    "u",
    "s",
    "e",
    "r",
    "s",
    "`",
    "t",
    "o",
    "`",
    "t",
    "r",
    "a",
    "d",
    "e",
    "/",
    "d",
    "e",
    "p",
    "o",
    "s",
    "i",
    "t",
    "/",
    "w",
    "i",
    "t",
    "h",
    "d",
    "r",
    "a",
    "w",
    "`",
    "r",
    "e",
    "a",
    "l",
    "`",
    "o",
    "r",
    "`",
    "m",
    "o",
    "c",
    "k",
    "`",
    "c",
    "u",
    "r",
    "r",
    "e",
    "n",
    "c",
    "y",
    ",",
    "`",
    "p",
    "o",
    "w",
    "e",
    "r",
    "e",
    "d",
    "`",
    "b",
    "y",
    "`",
    "s",
    "m",
    "a",
    "r",
    "t",
    "`",
    "c",
    "o",
    "n",
    "t",
    "r",
    "a",
    "c",
    "t",
    "s",
    ".",
    "`",
    "V",
    "a",
    "r",
    "i",
    "o",
    "u",
    "s",
    "`",
    "t",
    "e",
    "c",
    "h",
    "n",
    "o",
    "l",
    "o",
    "g",
    "i",
    "e",
    "s",
    "`",
    "a",
    "r",
    "e",
    "`",
    "u",
    "s",
    "e",
    "d",
    "`",
    "t",
    "h",
    "r",
    "o",
    "u",
    "g",
    "h",
    "o",
    "u",
    "t",
    "`",
    "t",
    "h",
    "i",
    "s",
    "`",
    "a",
    "p",
    "p",
    "l",
    "i",
    "c",
    "a",
    "t",
    "i",
    "o",
    "n",
    "`",
    "s",
    "u",
    "c",
    "h",
    "`",
    "a",
    "s",
    "`",
    "h",
    "a",
    "r",
    "d",
    "h",
    "a",
    "t",
    ",",
    "`",
    "r",
    "e",
    "d",
    "u",
    "x",
    ",",
    "`",
    "a",
    "n",
    "d",
    "`",
    "m",
    "e",
    "t",
    "a",
    "m",
    "a",
    "s",
    "k",
    ".",
  ];

  const handleLetterClick = (letter) => {
    if (letter !== "`") {
      setClickedLetters((prevLetters) => prevLetters + letter.toLowerCase());
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

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
              Software Engineer
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a Software Engineer at Landtrust, The Recractional Access
              Network. I love working with front-end and back-end development
              and I am always looking for ways to further my technical skills.
            </p>
            <div className="text-5xl flex justify-center gap-7 py-3 text-gray-600 dark:text-gray-400">
              <Link href="https://www.linkedin.com/in/sebastien-zasada">
                <a target="_blank">
                  <AiFillLinkedin className="icon-grow" />
                </a>
              </Link>
              <Link href="https://github.com/sezasada">
                <a target="_blank">
                  <FaGithub className="icon-grow" />
                </a>
              </Link>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 border-4 border-teal-600 dark:border-teal-400">
              <Image src={mypicture} alt="Picture of Sebastien" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="divs-div">
            <div
              className="text-center mt-4"
              style={{ maxWidth: "1000px", margin: "0 auto" }}
            >
              <div className="center-title">
                <div className="text-3xl py-1 dark:text-white">Projects</div>
              </div>

              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                As a junior developer, I&apos;ve been expanding my skills in
                Javascript, React.js, PostgreSQL, MySQL, C#, HTML, CSS, and
                I&apos;m always on the lookout for new challenges and projects
                to tackle. I believe that coding is both an art and a science,
                and I&apos;m committed to crafting elegant, efficient solutions
                that meet the needs of my clients and users.
              </p>
            </div>
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
                  <div className={darkMode ? "dark-border" : "light-border"}>
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
                  </div>
                </a>
              </div>
              <div className="buttonContainer">
                <div
                  className={
                    darkMode
                      ? "CodeContainer dark-mode"
                      : "CodeContainer light-mode"
                  }
                  onClick={() =>
                    window.open(
                      "https://marketwatcher.fly.dev/#/home",
                      "_blank"
                    )
                  }
                >
                  <a
                    href="https://marketwatcher.fly.dev/#/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Site</button>
                  </a>
                </div>
                <div
                  className={
                    darkMode
                      ? "CodeContainer dark-mode"
                      : "CodeContainer light-mode"
                  }
                  onClick={() =>
                    window.open("https://github.com/sezasada/Solo", "_blank")
                  }
                >
                  <a
                    href="https://github.com/sezasada/Solo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Code</button>
                  </a>
                </div>
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
                <p style={{ textAlign: "left" }}>
                  <a
                    className="text-base text-teal-600 font-medium dark:text-teal-400"
                    href="https://openai.com/blog/openai-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Open AI Api
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
                <div className={darkMode ? "dark-border" : "light-border"}>
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
                </div>
              </a>
              <div className="buttonContainer">
                <div
                  className={
                    darkMode
                      ? "CodeContainer dark-mode"
                      : "CodeContainer light-mode"
                  }
                  onClick={() =>
                    window.open(
                      "https://farminthedell.fly.dev/#/main",
                      "_blank"
                    )
                  }
                >
                  <a
                    href="https://farminthedell.fly.dev/#/main"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Site</button>
                  </a>
                </div>
                <div
                  className={
                    darkMode
                      ? "CodeContainer dark-mode"
                      : "CodeContainer light-mode"
                  }
                  onClick={() =>
                    window.open(
                      "https://github.com/sezasada/task_portal",
                      "_blank"
                    )
                  }
                >
                  <a
                    href="https://github.com/sezasada/task_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Code</button>
                  </a>
                </div>
              </div>
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
              >
                CryptoExchange
              </div>
              <div style={{ overflow: "hidden", position: "relative" }}>
                <a
                  href="https://marketwatcher.fly.dev/#/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={darkMode ? "dark-border" : "light-border"}>
                    {!isVideoPlaying && (
                      <Image
                        className="marketwatcherimg"
                        src={cryptoExchange}
                        alt="Image of Market Watcher Application"
                        onMouseOver={(e) => {
                          e.target.style.transform =
                            "scale(1.39) translateZ(0)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = "scale(1) translateZ(0)";
                        }}
                      />
                    )}
                    <div className="secret-container">
                      {clickedLetters.slice(-secretSequence.length) ===
                        secretSequence && (
                        <video
                          className="codClip"
                          ref={videoRef}
                          onClick={togglePlayPause}
                          src="/newvid.mp4"
                          type="video/mp4"
                          loop
                          muted
                          alt="image of crypto application"
                        ></video>
                      )}
                    </div>
                  </div>
                </a>
              </div>

              <div className="buttonContainer">
                <div
                  className={
                    darkMode
                      ? "CodeContainer dark-mode"
                      : "CodeContainer light-mode"
                  }
                  onClick={() =>
                    window.open(
                      "https://farminthedell.fly.dev/#/main",
                      "_blank"
                    )
                  }
                >
                  <a
                    href="https://farminthedell.fly.dev/#/main"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Site</button>
                  </a>
                </div>
                <div
                  className={
                    darkMode
                      ? "CodeContainer dark-mode"
                      : "CodeContainer light-mode"
                  }
                  onClick={() =>
                    window.open(
                      "https://github.com/sezasada/task_portal",
                      "_blank"
                    )
                  }
                >
                  <a
                    href="https://github.com/sezasada/task_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Code</button>
                  </a>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="title-main">
                  {
                    letters.reduce(
                      (acc, letter, index) => {
                        if (letter === "`" || index === letters.length - 1) {
                          if (index === letters.length - 1 && letter !== "`") {
                            acc.currentWord.push(
                              <span
                                className="letter text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
                                key={index}
                                onClick={() => handleLetterClick(letter)}
                              >
                                {letter}
                              </span>
                            );
                          }

                          acc.words.push(
                            <span className="word-container" key={index}>
                              {acc.currentWord}
                            </span>
                          );
                          if (letter === "`" && index !== letters.length - 1) {
                            acc.words.push(
                              <span
                                key={`space-${index}`}
                                style={{ whiteSpace: "pre" }}
                              >
                                &nbsp;
                              </span>
                            );
                          }
                          acc.currentWord = [];
                        } else {
                          acc.currentWord.push(
                            <span
                              className="letter text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
                              key={index}
                              onClick={() => handleLetterClick(letter)}
                            >
                              {letter}
                            </span>
                          );
                        }

                        return acc;
                      },
                      { currentWord: [], words: [] }
                    ).words
                  }
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
