import styled from "styled-components";
import { MdKeyboardArrowDown, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroBgImage = styled.img`
  background-color: black;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1080px;
  height: 200px
  position: absolute;
  padding: 8px 24px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 24px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroArrowDown = styled.img`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 50px;

  @media screen and (max-width: 768px) {
    bottom: 40px;
  }
`;

export const ArrowText = styled.p`
  color: #8ebcd9;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  position: absolute;
  bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
