import { Box, Flex, Text } from '@chakra-ui/react'
import moment from 'moment/moment'
import React from 'react'




export const Reusable = ({ fieldName, fieldValue }) => {
    return <>
        <Flex textAlign={'left'}>
            <Box flex={2} color={'gray.600'}>{fieldName}  </Box>
            <Box flex={1} >: </Box>
            <Box as='span' textAlign={'left'} fontWeight={'bold'} flex={3}>{fieldValue}</Box>
        </Flex>

    </>
}

function Personalinfo({ details }) {
    let obj = [
        {
            field: "First Name",
            value: details?.firstName || 'NA/N'
        },
        {
            field: "Middle Name",
            value: details?.middleName || 'NA/N'
        },
        {
            field: "Last Name",
            value: details?.lastName || 'NA/N'
        },
        {
            field: "Contact number",
            value: details?.phone || 'NA/N'
        },
        {
            field: "WhatsApp number",
            value: details?.whatsappNumber || 'NA/N'
        },
        {
            field: "Email",
            value: details?.email || 'NA/N'
        },
        {
            field: "DOB",
            value: moment(details?.dob).format('DD-MM-YYYY') || 'NA/N'
        },
        {
            field: "Gender",
            value: details?.gender || 'NA/N'
        },

    ]
    return (
        <>

            <div className="profile_img_block">
                {!details.profilePhoto ? (
                    <img
                        className="profile_img"
                        src={'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg'}
                        alt="profile"
                    />
                ) : (
                    <img
                        className="profile_img"
                        src={details.profilePhoto}
                        alt="profile"
                    />
                )}
                {
                    obj?.map((data) => <Box mt={2} p='4'>
                        <Reusable fieldName={data?.field} fieldValue={data?.value} />
                    </Box >)
                }




                <br></br>
            </div >
        </>)
}

export default Personalinfo