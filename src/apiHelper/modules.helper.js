import axios from "axios";
const serverURL = import.meta.env.VITE_SERVER_URL

export const getAllModules = async () => { 
    const response = await axios.get(`${serverURL}/api/admin/modules`)

    if(response.status == 200){
        return response.data
    }
    else return null
}

export const getAllCategoriesOfModule = async (moduleName) => {
    const response = await axios.get(`${serverURL}/api/admin/modules/${moduleName}/categories`)
    if(!response.status == 200){
        return null
    }
    else 
        return response.data
}

export const createNewModule = async (module) => {
    console.log(module)
    const response = await axios.post(`${serverURL}/api/admin/modules`,module)

    if(response.status == 200){
        return true
    }

    else return false
}