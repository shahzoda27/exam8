import { ReactNode } from "react";
export interface IUser {
    first_name: ReactNode | string | File ,
    last_name:  FormDataEntryValue | null,
    username:  FormDataEntryValue | null,
    password:  FormDataEntryValue | null,
    age:  number | null,
    description:  FormDataEntryValue | null,
    avatar: string | undefined,
    _id?: string | undefined,
    role:  FormDataEntryValue | null | string ,
    image?: string | undefined
}


export interface IGenre {
    // id?: I_ID,
    id?: number | undefined,
    name: string,
    createdAt?: string,
    updatedAt?: string,
}


export interface IAuthor {
    id?: number | undefined,
    full_name: string,
    birthdate?: string,
    country?: string,
    image?: string,
}


export interface PageType {
    id: number,
    component: string,
    title: string,
}






