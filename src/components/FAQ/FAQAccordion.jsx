import React from "react";

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const FAQAccordion = ({ id, question, answer }) => {
  return (
    <AccordionItem borderRadius={5} lineHeight={6}>
      <h2>
        <AccordionButton
          _expanded={{ bg: "#5E4CD6" }}
          _hover={{ bg: "#5E4CD6" }}
        >
          <Box
            className="box"
            flex="1"
            textAlign="left"
            fontSize={22}
            fontWeight="bold"
            lineHeight={10}
            padding={3}
          >
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} fontWeight="semibold">
        {answer}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default FAQAccordion;
