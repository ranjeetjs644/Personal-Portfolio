import React, { useEffect } from "react";
import "../index.css";
import Social from "../components/Social";
import TextSpan from "../anim/TextSpan";
import AnimatedSection from "../anim/AnimatedSection";
import CursorGlow from "../anim/CursorGlow";

function Home() {
  const name = "RanjeetPatel".split("");
  const firstName = "Ranjeet".split("");
  const lastName = "Patel".split("");

  return (
    <>
      <main
        id="home"
        className="min-w-screen min-h-screen mx-auto overflow-x-hidden z-10  "
      >
        <CursorGlow />

        <section className="flex flex-col  items-start justify-center py-12 p-6 mt-24 md:flex-col md:items-start md:w-[70%] md:mx-auto md:mt-28">
          <div className="flex  flex-col items-start justify-center 500 py-12 sm:py-8 pl-0">
            <AnimatedSection>
              <p className="text-xl font-mont font-light text-gray-400  pl-2 md:py-2 ">
                Hi,my name is,
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="text-8xl sm:text-8xl tracking-tighter font-Inter font-semibold text-slate-400 cursor-pointer ">
                <span>
                  {firstName.map((letter, index) => (
                    <TextSpan key={index}>{letter}</TextSpan>
                  ))}
                </span>
                <span className="sm:mx-3"></span>
                <span>
                  {lastName.map((letter, index) => (
                    <TextSpan key={index}>{letter}</TextSpan>
                  ))}
                </span>
              </div>
              <h2 className="text-slate-400 ml-2 py-3 text-xl">Frontend Engineer</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-[18px] font-Inter text-gray-400 ml-1 pt-4 w-[100%] sm:w-[80%] md:w-[60%] text-start md:py-4">
                A passionate web developer focused on building interactive and
                responsive web stuffs.
              </p>
            </AnimatedSection>
            <div className="w-full flex flex-wrap my-2">
              <AnimatedSection delay={0.4}>
                {" "}
                <a
                  href="https://drive.google.com/file/d/1oN3nQn4WJP1jGP7rai7gFa1uKCJ1dWGj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-base border border-gray-500 font-Inter text-[#5eead4] px-3 py-1 rounded-md  transition-all hover:custom-glow">
                    Resume
                  </button>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
