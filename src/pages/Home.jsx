import React from "react";
import Details from "../components/Details/Details";
// import Aboutus from "../components/About/Aboutus";
// import FAQHero from "../components/FAQ/FAQHero";
import Hero from "../components/Hero/Hero";
// import Card from "../components/Info/Card/Card";

// import Rules from "../components/Rules/Rules";
// import Schedule from "../components/Schedule/Schedule";
// import Services from "../components/Services/Services";
import When from "../components/When/When";
// import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Details />
      <When />
      {/* <Schedule /> */}

      {/* <Aboutus />
      <Rules />
      <FAQHero />
      <Contact /> */}
    </>
  );
};

export default Home;
