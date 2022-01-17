import React from "react";
import {
  Column1,
  Column2,
  Heading,
  WhenContainer,
  WhenRow,
  WhenWrapper,
} from "./WhenElements";

import { Flex, Box } from "@chakra-ui/react";
import { Rectangle } from "../Rectangle";

const When = () => {
  return (
    <>
      <WhenContainer lightBg={true}>
        <WhenWrapper>
          <WhenRow imgStart={false} imgStartM={true}>
            <Column1>
              <Flex justifyContent="center" alignItems="center">
                <Heading lightText={true}>WHEN?</Heading>
              </Flex>
            </Column1>
            <Column2>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box w="full">
                  <Rectangle lightBg={false} />
                </Box>

                <Box w="full" mt={-400} ml={-50}>
                  <Rectangle lightBg={true} lightShadow={true} />
                </Box>
              </Flex>
            </Column2>
          </WhenRow>
        </WhenWrapper>
      </WhenContainer>
    </>
  );
};

export default When;
