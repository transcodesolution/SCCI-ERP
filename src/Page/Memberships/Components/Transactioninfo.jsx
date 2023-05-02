import { Box, Button, Divider, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { Select } from '@chakra-ui/react'
function Transactioninfo() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    const handleAddAmount = () => {
        toast.success('Transaction Added')
        onClose()
    }
    return (
        <>
            <Box textAlign={'right'}>
                <Text >Membership Amount: <b> 3000</b></Text>
                <Text>Pending Amount: <b> 2000</b></Text>
            </Box>
            <TableContainer mt={5}>
                <Table variant='simple'>
                    <TableCaption>Member's Transaction Details</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Descripton</Th>
                            <Th>Amount</Th>
                            <Th>Type</Th>
                            <Th>Date</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Payment Approve On 3rd Meeting</Td>
                            <Td color={'green'}>20000 </Td>
                            <Td >UPI</Td>
                            <Td >02/06/2023</Td>
                        </Tr>
                        <Tr>
                            <Td>Payment Approve On 3rd Meeting</Td>
                            <Td color={'green'}>20000 </Td>
                            <Td >UPI</Td>
                            <Td >02/06/2023</Td>
                        </Tr>
                        <Tr>
                            <Td>Payment Approve On 3rd Meeting</Td>
                            <Td color={'green'}>20000 </Td>
                            <Td >UPI</Td>
                            <Td >02/06/2023</Td>
                        </Tr>
                        <Tr>
                            <Td>Payment Approve On 3rd Meeting</Td>
                            <Td color={'green'}>20000 </Td>
                            <Td >UPI</Td>
                            <Td >02/06/2023</Td>
                        </Tr>


                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Descripton</Th>
                            <Th>Amount</Th>
                            <Th>Type</Th>
                            <Th>Date</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

            <Box textAlign={'center'}>

                <Button onClick={onOpen} > <AiOutlinePlus /> &nbsp;  New Transaction  </Button>
            </Box>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex>
                            <Box flex={1}>Total: 3000</Box>
                            <Box flex={1}>Pending: 2000</Box>
                        </Flex>
                        <Divider />
                        <Select placeholder='Select option'>
                            <option value='0'>Membership</option>
                            <option value='1'>Other</option>
                        </Select>
                        <Input type='number' mt={4} placeholder='Enter Amount' />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='green' onClick={() => handleAddAmount()}>Done</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>)
}

export default Transactioninfo