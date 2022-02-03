import styled from "styled-components";

export const RulesContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#2a2a2a" : "#1a1a1a")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const RulesWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Heading = styled.h1`
    
    font-size: 46px;
    line-height: 1.1;
    font-weight: 600;
    color ${({ lightText }) => (lightText ? "#f7f8ga" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`;

export const Subtitle = styled.p`
  font-size: 48px;
  max-width: 540px;
  padding: 0 15px;
  shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-weight: 700;

  color: ${({ darkText }) => (darkText ? "#5E4CD6" : "#fff")};

  @media screen and (max-width: 1000px) {
    font-size: 36px;

    width: fit-content;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
