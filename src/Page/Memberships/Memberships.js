import { Box } from '@chakra-ui/react';
import React from 'react'
import Membercard from '../../Components/Commom/Card';
import { SimpleGrid } from '@chakra-ui/react'
const Memberships = () => {
  return (
    <div>

      <Box>
        <SimpleGrid columns={[1, 2, 2, 2, 3, 4, 5]} spacing={5}>
          {
            [1, 2, 3, 4, 5, 6].map((data) => <Membercard />)
          }

        </SimpleGrid>


      </Box>
    </div>
  )
}

export default Memberships;