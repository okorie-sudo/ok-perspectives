"use client"

import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Me from "./components/Me";
import NavBar from "./components/NavBar";
import Services from "./components/Services";


export default function Home() {
  return (
   <>
   <NavBar/>
   <Header />
    <Me />
    <Services />
    <Jobs />
   </>
  );
}
