    import React from 'react'
    import {
        Tag,
        TagLabel,
        TagCloseButton,
    } from '@chakra-ui/react'
    function Tags({value,remove}) {
        return (
            <Tag
                size={'md'}
                key={value}
                borderRadius='full'
                variant='solid'
                colorScheme='green'
                m={2}
            >
                <TagLabel>{value}</TagLabel>
                <TagCloseButton  onClick={remove}/>
            </Tag>
        )
    }

    export default Tags