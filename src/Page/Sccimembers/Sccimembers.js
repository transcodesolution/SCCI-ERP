import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First Name
          </FormLabel>
          <Input id="first-name" placeholder="First Name" />
        </FormControl>

        <FormControl mr="5%">
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last Name
          </FormLabel>
          <Input id="last-name" placeholder="Last Name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="contect-number" fontWeight={"normal"}>
            Contect-Number
          </FormLabel>
          <Input
            id="contect-number"
            placeholder=" Contect-Number"
            type="number"
          />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input id="email" type="email" placeholder="Enter Your Email Id" />
      </FormControl>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="whatsApp number" fontWeight={"normal"}>
            WhatsApp Number
          </FormLabel>
          <Input
            id="whatsApp number"
            placeholder=" WhatsApp Number"
            type="number"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Date of birth" fontWeight={"normal"}>
            Date Of Birth
          </FormLabel>
          <Input type="date" id="Date of birth" placeholder="Date Of Birth" />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="Date of birth" fontWeight={"normal"}>
          Gender
        </FormLabel>
        <div className="input_radio">
          <div>
            <input
              type="radio"
              id="Male"
              name="fav_language"
              value="Male"
              checked
            />
              <label for="Male">Male</label>
          </div>
          <div>
             
            <input
              type="radio"
              id="Female"
              name="fav_language"
              value="Female"
            />
              <label for="Female">Female</label>
          </div>
        </div>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="company address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Company Address
        </FormLabel>
        <Input
          type="text"
          placeholder="Enter Your Company Address"
          name="company address"
          id="company address"
          autoComplete="company address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / City
        </FormLabel>
        <Input
          type="text"
          placeholder="Enter Your State / city"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Social Handles
      </Heading>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            GST Number
          </FormLabel>
          <Input id="gst-number" placeholder=" GST Number" type="number" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="whatsapp" fontWeight={"normal"}>
            Detail of Company
          </FormLabel>
          <Input id="whatsapp" placeholder=" WhatsApp Number" />
        </FormControl>
      </Flex>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="memberships"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Selection for Memberships
        </FormLabel>
        <Select
          id="memberships"
          name="memberships"
          autoComplete="memberships"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="typeofuser"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Type Of User
        </FormLabel>
        <Select
          id="typeofuser"
          name="typeofuser"
          autoComplete="typeofuser"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="memberships details"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Memberships Details
        </FormLabel>
        <Input
          type="text"
          name="memberships details"
          id="memberships details"
          autoComplete="memberships details"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

export default function Multistep() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button w="7rem" colorScheme="red" variant="solid">
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
