import { Box } from "@chakra-ui/react";
import React from "react";
import { Reusable } from "./Personalinfo";
import Countdown from "react-countdown";
import moment from "moment";

function Membershipinfo({ details }) {
    console.log(details, 'dls')

    return (
        <>
            <Box mt={2} p='4'>
                <Reusable fieldName={"Membership Type"} fieldValue={'Yearly'} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Category'} fieldValue={'IT'} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Start Date'} fieldValue={moment(details?.startDate).format('DD/MM/YYYY')} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'End Date'} fieldValue={moment(details?.endDate).format('DD/MM/YYYY')} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Count Down'} fieldValue={<Countdown date={new Date(details?.endDate)} />} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Membership Amount'} fieldValue={details?.amount} />
            </Box >

            <Box mt={2} p='4'>
                <Reusable fieldName={'Pending Amount'} fieldValue={details?.pendingAmount} />
            </Box >

        </>)
}

export default Membershipinfo;
