import styled from "styled-components";

export const Rectangle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: ${({ big }) => (big ? "969px" : "569px")};
  height: 370px;
  background: ${({ lightBg }) => (lightBg ? "#8EBCD9" : "#5E4CD6")};
  box-shadow: 0px 4px 30px
    ${({ lightShadow }) => (lightShadow ? "#8EBCD9" : "#5E4CD6")};
  border-radius: 48px;
  @media screen and (max-width: 1350px) {
    width: 569px;
    height: 370px;
  }

  @media screen and (max-width: 1000px) {
    width: 379px;
    height: 370px;
  }

  @media screen and (max-width: 500px) {
    width: 320px;
    height: 370px;
  }
`;
