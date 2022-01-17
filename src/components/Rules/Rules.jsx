import React from "react";
import { Heading, RulesContainer, RulesWrapper } from "./RulesElements";
import { Flex, Box } from "@chakra-ui/react";
import { Rectangle } from "../Rectangle";

const Rules = () => {
  return (
    <>
      <RulesContainer lightBg={true}>
        <RulesWrapper>
          <Flex justifyContent="center" alignItems="center">
            <Heading lightText={true}>Rules</Heading>
          </Flex>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Box w="full">
              <Rectangle lightBg={false} big={true} />
            </Box>

            <Box w="full" mt={-400} ml={-50}>
              <Rectangle lightBg={true} lightShadow={true} big={true} />
            </Box>
          </Flex>
        </RulesWrapper>
      </RulesContainer>
    </>
  );
};

export default Rules;
