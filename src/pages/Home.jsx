import React, { useState } from "react";
import Aboutus from "../components/About/Aboutus";
import FAQHero from "../components/FAQ/FAQHero";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
// import Card from "../components/Info/Card/Card";

import Navbar from "../components/Navbar/Navbar";
import Rules from "../components/Rules/Rules";
import Schedule from "../components/Schedule/Schedule";
// import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";
import Sponsor from "../components/Sponsor/Sponsor";
import When from "../components/When/When";
import Contact from "../components/Contact/Contact";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Aboutus />
      <When />
      <Schedule />
      <Rules />
      <FAQHero />
      <Sponsor />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
