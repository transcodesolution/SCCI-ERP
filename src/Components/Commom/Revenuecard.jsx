import { Card, CardBody, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'



const randomArray = ['#EA6A47', '#A5D8DD', '#0091D5']
function Revenuecard({ data }) {

    return (
        <>
            <Card width={'100%'} bg={data.bg} className='dashboard_card'>
                <CardBody>
                    <Grid
                        columns={[1, 2, 2, 2, 3, 5, 5]}
                        h='50px'
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(6, 1fr)'
                        gap={4}
                    >
                        <GridItem rowSpan={2} colSpan={2} >{data.icon}</GridItem>
                        <GridItem rowSpan={2} colSpan={4} color={'white'}>
                             <h5> {data.title}</h5>
                             <h6>{data?.amount}</h6>
                             
                             </GridItem>

                    </Grid>
                </CardBody>
            </Card>
        </>
    )
}

export default Revenuecard              