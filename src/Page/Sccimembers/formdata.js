import React, { useState } from "react";
import profile from "../../Assest/images/profile.png";
import edit_icon from "../../Assest/images/edit_icon.png";
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
} from "@chakra-ui/react";
// import { useForm } from "react-hook-form";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { initializeConnect } from "react-redux/es/components/connect";
const Form1 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Personal details
      </Heading>

      <div className="profile_img">
        <img src={profile} alt="" />
        <label>
          <span>
            <img src={edit_icon} alt="icon" />
          </span>
        </label>
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
                  render={(msg) => <div>{msg}</div>}
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
                  render={(msg) => <div>{msg}</div>}
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
                  render={(msg) => <div>{msg}</div>}
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
                <ErrorMessage name="email" render={(msg) => <div>{msg}</div>} />
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
                  render={(msg) => <div>{msg}</div>}
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
                  render={(msg) => <div>{msg}</div>}
                />
              </FormControl>
            )}
          </Field>
        </FormControl>
      </Flex>

      <FormControl mr="5%" className="radio_btn">
        <Field name="gender">
          {({ field }) => (
            <FormControl>
              <FormLabel htmlFor="gender" fontWeight={"normal"}>
                Gender
              </FormLabel>
              <div className="">
                <input
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  {...field}
                />
                <label htmlFor="male">Male</label>

                <input
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  {...field}
                />
                <label htmlFor="female">Female</label>
              </div>
              <ErrorMessage name="gender" render={(msg) => <div>{msg}</div>} />
            </FormControl>
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
                render={(msg) => <div>{msg}</div>}
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
              <ErrorMessage name="state" render={(msg) => <div>{msg}</div>} />
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
                  render={(msg) => <div>{msg}</div>}
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

                <ErrorMessage name="about" render={(msg) => <div>{msg}</div>} />
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
                  render={(msg) => <div>{msg}</div>}
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
                  render={(msg) => <div>{msg}</div>}
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
                render={(msg) => <div>{msg}</div>}
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
                render={(msg) => <div>{msg}</div>}
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

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("please  enter your firstName"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("please enter your lastName"),
    email: Yup.string()
      .email("Invalid email")
      .required("please enter your email "),
    contectNumber: Yup.string()
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter valid number.",
        excludeEmptyString: false,
      })
      .required("please enter your contect number"),
    whatsappNumber: Yup.string()
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter valid number.",
        excludeEmptyString: false,
      })
      .required("please enter your whatsappNumber"),
    gender: Yup.string().required("A radio option is required"),
    birthDate: Yup.date().required("Date Of Birth Required"),
    companyAddress: Yup.string().required("please enter your address"),
    state: Yup.string().required("state require"),
    detailOfCompany: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("please file the compoany detail"),
    gstNumber: Yup.string()
      .required("GST number is required")
      .matches(
        /^[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/,
        "Invalid GST number"
      ),
    memberships: Yup.string().required("please select your country"),
    membershipsDetails: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("please enter your memberships Details"),
    about: Yup.string().required("please enter your value"),
    website: Yup.string().required("please enter your value"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    contectNumber: "",
    email: "",
    whatsappNumber: "",
    birthDate: "",
    gender: "",
    companyAddress: "",
    state: "",
    detailOfCompany: "",
    memberships: "",
    membershipsDetails: "",
    gstNumber: "",
    about: "",
    website: "",
    // gstNumber: "ABCD1234E5F6",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {console.log(values)}

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
          </Form>
        )}
      </Formik>
    </>
  );
}
