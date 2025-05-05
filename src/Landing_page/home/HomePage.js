import React from "react";
import HeroSection from "./HeroSection";
import Education from "./Education";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      
      <HeroSection  />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      
    </>
  );
}

export default HomePage;
