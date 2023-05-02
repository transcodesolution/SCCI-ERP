import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Divider } from '@chakra-ui/react'
import { ButtonGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../../Reducers/addMembercard'
import tabeData from '../../Page/Memberships/TabsData'
import { useNavigate } from 'react-router-dom'
function Membercard({ data }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const heandleClick = (id) => {

        navigate(`/members_details/${id}`)


    }
    return (
        <>
            <Card maxW='sm' className='hover_effect' >
                <CardBody>
                    <Image
                        src={data?.profilePhoto || 'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg'}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{data?.companyName}</Heading>
                        <Text>
                            {data?.firstName}  {data?.middleName}  {data?.lastName}
                        </Text>
                        <Text>
                            {data?.phone}
                        </Text>
                        <Text>
                            {data?.email}
                        </Text>

                    </Stack>
                </CardBody>

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={() => heandleClick(data?._id)}>
                            Details
                        </Button>

                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}

export default Membercard;






