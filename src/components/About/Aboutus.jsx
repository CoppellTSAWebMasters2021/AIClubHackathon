import React from "react";
import {
  AboutusContainer,
  AboutusWrapper,
  AboutusRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
} from "./AboutusElements";
import { Flex, Box } from "@chakra-ui/react";
import { Rectangle } from "../Rectangle";

const Aboutus = () => {
  return (
    <>
      <AboutusContainer id="aboutus">
        <AboutusWrapper>
          <AboutusRow imgStart={false} imgStartM={true}>
            <Column1>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box w="full" mr={5}>
                  <Rectangle lightBg={true} lightShadow={true} big={true} />
                </Box>

                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box w="full" mt={-340} mr={-50}>
                    <Rectangle lightBg={false} big={true}>
                      <Subtitle>
                        We are a club at Coppell High School whose goal is to
                        educate students about AI.
                      </Subtitle>
                    </Rectangle>
                  </Box>
                </Flex>
              </Flex>
            </Column1>
            <Column2>
              <Flex justifyContent="center" alignItems="center">
                <Heading lightText={true}>About Us</Heading>
              </Flex>
            </Column2>
          </AboutusRow>
        </AboutusWrapper>
      </AboutusContainer>
    </>
  );
};

export default Aboutus;
