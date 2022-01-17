import React from "react";
import {
  ScheduleContainer,
  ScheduleRow,
  ScheduleWrapper,
  Column1,
  Column2,
  Heading,
} from "./ScheduleElements";

import { Flex, Box, VStack } from "@chakra-ui/react";
import { Rectangle } from "../Rectangle";
import { Button } from "../ButtonElement";

const Schedule = () => {
  return (
    <>
      <ScheduleContainer id="schedule">
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
                  <Rectangle lightBg={false} big={true} />
                </Box>
              </Flex>
            </Column1>
            <Column2>
              <Flex justifyContent="center" alignItems="center">
                <VStack>
                  <Heading lightText={true}>Schedule</Heading>
                  <Flex p={10}>
                    <VStack>
                      <Button primary="true" dark="true" big={true}>
                        Day 1
                      </Button>
                      <Button big={true}>Day 2</Button>
                    </VStack>
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
