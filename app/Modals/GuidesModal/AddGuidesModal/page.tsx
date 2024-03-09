"use client"
import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { IGuides } from '@/types/guides.types';
import { createGuides, upDataGuides } from '@/api-service/guides-service';
export default function AddGuidesModal({ open, toggle, guidesId}: { open: boolean; toggle: () => void; guidesId: string | undefined;  }) {
    const handleSubmit = async (formData: FormData) => {
        let title = formData.get("title")
        let content = formData.get("content")
        let payload: IGuides = {title,content}
        if (guidesId !== "") {
            const respons = await upDataGuides({ ...payload, _id: guidesId })
        } else {
            const respons = await createGuides({ ...payload })
            if (respons?.status === 200) {
                window.location.reload();
            } else {
                console.log("error");
            }
        }
    }

    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h3>Add Guides</h3>
                </ModalHeader>
                <ModalBody>
                    <form action={handleSubmit} className='flex gap-[5px]'>
                        <div className='w-[60%]'>
                            <input type="text" placeholder='title' name='title' defaultValue={guidesId?.title} className=' w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' />
                            <textarea name="content" id="" cols={30} rows={5} defaultValue={guidesId?.content} placeholder='content' className='w-[100%] py-[8px] px-[10px] border-[1px] my-[5px] rounded-[5px]' ></textarea>
                            <button className='w-full p-3 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>save</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

