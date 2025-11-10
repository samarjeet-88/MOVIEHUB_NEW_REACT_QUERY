import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;
const BASE_URL=import.meta.env.VITE_BASEURL


const api=axios.create({
    baseURL:BASE_URL,
    params:{
        api_key:API_KEY
    }
})

export const getFavouriteMovie=async(movieid)=>{
    try{
        const response=await api.get(`/movie/${movieid}`)
        return response.data
    }catch(error){
        console.error('Fetching specific trending movies failed',error)
    }
}