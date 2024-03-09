import { deleteUser } from '@/api-service/users-service';
import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import img from "@/assets/deleteImg.gif"
import Image from 'next/image';
export default function DeleteUserModal({ open, toggle, id }: { open: boolean; toggle: () => void; id: string | undefined; }) {

    const removeUser = async () => {
        const respons = await deleteUser(id);
        if (respons?.status === 200) {
            window.location.reload();
        } else {
            console.log("error");
        }
    }

    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h4>Delete User</h4>
                </ModalHeader>
                <ModalBody className='flex items-center justify-center'>
                    <h1>Do you really want to delete??</h1>
                </ModalBody>
                <ModalFooter>
                    <button onClick={removeUser} className=' bg-red-700 py-[5px] px-[15px] rounded-[5px] text-[#fff]'>Yes</button>
                    <button onClick={toggle} className=' bg-green-600 py-[5px] px-[15px] rounded-[5px] text-[#fff]'>No</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
