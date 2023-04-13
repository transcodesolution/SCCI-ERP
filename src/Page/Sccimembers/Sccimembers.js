import React, { useState } from "react";
import profile from "../../Assest/images/profile.png";
import edit_icon from "../../Assest/images/edit_icon.png";
import { SignupSchema } from "./SignupSchema";
import { initialValues } from "./initialvalue";
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
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { handleUploadImage } from "../../Uploads/upload";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Error from "../../Components/Commom/Error";
// import { initializeConnect } from "react-redux/es/components/connect";
const Form1 = ({ values, setFieldValue }) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="400" mb="2%" >
        Members's Details
      </Heading>

      <div className="profile_img_block">
        {!values.profilePhoto ? (
          <img
            className="profile_img"
            src={'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg'}
            alt="profile"
          />
        ) : (
          <img
            className="profile_img"
            src={values.profilePhoto}
            alt="profile"
          />
        )}

        <input
          type={"file"}
          id="upload"
          onChange={(event) =>
            handleUploadImage(
              event,
              setFieldValue,
              "profilePhoto"
            )
          }
          hidden
        ></input>
        <br></br>
        <Button mb={4} color={"Highlight"}> <label htmlFor="upload"> Upload</label></Button>
      </div>

      <Flex>
        <FormControl mr="5%">
          <Field name="firstName">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="firstName" fontWeight={"normal"}>
                  First Name
                </FormLabel>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  {...field}
                />

                <ErrorMessage
                  name="firstName"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>

        <FormControl mr="5%">
          <Field name="middleName">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="middleName" fontWeight={"normal"}>
                  Middle Name
                </FormLabel>
                <Input
                  type="text"
                  id="middleName"
                  placeholder="Middle Name"
                  {...field}
                />
                <ErrorMessage
                  name="middleName"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>
        <FormControl mr="5%">
          <Field name="lastName">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="lastName" fontWeight={"normal"}>
                  Last Name
                </FormLabel>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  {...field}
                />
                <ErrorMessage
                  name="lastName"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>
      </Flex>

      <Flex>
        <FormControl mr="5%">
          <Field name="contectNumber">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="contectNumber" fontWeight={"normal"}>
                  Contect Number
                </FormLabel>
                <Input
                  type="number"
                  id="contectNumber"
                  placeholder="Contect Number"
                  {...field}
                />
                <ErrorMessage
                  name="contectNumber"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>

        <FormControl mr="2%">
          <Field name="email">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="email" fontWeight={"normal"}>
                  Email
                </FormLabel>
                <Input type="email" id="email" placeholder="Email" {...field} />
                <ErrorMessage name="email" render={(msg) => <Error msg={msg} />} />
              </FormControl>
            )}
          </Field>
        </FormControl>
      </Flex>

      <Flex>
        <FormControl mr="5%">
          <Field name="birthDate">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="birthDate" fontWeight={"normal"}>
                  Date Of Birth
                </FormLabel>
                <Input
                  type="date"
                  id="birthDate"
                  placeholder="Date Of Birth"
                  {...field}
                />
                <ErrorMessage
                  name="birthDate"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>

        <FormControl mr="5%">
          <Field name="whatsappNumber">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="whatsappNumber" fontWeight={"normal"}>
                  WhatsApp Number
                </FormLabel>
                <Input
                  type="number"
                  id="whatsappNumber"
                  placeholder="WhatsApp Number"
                  {...field}
                />
                <ErrorMessage
                  name="whatsappNumber"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>
      </Flex>

      <FormControl mt={4} mr="5%" className="radio_btn">
        <Field name="gender">
          {({ field }) => (
            <>
              <FormLabel htmlFor="gender" fontWeight={"normal"}>
                Gender
              </FormLabel>
              <div className="">
                <Field
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  {...field}
                />
                <label htmlFor="male">Male</label>

                <Field
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  {...field}
                />
                <label htmlFor="female">Female</label>
              </div>
              <ErrorMessage name="gender" render={(msg) => <Error msg={msg} />} />
            </>
          )}
        </Field>
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
        <Field name="companyAddress">
          {({ field }) => (
            <FormControl>
              <FormLabel htmlFor="companyAddress" fontWeight={"normal"}>
                Company Address
              </FormLabel>
              <Input
                type="text"
                id="companyAddress"
                placeholder="Enter Your Company Address"
                {...field}
              />
              <ErrorMessage
                name="companyAddress"
                render={(msg) => <Error msg={msg} />}
              />
            </FormControl>
          )}
        </Field>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <Field name="state">
          {({ field }) => (
            <FormControl>
              <FormLabel htmlFor="state" fontWeight={"normal"}>
                State / city
              </FormLabel>
              <Input
                type="text"
                id="state"
                placeholder="Enter Your State / city"
                {...field}
              />
              <ErrorMessage name="state" render={(msg) => <Error msg={msg} />} />
            </FormControl>
          )}
        </Field>
      </FormControl>

      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <Field name="website">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="website" fontWeight={"normal"}>
                  Website
                </FormLabel>
                <Input
                  type="tel"
                  id="website"
                  placeholder="www.example.com"
                  focusBorderColor="brand.400"
                  rounded="md"
                  name=""
                  {...field}
                />
                <ErrorMessage
                  name="website"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>

        <FormControl id="email" mt={1}>
          <Field name="about">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="about" fontWeight={"normal"}>
                  About
                </FormLabel>
                <Textarea
                  name="about"
                  placeholder="you@example.com"
                  rows={3}
                  shadow="sm"
                  focusBorderColor="brand.400"
                  {...field}
                  fontSize={{
                    sm: "sm",
                  }}
                />

                <ErrorMessage name="about" render={(msg) => <Error msg={msg} />} />
              </FormControl>
            )}
          </Field>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

const Form3 = () => {
  const countryOptions = [
    { key: "Select an option", value: "" },
    { id: "1", value: "india", label: "India" },
    { id: "2", value: "sri lanka", label: "Sri Lanka" },
    { id: "3", value: "us", label: "US" },
  ];

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Memberships Details
      </Heading>

      <Flex>
        <FormControl mr="5%">
          <Field name="gstNumber">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="gstNumber" fontWeight={"normal"}>
                  GST Number
                </FormLabel>
                <Input
                  type="text"
                  id="gstNumber"
                  placeholder=" GST Number"
                  {...field}
                />
                <ErrorMessage
                  name="gstNumber"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>

        <FormControl mr="5%">
          <Field name="detailOfCompany">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="detailOfCompany" fontWeight={"normal"}>
                  Detail of Company
                </FormLabel>
                <Input
                  type="text"
                  id="detailOfCompany"
                  placeholder=" Detail of Company"
                  {...field}
                />
                <ErrorMessage
                  name="detailOfCompany"
                  render={(msg) => <Error msg={msg} />}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>
      </Flex>
      <FormLabel htmlFor="memberships" fontWeight={"normal"}>
        Selection for Memberships
      </FormLabel>
      <Field
        as={Select}
        name="mySelect"
        id="memberships"
        placeholder="Select - Option"
      >
        <option value=""></option>
        <option value="india">India</option>
        <option value="sri lanka">Sri Lanka</option>
        <option value="us">US</option>
      </Field>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <Field as="select" name="name">
          {({ field }) => (
            <FormControl>
              <FormLabel htmlFor="memberships" fontWeight={"normal"}>
                Selection for Memberships
              </FormLabel>
              <Field as={Select} name="mySelect" id="mySelect">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Field>

              <ErrorMessage
                name="memberships"
                render={(msg) => <Error msg={msg} />}
              />
            </FormControl>
          )}
        </Field>
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
        <Field name="membershipsDetails">
          {({ field }) => (
            <FormControl>
              <FormLabel htmlFor="membershipsDetails" fontWeight={"normal"}>
                Memberships Details
              </FormLabel>
              <Input
                type="text"
                id="membershipsDetails"
                placeholder="  Memberships Details"
                {...field}
              />
              <ErrorMessage
                name="membershipsDetails"
                render={(msg) => <Error msg={msg} />}
              />
            </FormControl>
          )}
        </Field>
      </FormControl>
    </>
  );
};

export default function Multistep() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);


  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {

        }}
      >
        {({ values, setFieldValue }) => (
          <Form>



            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={800}
              p={6}
              m="10px auto"
              as="form"
            >
              {step === 1 ? <Form1 setFieldValue={setFieldValue} values={values} /> : step === 2 ? <Form2 /> : <Form3 />}
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
          </Form>
        )}
      </Formik>
    </>
  );
}
