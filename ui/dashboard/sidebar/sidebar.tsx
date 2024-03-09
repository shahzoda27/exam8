"use client"
import React, {ReactNode} from 'react'
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag } from "react-icons/md"
import styles from "./sidebar.module.css"
import MenuLink from './menuLink/menuLink';
import Image from 'next/image'
interface MenuItem{
  title:string,
  lists:SubMenuItem[];
}
interface SubMenuItem{
  title:string,
  path:string,
  icon:ReactNode;
}
const menuItems:MenuItem[] = [
  {
    title:"Pages",
    lists:[
      {
        title:"Dashboard",
        path:"/Dashboard",
        icon:<MdDashboard/>
      },
      {
        title:"Users",
        path:"/Dashboard/User",
        icon:<MdSupervisedUserCircle />
      },
      {
        title:"Guides",
        path:"/Dashboard/Guides",
        icon:<MdShoppingBag />
      }
      
    ]
  }
]
export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
        alt='avatar'
        src="/user.jpg"
        className={styles.userImage}
        width={50}
        height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Shirinova Shahzoda</span>
        </div>
      </div>
      <ul>
        {
        menuItems.map((item,index)=>(
          <li key={index}>
            <span className={styles.cat}>{item.title}</span>
            {
              item.lists.map(list=>(
                <MenuLink key={list.title} menu={list}/>
              ))
            }
          </li>
        ))
        }
      </ul>
    </div>
  )
}
