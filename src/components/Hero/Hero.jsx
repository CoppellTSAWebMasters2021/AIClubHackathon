import React, { useEffect, useState } from "react";
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
  HeroH2,
} from "./HeroElements";
import { HStack } from "@chakra-ui/react";

const Hero = () => {
  // const [hover, setHover] = useState(false)

  // const onHover = () => {
  //     setHover(!hover)
  // }

  const calculateTimeLeft = () => {
    let difference = +new Date(`5/06/2022`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <HeroContainer id="home">
      <HeroBg>
        <HeroBgImage src={HeroImage} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <HeroH1>NeuroHack Systems Hackathon 2022 </HeroH1>
        <HeroH2>Time Left To Register:</HeroH2>
        <HeroH2>
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span>It's time to Hack</span>
          )}
        </HeroH2>
        <HStack>
          <HeroBtnWrapper>
            <Button
              to="/register"
              // onMouseEnter={onHover}
              // onMouseLeave={onHover}

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
