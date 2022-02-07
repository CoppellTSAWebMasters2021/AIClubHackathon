import React from "react";
import {
  ScheduleContainer,
  ScheduleRow,
  ScheduleWrapper,
  Column1,
  Column2,
  Heading,
  Subtitle,
} from "./ScheduleElements";

import { Flex, Box, VStack, HStack } from "@chakra-ui/react";
import { Rectangle } from "../Rectangle";
import { ClearButton as Button } from "../ButtonElement";

const Schedule = () => {
  const [isDay1, setDay1] = React.useState(true);
  const setDay1True = () => {
    setDay1(true);
  };

  const setDay1False = () => {
    setDay1(false);
  };

  var buttonArea = <Button></Button>;
  if (isDay1 === true) {
    buttonArea = (
      <Button primary="true" dark="true" big={true} onClick={setDay1False}>
        Day 2
      </Button>
    );
  } else {
    buttonArea = (
      <Button primary="true" dark="true" big={true} onClick={setDay1True}>
        Day 1
      </Button>
    );
  }

  var textArea = <Subtitle></Subtitle>;
  if (isDay1 === true) {
    textArea = (
      <VStack spacing={10}>
        <Heading lightText={true}>Day 1</Heading>
        <HStack>
          <HStack>
            <VStack>
              <Subtitle>10:30am:</Subtitle>
              <Subtitle>11:00am:</Subtitle>
              <Subtitle>11:30am:</Subtitle>
              <Subtitle>9:00am:</Subtitle>
            </VStack>
          </HStack>

          <HStack>
            <VStack align="left">
              <Subtitle>Welcome</Subtitle>
              <Subtitle>Guidelines</Subtitle>
              <Subtitle>Work Time</Subtitle>
              <Subtitle>Hangout</Subtitle>
            </VStack>
          </HStack>
        </HStack>
      </VStack>
    );
  } else {
    textArea = (
      <VStack spacing={10}>
        <Heading lightText={true}>Day 2</Heading>
        <HStack>
          <HStack>
            <VStack>
              <Subtitle>11:00am:</Subtitle>
              <Subtitle>3:00am:</Subtitle>
              <Subtitle>11:59pm:</Subtitle>
            </VStack>
          </HStack>

          <HStack>
            <VStack align="left">
              <Subtitle>Workshop</Subtitle>
              <Subtitle>Work Time</Subtitle>
              <Subtitle>Due</Subtitle>
            </VStack>
          </HStack>
        </HStack>
      </VStack>
    );
  }

  return (
    <>
      <ScheduleContainer id="schedule" lightBg={false}>
        <ScheduleWrapper>
          <ScheduleRow imgStart={false} imgStartM={true}>
            <Column1>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box w="full" mr={5}>
                  <Rectangle lightBg={true} lightShadow={true} big={true} />
                </Box>

                <Box w="full" mt={-340} mr={-50}>
                  <Rectangle lightBg={false} big={true}>
                    {textArea}
                  </Rectangle>
                </Box>
              </Flex>
            </Column1>
            <Column2>
              <Flex justifyContent="center" alignItems="center">
                <VStack>
                  <Heading lightText={true}>Schedule</Heading>
                  <Flex p={10}>
                    <VStack>{buttonArea}</VStack>
                  </Flex>
                </VStack>
              </Flex>
            </Column2>
          </ScheduleRow>
        </ScheduleWrapper>
      </ScheduleContainer>
    </>
  );
};

export default Schedule;
