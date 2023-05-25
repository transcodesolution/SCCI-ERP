import { Box, Container, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Editor from "../Editor/Editor";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { Input, Select } from "@chakra-ui/react";
import { ApiPost } from "../../Api/ApiData";
import Tags from "../../Components/Commom/Tags";
import Resultmenu from "../../Components/Commom/Menu";
import { useLocation } from "react-router-dom";
import { Badge, Text } from "@chakra-ui/react";

let timeout;
function Mail() {
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categories, setCategories] = useState([]);
  const [categories_map, setCategories_map] = useState([]);
  const [individual_map, setIndividual_map] = useState({});
  const finalRef = React.useRef(null);
  const [name, setName] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const { state } = useLocation();

  const [filter, setFilter] = useState({
    category: state?.category || [],
    individual: state?.individual || [],
    content: ""
  });

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        memberIds: [...filter.individual],
        categoryIds: [...filter.category],
        content,
        subject
      };
      await ApiPost("/admin/mail", requestBody).then((res) => {
        console.log("first", res);
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == "category") {
      setFilter((old) => {
        return {
          ...old,
          category: old.category.includes(value)
            ? old.category
            : [...old.category, value],
        };
      });
    } else {
      setFilter((old) => {
        return {
          ...old,
          individual: old.individual.includes(value)
            ? old.individual
            : [...old.category, value],
        };
      });
    }
  };

  const getAllCategory = async () => {
    await ApiPost("/admin/member/type/get/all", { search: "" }).then(
      (response) => {
        setCategories(response?.data?.data);
        console.log("first@@@", response?.data?.data[0]._id);
        let res = response.data.data;
        let obj = {};
        for (let i = 0; i < res.length; i++) {
          obj[res[i]?._id] = res[i].name;
        }
        setCategories_map(obj);
      }
    );
    setName("");
  };

  const handleTagRemove = (cat) => {
    setFilter((old) => {
      return {
        ...old,
        category: old.category.filter((data) => data != cat),
      };
    });
  };
  const handleTagRemoveForIndividual = (ind) => {
    setFilter((old) => {
      return {
        ...old,
        individual: old.individual.filter((data) => data != ind),
      };
    });
  };
  const handleSelect = (item) => {
    setFilter((old) => {
      return {
        ...old,
        individual: old.individual.includes(item?._id)
          ? old.individual
          : [...old.individual, item?._id],
      };
    });
    setsearchResult([]);
  };

  useEffect(() => {
    if (name) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        ApiPost("/admin/member/get/all", {
          search: name,
          limit: 10,
          page: 1,
        }).then((response) => {
          setsearchResult(response?.data?.data?.member_data);
          let res = response.data.data?.member_data;
          let obj = individual_map;
          for (let i = 0; i < res.length; i++) {
            obj[res[i]?._id] = res[i].firstName;
          }
          setIndividual_map(obj);
        });
      }, 1000);
    } else {
      setsearchResult([]);
    }
    setName("");
  }, [name]);

  const handleClear = () => {
    setFilter({
      category: [],
      individual: [],
    });
    setsearchResult([]);
  };

  useEffect(() => {
    getAllCategory();
    return () => {
      setFilter({
        category: [],
        individual: [],
      });
    };
  }, []);

  console.log(filter.individual, "cm");

  return (
    <>
      <Container minW={"100%"} mt={16} bg={"white"}>
        <Box textAlign={"right"} py="4">
          <Button onClick={onOpen}>
            <AiOutlinePlus /> &nbsp; Select Members
          </Button>
        </Box>

        <Box textAlign={"right"} py="4">
          <Text fontWeight="bold">
            Selected Category &nbsp;
            <Badge ml="1" colorScheme="green">
              {filter?.category?.length}
            </Badge>
          </Text>
          <Text fontWeight="bold">
            Selected Individual &nbsp;
            <Badge ml="1" colorScheme="green">
              {filter?.individual?.length}
            </Badge>
          </Text>
        </Box>

        <Box mt={4}>
          <Input placeholder="Subject Of Mail"  value={subject} onChange={(event)=>setSubject(event.target.value)}/>
        </Box>
        <Box mt={4}>
          <Editor onChange={setContent} value={content} />
        </Box>

        <Stack
          direction="row"
          my={2}
          textAlign="right"
          spacing={4}
          align="center"
          justifyContent="right"
        >
          <Button colorScheme="red" variant="outline" onClick={handleSend}>
            Send <BsFillSendFill style={{ marginLeft: "6px" }} />
          </Button>
        </Stack>

        <Heading textAlign={"center"} mt={4}>
          Mail Preview
        </Heading>

        <Box height={600} overflowY={"scroll"} bg={"#f1f1f1a3"} p={4}>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>
        </Box>
      </Container>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SCCI MEMBERS-DETAILS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider />
            <Select
              placeholder="Select option"
              name="category"
              onChange={handleChange}
            >
              {categories.map((data) => (
                <option value={data?._id}>{data?.name}</option>
              ))}
            </Select>

            <Box py={4}>
              {filter?.category?.map((cat) => (
                <Tags
                  value={categories_map[cat]}
                  remove={() => handleTagRemove(cat)}
                />
              ))}
            </Box>

            <Input
              type="text"
              mt={4}
              placeholder="Search Individual"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Resultmenu itemArray={searchResult} choose={handleSelect} />
            <Box py={4}>
              {filter?.individual?.map((ind) => (
                <Tags
                  value={individual_map[ind] || ind}
                  remove={() => handleTagRemoveForIndividual(ind)}
                />
              ))}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClear}>
              Clear
            </Button>
            <Button colorScheme="green" onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Mail;
