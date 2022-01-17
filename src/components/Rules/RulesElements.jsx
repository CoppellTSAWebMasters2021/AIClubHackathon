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