import React from "react";


import {
  FAQContainer,
  FAQContent,
  FAQAccordions,
  Heading,
} from "./FAQElements";
import FAQAccordion from "./FAQAccordion";
import { questions } from "./Questions";

import { Accordion, Flex } from "@chakra-ui/react";

const FAQHero = () => {
  return (
    <FAQContainer id="faq" lightBg={false}>
      <FAQContent>
        <Flex justifyContent="center" alignItems="center">
          <Heading lightText={true}>FAQ</Heading>
        </Flex>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <FAQAccordions>
            <Accordion
              allowToggle
              bg="#ff437b"
              color="#f6efde"
              border="#f6efde"
              borderRadius={48}
              padding={5}
            >
              {questions.map((question) => {
                return (
                  <FAQAccordion
                    key={question.id}
                    id={question.id}
                    question={question.question}
                    answer={question.answer}
                  />
                );
              })}
            </Accordion>
          </FAQAccordions>
        </Flex>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQHero;
