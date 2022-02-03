import React from "react";
import {
  DetailsContainer,
  DetailsWrapper,
  DetailsRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./DetailsElements";
import { Flex, VStack } from "@chakra-ui/react";
import Virus from "../../images/virus.jpg";

const Details = () => {
  return (
    <>
      <DetailsContainer id="Details">
        <DetailsWrapper>
          <DetailsRow imgStart={false} imgStartM={true}>
            <Column1>
              <ImgWrap>
                <Img src={Virus} alt="" />
              </ImgWrap>
            </Column1>
            <Column2>
              <Flex>
                <VStack align="left">
                  <Heading lightText={true}>Details</Heading>
                  <Subtitle>
                    Due to the COVID-19 pandemic, we are moving our hackathon to
                    a virtual event. We will be hosting the event via Zoom.
                    Register now to win prizes upto $1000.
                  </Subtitle>
                </VStack>
              </Flex>
            </Column2>
          </DetailsRow>
        </DetailsWrapper>
      </DetailsContainer>
    </>
  );
};

export default Details;
