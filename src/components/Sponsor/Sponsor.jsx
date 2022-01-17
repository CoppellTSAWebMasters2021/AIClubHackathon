import { Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export const SponsorContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#2a2a2a" : "#1a1a1a")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SponsorWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 200px;
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

const Sponsor = () => {
  return (
    <>
      <SponsorContainer lightBg={true}>
        <SponsorWrapper>
          <Flex align="center" justify="center">
            <VStack>
              <Heading lightText={true}>Sponsor</Heading>
              <Image src={require("../../images/c2.svg").default} alt="C2" />
            </VStack>
          </Flex>
        </SponsorWrapper>
      </SponsorContainer>
    </>
  );
};

export default Sponsor;
