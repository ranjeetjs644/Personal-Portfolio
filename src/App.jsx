import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Educations from "./pages/Educations";
import Contact from "./pages/Contact";
import useScrollTitle from "./hooks/useScrollTitle"; // Import the custom hook
import PreLoader from "./anim/PreLoader";
import Social from "./components/Social";
import CursorGlow from "./anim/CursorGlow";

function App() {
  const sectionsObject = {
    home: "Ranjeet Patel - Home",
    about: "Ranjeet Patel - About",
    skills: "Ranjeet Patel - Skills",
    projects: "Ranjeet Patel - projects",
    contact: "Ranjeet Patel - Contact",
  };
  useScrollTitle(sectionsObject);

  const [preloader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 2000);
  }, []);

  if (preloader) {
    return <PreLoader />;
  }

  return (
    <>
      <CursorGlow />
      <Header />
      <main className="w-screen">
        <Home />
        <Social />
        <About />
        <Skills />
        <Educations />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
