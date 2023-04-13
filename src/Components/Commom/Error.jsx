import { Text } from '@chakra-ui/react'
import React from 'react'

function Error({ msg }) {
    return (
        <>
            <Text as={'span'} mb={'4'} style={{ color: 'red' }} > {msg}</Text>
        </>
    )
}

export default Error