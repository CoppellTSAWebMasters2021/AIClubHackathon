import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElement";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              {" "}
              NeuroHack
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/" exact="true" offset={-80}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/aboutus" exact="true" offset={-80}>
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/schedule" exact="true" offset={-80}>
                  Schedule
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/faq" exact="true" offset={-80}>
                  FAQ
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contactus" exact="true" offset={-80}>
                  Contact Us
                </NavLinks>
              </NavItem>
              <NavBtn>
                <Button
                  to="/register"
                  // onMouseEnter={onHover}
                  // onMouseLeave={onHover}

                  exact="true"
                  offset={-80}
                  primary="true"
                  dark="true"
                >
                  Register
                </Button>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
