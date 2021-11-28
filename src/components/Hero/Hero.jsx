import React from "react";
import { Button } from "../ButtonElement.jsx";
import Image from "../../images/hero-bg.jpg";

import {
  HeroContainer,
  HeroBg,
  HeroBgImage,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  // ArrowForward,
  // ArrowRight,
} from "./HeroElements";

const Hero = () => {
  // const [hover, setHover] = useState(false)

  // const onHover = () => {
  //     setHover(!hover)
  // }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <HeroBgImage src={Image} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <HeroH1> Virtual Artifical Intelligence Hackathon 2022</HeroH1>
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
            Join Now
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
