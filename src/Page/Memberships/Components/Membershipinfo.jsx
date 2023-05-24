import { Box } from "@chakra-ui/react";
import React from "react";
import { Reusable } from "./Personalinfo";
import Countdown from "react-countdown";

function Membershipinfo() {
    return (
        <>
            <Box mt={2} p='4'>
                <Reusable fieldName={"Membership Type"} fieldValue={'Yearly'} />
            </Box >
            
            <Box mt={2} p='4'>
                <Reusable fieldName={'Category'} fieldValue={'IT'} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Start Date'} fieldValue={'02/06/2002'} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable feldName={'End Date'} fieldValue={'02/06/2003'} />i
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Count Down'} fieldValue={<Countdown date={Date.now() + new Date('02/06/2024').getTime()} />} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Membership Amount'} fieldValue={'3000'} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Pending Amount'} fieldValue={'1500'} />
            </Box >

        </>)
}

export default Membershipinfo;
