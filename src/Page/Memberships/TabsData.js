import React, { useEffect, useState } from 'react'
import { TabList, Tabs, TabPanel, Tab, TabPanels } from '@chakra-ui/react';
import { ApiGet } from '../../Api/ApiData';
import Personalinfo from './Components/Personalinfo';
import Companyinfo from './Components/Company';
import Membershipinfo from './Components/Membershipinfo';
import Transactioninfo from './Components/Transactioninfo';
import { useParams } from 'react-router-dom';

const TabsData = () => {

    const { id } = useParams();
    const [details, setDetails] = useState({})

    const getMemberDetails = () => {
        ApiGet(`/admin/member/${id}`).then((res) => {
            console.log("resp", res)
            setDetails(res?.data?.data);
        })
    }

    useEffect(() => {
        getMemberDetails();
    }, [])
    return (
        <div style={{ marginTop: '65px', background: '#fff' }}>
            <Tabs variant='enclosed'>
                <TabList>
                    <Tab>MEMBERS'S DETAILS</Tab>
                    <Tab>MEMBER'S COMPANY DETAILS</Tab>
                    <Tab>MEMBERSHIPS DETAILS</Tab>
                    <Tab>TRANSACTIONS DETAILS</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p><Personalinfo details={details} /></p>
                    </TabPanel>
                    <TabPanel>
                        <p><Companyinfo details={details} /> </p>
                    </TabPanel>
                    <TabPanel>
                        <p><Membershipinfo details={details} /></p>
                    </TabPanel>
                    <TabPanel>
                        <p><Transactioninfo details={details} /></p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabsData;