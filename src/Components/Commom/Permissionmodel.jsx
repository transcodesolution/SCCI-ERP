import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { ApiDelete } from '../../Api/ApiData'
import { toast } from 'react-toastify'

function Permissionmodel({ show, closeModel, selectedId,getAllMembers }) {

    const handleDelete = () => {
        ApiDelete(`/admin/member/${selectedId}`).then((response) => {
            toast.success(response?.data?.message)
            closeModel()
            getAllMembers()
        }).catch((error) => toast.error(error.message))
    }
    return (

        <Modal onClose={closeModel} isOpen={show} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Are You Sure You Want To Delete This Member?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
        
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeModel}>Close</Button>
                    <Button colorScheme='red' onClick={handleDelete} mx={2} > Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Permissionmodel