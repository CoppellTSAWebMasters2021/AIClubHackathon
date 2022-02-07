import styled from "styled-components";

export const FAQContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#2a2a2a" : "#1a1a1a")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const FAQContent = styled.div`
  display: grid;
  z-index: 1;
  padding: 0 24px;
  max-width: 1200px;
  width: 100%;
  height: 900px;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`;

export const FAQAccordions = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  height: fit-content;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const FAQH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 70px;
  }

  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`;
export const Heading = styled.h1`
    
    font-size: 46px;
    line-height: 1.1;
    font-weight: 600;
    color ${({ lightText }) => (lightText ? "#ffffff" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`;
