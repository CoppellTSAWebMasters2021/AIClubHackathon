import React from "react";
import styled from "styled-components";

import { Flex } from "@chakra-ui/react";
export const RegisterContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#2a2a2a" : "#1a1a1a")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const RegisterContent = styled.div`
  display: grid;
  z-index: 1;
  padding: 0 24px;
  max-width: 1200px;
  width: 100%;
  height: 860px;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
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

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterContent>
        <Flex justifyContent="center" alignItems="center">
          <Heading lightText={true}>Register</Heading>
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
        ></Flex>
      </RegisterContent>
    </RegisterContainer>
  );
};

export default Register;
