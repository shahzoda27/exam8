import { $api } from "@/api/interceptors";
import { IGuides } from "@/types/guides.types";
// post guides
export const createGuides = async (data: IGuides) => {
    try {
        const respons = await $api.post("/guides", data)
        return respons
    } catch (error) {
        console.log(error);
    }
}
// get guides
export const getGuides = async () => {
    try {
        const respons = await $api.get("guides?q=q&page%5Boffset%5D=5&page%5Blimit%5D=5&sort%5Bby%5D=id&sort%5Border%5D=desc")
        console.log(respons?.data);
        return respons?.data
        
    } catch (err) {
        console.log(err);
    }
}
// delete guides
export const deleteGuides = async (id: string | undefined) => {
    try {
        const respons = await $api.delete(`/guides/${id}`)
        return respons

    } catch (error) {
        console.log(error);

    }
}

// upData guides
export const upDataGuides = async (payload:IGuides ) => {
    try {
        const respons = await $api.patch(`/guides/${payload._id}`, payload)
    } catch (error) {
        console.log(error);
    }
}