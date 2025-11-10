import axios from "axios";


const API_KEY = import.meta.env.VITE_APIKEY;
const BASE_URL=import.meta.env.VITE_BASEURL


const api=axios.create({
    baseURL:BASE_URL,
    params:{
        api_key:API_KEY,
        language:"en-US"
    }
})

export const getCardDetail=async(id,type)=>{
    try{
        const response=await api.get(`/${type}/${id}`)
        return response.data
    }catch(error){
        console.error("Error in fetching card detail",error)
    }
}


export const getCreditsDetail=async(id,type)=>{
    try{
        const response=await api.get(`/${type}/${id}/credits`)
        return response.data
    }catch(error){
        console.error("Error in fetching crew detais",error)
    }
}