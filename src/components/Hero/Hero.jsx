import React from "react";
import { Button } from "../ButtonElement.jsx";
import HeroImage from "../../images/hero-bg.jpg";
import Down from "../../images/arrow.svg";

import {
  HeroContainer,
  HeroBg,
  HeroBgImage,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroArrowDown,
  ArrowText,
  // ArrowForward,
  // ArrowRight,
} from "./HeroElements";
import { HStack } from "@chakra-ui/react";

const Hero = () => {
  // const [hover, setHover] = useState(false)

  // const onHover = () => {
  //     setHover(!hover)
  // }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <HeroBgImage src={HeroImage} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <HeroH1> Virtual Artifical Intelligence Hackathon 2022</HeroH1>
        <HStack>
          <HeroBtnWrapper>
            <Button
              to="contactus"
              // onMouseEnter={onHover}
              // onMouseLeave={onHover}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary="true"
              dark="true"
            >
              {" "}
              Register
            </Button>
          </HeroBtnWrapper>
        </HStack>

        <HeroArrowDown src={Down} />
        <ArrowText>Scroll Down</ArrowText>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
