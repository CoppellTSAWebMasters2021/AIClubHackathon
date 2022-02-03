import React from "react";
import { Heading, RulesContainer, RulesWrapper, Subtitle } from "./RulesElements";
import { Flex, Box, VStack } from "@chakra-ui/react";
import { Rectangle } from "../Rectangle";

const Rules = () => {
  return (
    <>
      <RulesContainer lightBg={true}>
        <RulesWrapper>
          <Flex justifyContent="center" alignItems="center">
            <Heading lightText={true}>Hackathon Rules</Heading>
          </Flex>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Box w="full">
              <Rectangle lightBg={false} big={true} />
            </Box>

            <Box w="full" mt={-400} ml={-50}>
              <Rectangle lightBg={true} lightShadow={true} big={true}>
                <VStack align="left">
                  <Subtitle darkText={true}>1. No Plagiarism</Subtitle>
                  <Subtitle darkText={true}>2. Be respectful</Subtitle>
                  <Subtitle darkText={true}>3. Have Fun!</Subtitle>
                </VStack>
              </Rectangle>
            </Box>
          </Flex>
        </RulesWrapper>
      </RulesContainer>
    </>
  );
};

export default Rules;
