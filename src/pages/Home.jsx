import React from "react";
// import Aboutus from "../components/About/Aboutus";
// import FAQHero from "../components/FAQ/FAQHero";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
// import Card from "../components/Info/Card/Card";

// import Rules from "../components/Rules/Rules";
// import Schedule from "../components/Schedule/Schedule";
// import Services from "../components/Services/Services";
// import Contact from "../components/Contact/Contact";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/Info/Data";

const Home = () => {
  return (
    <>
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Info {...homeObjFour} />

      {/* <Schedule /> */}

      {/* <Aboutus />
      <Rules />
      <FAQHero />
      <Contact /> */}
    </>
  );
};

export default Home;
