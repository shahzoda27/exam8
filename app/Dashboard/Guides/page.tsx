"use client"
import React, { useEffect, useState } from 'react'
import AddGuidesModal from '@/app/Modals/GuidesModal/AddGuidesModal/page';
import { IGuides } from '@/types/guides.types';
import { getGuides } from '@/api-service/guides-service';
import GuidesCard from './GuidesCard/Guides';
import Search from '@/ui/dashboard/search/search';
import Pagination from '@/ui/dashboard/pagination/pagination';
export default function Guides({count}:{count:number | undefined}) {
  const [guidesModal, setGuidesModal] = useState(false)
  const [guidesData, setGuidesData] = useState<IGuides[]>([])
  const [guidesId, setGuidesId] = useState<string | undefined>("")
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getGuides();
        setGuidesData(data?.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    }
    fetchData();
  }, []);
  const ModalGuides = () => {
    setGuidesModal(true)
  }
  const toggle = () => {
    setGuidesModal(false)
  }
  return (
    <div className='px-[50px] py-[20px]'>
      <AddGuidesModal open={guidesModal} toggle={toggle} guidesId={guidesId}  />
      <Search/>
     <h1 className="text-[#fff] text-center">Guides</h1>
      <button onClick={ModalGuides} className='text-[#fff] bg-blue-700 py-[8px] px-[15px] rounded-[5px]'>Add Guides</button>
      <div className='flex flex-wrap justify-between gap-[20px] mt-[20px]'>
        {
          guidesData?.map((item, index) => (
            <div key={index}>
              <GuidesCard item={item} guidesId={guidesId} setGuidesId={setGuidesId} setModalEdit={setGuidesModal}/>
            </div>
          ))
        }
      </div>
      <Pagination count={count}/>
    </div>
  )
}
