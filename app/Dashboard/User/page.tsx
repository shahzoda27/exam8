"use client"
import React, { useEffect, useState } from 'react'
import AddUserModal from '@/app/Modals/UserModal/AddUserModal/page';
import { getUser } from '@/api-service/users-service';
import { IUser } from '@/types/user.types';
import UserCard from './UserCard/UserCard';
import Search from '@/ui/dashboard/search/search';
import Pagination from '@/ui/dashboard/pagination/pagination';
export default function User({count}:{count:number | undefined}) {
  const [userModal, setUserModal] = useState(false)
  const [userData, setUserData] = useState<IUser[]>([])
  const [userId, setUserId] = useState<string | undefined>("")
  const [searchQuery, setSearchQuery] = useState<string>("");
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser({ q: searchQuery });
        setUserData(data?.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    }
    fetchData();
  }, [searchQuery]);
  const ModalUser = () => {
    setUserModal(true)
  }
  const toggle = () => {
    setUserModal(false)
  }
  return (
    <div className='px-[50px] py-[20px]'>
      <AddUserModal open={userModal} toggle={toggle} userId={userId}  />
      <Search handleChange={(value) => setSearchQuery(value)}/>
      <h1 className="text-[#fff] text-center">Users</h1>
      <button onClick={ModalUser} className='text-[#fff] bg-blue-700 py-[8px] px-[15px] rounded-[5px]'>Add User</button>
      <div className='flex flex-wrap justify-between gap-[20px] mt-[20px]'>
        {
          userData?.map((item, index) => (
            <div key={index}>
              <UserCard item={item} userId={userId} setUserId={setUserId} setModalEdit={setUserModal}/>
            </div>
          ))
        }
      </div>
      <Pagination count={count}/>
    </div>
  )
}
