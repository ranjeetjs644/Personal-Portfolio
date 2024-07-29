import React, { useEffect } from "react";


function About() {
  useEffect(() => {
    // Set document title when the component mounts
    document.title = "Ranjeet Patel - Home";
    // Optional cleanup function if needed
    return () => {
      document.title = "Default Title"; // or any other default title
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <main
        id="about"
        className=" h-screen mx-auto flex flex-col items-center justify-center   relative"
      >

        <div className="flex items-center justify-center  w-full">
          {" "}
          <h2 className="text-xl pb-2 font-semibold text-slate-400 font-Inter uppercase ">
            About
          </h2>
        </div>
        <div className="w-1/2 h-full"></div>
      </main>

    </>
  );
}

export default About;
