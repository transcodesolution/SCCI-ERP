import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from '../../Features/userSlice';
// import { login } from'../Features/userSlice';

const Admin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LogIn Form </h1>
        <input type='email' name='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' name='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default Admin;


// import { TableCaption, TableContainer, Table, Tbody, Td, Tfoot, Th, Thead, Tr, Flex, Input, Button, Box } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import { AiOutlineDelete } from "react-icons/ai";
// import { ApiPost } from '../../Api/ApiData';
// import { ApiDelete } from '../../Api/ApiData';
// function Category() {
//     const [category, setCategory] = useState("")
//     const [categories, setCategories] = useState([]);

//     const handleAddCategory = (e) => {

//         const newCategory = category.trim();
//         // if (newCategory !== 0) {
//         //     setCategories([...categories, newCategory]);
//         //     setCategory("")
//         // }



//         ApiPost("/member/type/add", { name: newCategory })
//             .then((res) => {
//                 console.log("res", res);
//                 setCategory("")

//             })
//     }

//     const handleDeleteCategory = (index) => {
//         setCategories(categories.filter((_, id) => id !== index))

//     }

//     const handleKeyPress = (event) => {
//         if (event.key === 'Enter') {
//             handleAddCategory();
//         }
//     }

//     const getAllCategory = () => {
//         ApiPost('/member/type/get/all', { search: "" }).then((response) => {
//             console.log("category res", response?.data)
//             setCategories(response?.data?.data)
//         })
//     }

//     useEffect(() => {
//         getAllCategory()

//     }, [])

//     return (
//         <>
//             <Box mb={4} textTransform={'uppercase'} ><h3 >Category</h3></Box>
//             <Flex gap={12} >
//                 <Input type='text' name='name' value={category} onChange={(e) => { setCategory(e.target.value) }} backgroundColor={'white'} placeholder='Enter Category' id='category-input' onKeyPress={handleKeyPress} />
//                 <Button width={70} colorScheme={'blue'} onClick={handleAddCategory}>+ ADD </Button>
//             </Flex>
//             <br />
//             <TableContainer backgroundColor={'white'}>
//                 <Table variant='simple'>
//                     <TableCaption>This Table Add Types Of Industry For SCCI Members</TableCaption>
//                     <Thead>
//                         <Tr>
//                             <Th>Categoty Type</Th>
//                             <Th></Th>
//                             <Th textAlign={'right'}>Action</Th>
//                         </Tr>
//                     </Thead>
//                     <Tbody>
//                         {categories.map((item, index) => (
//                             <Tr key={index}>
//                                 <Td>{item?.name}</Td>
//                                 <Td></Td>
//                                 <Td><AiOutlineDelete onClick={() => handleDeleteCategory(index)} /></Td>
//                             </Tr>
//                         ))}
//                     </Tbody>
//                 </Table>
//             </TableContainer>
//         </>
//     )
// }

// export default Category





// ApiDelete(`/member/type/${id}`, { Body }).then(result) => {
//   result.json().then((resp) => {
//       console.log(resp)
//       getAllCategory()
//   })
// }






// import { TableCaption, TableContainer, Table, Tbody, Td, Tfoot, Th, Thead, Tr, Flex, Input, Button, Box } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import { AiOutlineDelete } from "react-icons/ai";
// import { ApiPost } from '../../Api/ApiData';

// function Category() {
//     const [category, setCategory] = useState("")
//     const [categories, setCategories] = useState([]);

//     const handleAddCategory = () => {
//         const newCategory = category.trim();
// if (newCategory !== '') {
//   setCategories([...categories, newCategory]);
//   categoryInput.value = '';
// }
//         ApiPost("/member/type/add", { name: newCategory })
//             .then((res) => {
//                 console.log("ressssssssssss", res);
//                 setCategory("")
//             })


//     }

//     const handleDeleteCategory = (index) => {
//         setCategories(categories.filter((_, i) => i !== index));
//     }

//     const handleKeyPress = (event) => {
//         if (event.key === 'Enter') {
//             handleAddCategory();
//             // let body = {
//             //     name:
//             // }

//         }
//     }

//      useEffect(() => {
//         ApiPost('/member/type/get/all', { search: "" }).then((response) => {
//             console.log("category res", response?.data)
//             setCategories(response?.data?.data)
//         })
//     }, [])

//     return (
//         <>
//             <Box mb={4} textTransform={'uppercase'} ><h3 >Category</h3></Box>
//             <Flex gap={12} >
//                 <Input type='text' onChange={(e) => { setCategory(e.target.value) }} backgroundColor={'white'} placeholder='Enter Category' id='category-input' onKeyPress={handleKeyPress} />
//                 <Button width={70} colorScheme={'blue'} onClick={handleAddCategory}>+ ADD </Button>
//             </Flex>
//             <br />
//             <TableContainer backgroundColor={'white'}>
//                 <Table variant='simple'>
//                     <TableCaption>This Table Add Types Of Industry For SCCI Members</TableCaption>
//                     <Thead>
//                         <Tr>
//                             <Th>Categoty Type</Th>
//                             <Th></Th>
//                             <Th textAlign={'right'}>Action</Th>
//                         </Tr>
//                     </Thead>
//                     <Tbody>
//                         {categories.map((item, index) => (
//                             <Tr key={index}>
//                                 <Td>{item?.name}</Td>
//                                 <Td></Td>
//                                 <Td><AiOutlineDelete onClick={() => handleDeleteCategory(index)} /></Td>
//                             </Tr>
//                         ))}
//                     </Tbody>
//                 </Table>
//             </TableContainer>
//         </>
//     )
// }

// export default Category
