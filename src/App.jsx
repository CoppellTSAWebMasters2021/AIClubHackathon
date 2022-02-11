import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Schedule from "./components/Schedule/Schedule";
import FAQHero from "./components/FAQ/FAQHero";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import Aboutus from "./components/About/Aboutus";
import ScrollToTop from "./pages/ScrollToTop";
import Citations from "./components/Citations/Citations";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <ScrollToTop>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/faq" element={<FAQHero />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/citations" element={<Citations />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
