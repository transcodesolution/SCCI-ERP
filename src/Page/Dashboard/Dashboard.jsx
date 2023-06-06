import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Revenuecard from '../../Components/Commom/Revenuecard';
import { ImStatsBars } from "react-icons/im";
import { ApiGet, ApiPost } from '../../Api/ApiData';

function Dashboard() {
  const [data, setData] = useState([])

 

  const getDashboardDate = () => {
    ApiGet('/admin/get/dashboard').then((response) => setData([{
      title: "Membeship Amount",
      amount: response?.data?.data?.totalTransaction?.totalAmount,
      icon: <ImStatsBars height={'100%'} width={'100%'} />,
      bg: "#EA6A47"
    },
    {
      title: "Pending Amount",
      amount: response?.data?.data?.totalTransaction?.totalpendingAmount,
      icon: <ImStatsBars />,
      bg: "#A5D8DD"
    },
    {
      title: "Total Member",
      amount: response?.data?.data?.members,
      icon: <ImStatsBars />,
      bg: "#0091D5"
    }
    ]))
  }

  useEffect(() => {
    getDashboardDate()
    return () => {
    }
  }, [])

  return (
    <div style={{ marginTop: "65px" }}>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
      >
        <SimpleGrid columns={[1, 1, 1, 2, 2, 3, 3]} spacing='40px'>
          {
            data?.map((singleDate) => <Revenuecard data={singleDate} />)
          }
        </SimpleGrid>

      </Box>
    </div >
  )
}

export default Dashboard;