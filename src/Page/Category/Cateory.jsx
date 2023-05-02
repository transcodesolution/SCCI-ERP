import { TableCaption, TableContainer, Table, Tbody, Td, Tfoot, Th, Thead, Tr, Flex, Input, Button, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { ApiPost } from '../../Api/ApiData';
import { ApiDelete } from '../../Api/ApiData';

function Category() {
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([]);

    const handleAddCategory = (e) => {
        const newCategory = category.trim();
        ApiPost("/admin/member/type/add", { name: newCategory })
            .then((res) => {
                console.log("res", res);
                setCategory("")
                getAllCategory()
            })
    }

    // const handleDeleteCategory = (index) => {
    //             setCategories(categories.filter((_, id) => id !== index))


    const handleDeleteCategory = (id) => {
        console.log(id)

        ApiDelete(`/admin/member/type/${id}`)
            .then((res) => {
                console.log("res", res);
                getAllCategory()
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddCategory();
        }
    }

    const getAllCategory = () => {
        ApiPost('/admin/member/type/get/all', { search: "" }).then((response) => {
            console.log("category res", response?.data)
            setCategories(response?.data?.data)
        })
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    return (
        <>
            <Box mb={4} textTransform={'uppercase'} ><h3 >Category</h3></Box>
            <Flex gap={12} >
                <Input type='text' name='name' value={category} onChange={(e) => { setCategory(e.target.value) }} backgroundColor={'white'} placeholder='Enter Category' id='category-input' onKeyPress={handleKeyPress} />
                <Button width={70} colorScheme={'blue'} onClick={handleAddCategory}>+ ADD </Button>
            </Flex>
            <br />
            <TableContainer backgroundColor={'white'}>
                <Table variant='simple'>
                    <TableCaption>This Table Add Types Of Industry For SCCI Members</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Categoty Type</Th>
                            <Th></Th>
                            <Th textAlign={'right'}>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {categories.map((item, id) => (
                            <Tr key={id}>
                                <Td>{item?.name}</Td>
                                <Td></Td>
                                <Td><AiOutlineDelete onClick={() => handleDeleteCategory(item._id)} /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Category;
