import React, { useState } from "react";
import styled from "styled-components";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  RadioGroup,
  Stack,
  Radio,
  Select,
} from "@chakra-ui/react";
export const RegisterContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#2a2a2a" : "#1a1a1a")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const RegisterContent = styled.div`
  display: grid;
  z-index: 1;
  padding: 0 24px;
  max-width: 1200px;
  width: 100%;
  height: 860px;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 500px;
  padding: 25px;
  color: #f7efdf;
  background-color: #5e4cd6;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #5e4cd6;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 300px;
    height: 100%;
  }
`;

export const Wrapper = styled.div``;

export const Heading = styled.h1`
    
    font-size: 46px;
    line-height: 1.1;
    font-weight: 600;
    color ${({ lightText }) => (lightText ? "#ffffff" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`;

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  // eslint-disable-next-line
  const [age, setAge] = useState(14);
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState(1);

  const [submitting, setSubmitting] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  // const formSparkUrl = "https://submit-form.com/hGlsjDhY";
  const toast = useToast();

  const submitForm = async (event: FormEvent) => {
    if (
      firstName &&
      lastName &&
      age &&
      email &&
      members != null &&
      emptyFields === true
    ) {
      event.preventDefault();
      setSubmitting(true);
      // await postSubmission();
      toast({
        title: "You have successfully registered!",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setSubmitting(false);
    } else {
      setEmptyFields(true);
      toast({
        title: "Please fill out all fields",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <RegisterContainer>
      <RegisterContent>
        <Flex justifyContent="center" alignItems="center">
          <Heading lightText={true}>Register</Heading>
        </Flex>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <RegisterFormWrapper>
            <Wrapper>
              <FormControl id="firstName" boxShadow="lg" isRequired mb={3}>
                <FormLabel>First Name</FormLabel>
                <Input
                  color="#5E4CD6"
                  background="#f7efdf"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  isInvalid={emptyFields && !firstName}
                  errorBorderColor="red.300"
                />
              </FormControl>
              <FormControl id="lastName" boxShadow="lg" isRequired mb={3}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  color="#5E4CD6"
                  background="#f7efdf"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  isInvalid={emptyFields && !lastName}
                  errorBorderColor="red.300"
                />
              </FormControl>
              <FormControl id="age" boxShadow="lg" isRequired mb={3}>
                <FormLabel>Age</FormLabel>
                <NumberInput
                  color="#5E4CD6"
                  background="#f7efdf"
                  borderRadius={10}
                  min={10}
                  max={20}
                  defaultValue={age}
                  isInvalid={emptyFields && !age}
                  errorBorderColor="red.300"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl id="grade level" boxShadow="lg" mb={3}>
                <FormLabel>Grade Level</FormLabel>
                <Input color="#5E4CD6" background="#f7efdf" placeholder="10" />
              </FormControl>

              <FormControl id="email" boxShadow="lg" isRequired mb={3}>
                <FormLabel>Email address</FormLabel>
                <Input
                  color="#5E4CD6"
                  background="#f7efdf"
                  type="email"
                  placeholder="support@neurohack.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={emptyFields && !email}
                  errorBorderColor="red.300"
                />
              </FormControl>
            </Wrapper>
            <Wrapper>
              <FormControl id="Members" boxShadow="lg" isRequired mb={7}>
                <FormLabel>Team</FormLabel>
                <RadioGroup
                  onChange={setMembers}
                  value={members}
                  colorScheme="purple"
                  isInline
                  isInvalid={emptyFields && !members}
                  errorBorderColor="red.300"
                >
                  <Stack direction="row">
                    <Radio value="1">Alone</Radio>
                    <Radio value="2">With a partner</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl id="hearaboutus" boxShadow="lg" mb={3}>
                <FormLabel>How did you hear about us?</FormLabel>
                <Select
                  color="#5E4CD6"
                  background="#f7efdf"
                  isInvalid={emptyFields && !email}
                  errorBorderColor="red.300"
                >
                  <option>Select</option>
                  <option>Instagram</option>
                  <option>Email</option>
                  <option>Other</option>
                </Select>
              </FormControl>
              <FormControl>
                <Button
                  isLoading={submitting}
                  bgColor="#f7efdf"
                  borderColor="#5E4CD6!important"
                  color="#5E4CD6"
                  type="submit"
                  variant="solid"
                  boxShadow="md"
                  _hover={{ boxShadow: "lg", bg: "#5E4CD6", color: "#f7efdf" }}
                  onClick={submitForm}
                >
                  Submit
                </Button>
              </FormControl>
            </Wrapper>
          </RegisterFormWrapper>
        </Flex>
      </RegisterContent>
    </RegisterContainer>
  );
};

export default Register;
