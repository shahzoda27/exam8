"use client"
import { postAuth } from '@/api-service/auth-server'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
interface formData {
  username: FormDataEntryValue | null,
  password: FormDataEntryValue | null,
}

const Auth = () => {
  const router = useRouter()
  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username")
    const password = formData.get("password")
    const payload: formData = { username, password }
    
    const response = await postAuth({ ...payload })
    router.push("/Dashboard")
    if (response?.data?.token) {
      if (response?.data?.role === "employee") {
      } else if (response?.data?.role === "admin") {
       // router.push("/Dashboard")
      }
    }
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
     <h1 className='text-[30px] my-4'>Auth</h1>
     <form action={handleSubmit} className='w-[600px] min-h-96 p-[20px] border-[1px]'>
    <input type="text" placeholder='username' name='username' className='w-full p-3 my-3 border border-[#000] rounded-md' />
    <input type="password" placeholder='password' name='password' className='w-full p-3 my-3 border border-[#000] rounded-md' />
    <button className='w-full p-3 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' >Auth</button>
     </form>
    </div>
  )
}

export default Auth