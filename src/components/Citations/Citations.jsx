import { Flex, HStack, Link, VStack } from "@chakra-ui/react";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";

export const CitationsContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#222222" : "#1a1a1a")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const CitationsContent = styled.div`
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

export const Heading = styled.h1`
    
    font-size: 46px;
    line-height: 1.1;
    font-weight: 600;
    color ${({ lightText }) => (lightText ? "#ffffff" : "#010606")};
    margin-bottom: 32px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`;

export const SubHeading = styled.h2`
  font-size: 20px;
  line-height: 2;
  font-weight: 600;
  color: #fff;
`;

export const Subtitle = styled.h4`
  font-size: 18px;
  line-height: 2;
  font-weight: 600;
  color: #fff;
`;

const Citations = () => {
  return (
    <CitationsContainer>
      <CitationsContent>
        <Flex justifyContent="center" alignItems="center">
          <VStack>
            <Heading lightText={true}>Citations</Heading>

            <Link href="https://www.youtube.com/watch?v=Nl54MJDR2p8" isExternal>
              <HStack>
                <SubHeading>Design and Inspiration</SubHeading>
                <FaExternalLinkAlt color="#fff" />
              </HStack>
            </Link>
            <Link href="https://undraw.co">
              <HStack>
                <SubHeading>Illustrations</SubHeading>
                <FaExternalLinkAlt color="#fff" />
              </HStack>
            </Link>
            <Link href="https://unsplash.com/photos/58Z17lnVS4U">
              <HStack>
                <SubHeading>Background</SubHeading>
                <FaExternalLinkAlt color="#fff" />
              </HStack>
            </Link>
          </VStack>
        </Flex>
      </CitationsContent>
    </CitationsContainer>
  );
};

export default Citations;
