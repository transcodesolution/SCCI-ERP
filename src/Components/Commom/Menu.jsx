import { Input, Box } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react'
import React from 'react'

function Mainmenu({ itemArray, choose }) {

    return <>
        <Box>

            {itemArray?.map((item) => <Box border="1px solid #ddd" my={2} p={1} cursor='pointer' onClick={()=>choose(item)}>{item?.firstName}&nbsp;{item?.lastName}&nbsp;  <Badge colorScheme='red'>{item?.companyName}</Badge></Box>)

            }
        </Box >
    </>




}

export default Mainmenu