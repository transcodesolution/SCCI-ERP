import { Box, Container, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import Editor from '../Editor/Editor'

function Mail() {
    const [content, setContent] = useState("")
    return (
        <>
            <Container minW={'100%'} mt={16} bg={'white'}>
                <Heading textAlign={'center'}>Mail Preview</Heading>
                <Box height={600} overflowY={'scroll'} bg={'#ddd'} p={4}>     <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                ></div></Box>
                <Box mt={4}><Editor onChange={setContent} value={content} /></Box>
            </Container>

        </>)
}

export default Mail