"use client"

import React, { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Me from "./components/Me";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import { FaS } from "react-icons/fa6";


export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
useEffect(() => {
  if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches  )) {
    setDarkMode(true)
  } else {
    setDarkMode(false);
  }
}, [])

  useEffect(() => {
  if(darkMode) {
 document.documentElement.classList.add('dark')
 localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = "";
  }
  }, [darkMode])


  return (
   <>
   <NavBar toggleTheme={setDarkMode} theme={darkMode}/>
   <Header  theme={darkMode}/>
    <Me  theme={darkMode}/>
    <Services  theme={darkMode}/>
    <Jobs  theme={darkMode}/>
    <Contact  theme={darkMode}/>
    <Footer  theme={darkMode}/>
   </>
  );
}
