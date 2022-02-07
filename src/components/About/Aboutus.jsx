import React from "react";
import {
  AboutusContainer,
  AboutusWrapper,
  AboutusRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  BtnWrap,
} from "./AboutusElements";
import { Flex, VStack } from "@chakra-ui/react";
// import { Rectangle } from "../Rectangle";

import Community from "../../images/svg-5.svg";
import { Button } from "../ButtonElement";

const Aboutus = () => {
  return (
    <>
      <AboutusContainer id="aboutus">
        <AboutusWrapper>
          <AboutusRow imgStart={true} imgStartM={true}>
            <Column1>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <VStack align="left">
                  <Subtitle>
                    NeuroHack is an organization started by a group of high
                    school AI enthusiasts. We aim to provide a platform for
                    students to take their skills and knowledge to the next
                    level in Artificial Intelligence.
                  </Subtitle>
                  <BtnWrap>
                    <Button
                      to="/contactus"
                      exact="true"
                      offset={-80}
                      primary="true"
                      dark="true"
                    >
                      Contact Us
                    </Button>
                  </BtnWrap>
                </VStack>
                {/* <Box w="full" mr={5}>
                  <Rectangle lightBg={true} lightShadow={true} big={true} />
                </Box>

                <Box w="full" mt={-340} mr={-50}>
                  <Rectangle lightBg={false} big={true}>
                    
                  </Rectangle>
                </Box> */}
              </Flex>
            </Column1>
            <Column2>
              <Flex justifyContent="center" alignItems="center">
                <VStack>
                  <Heading lightText={true}>About Us</Heading>
                  <ImgWrap>
                    <Img src={Community} />
                  </ImgWrap>
                </VStack>
              </Flex>
            </Column2>
          </AboutusRow>
        </AboutusWrapper>
      </AboutusContainer>
    </>
  );
};

export default Aboutus;
