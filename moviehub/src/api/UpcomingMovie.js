import axios from "axios";


const API_KEY = import.meta.env.VITE_APIKEY;
const BASE_URL=import.meta.env.VITE_BASEURL


const api=axios.create({
    baseURL:BASE_URL,
    params:{
        api_key:API_KEY
    }
})

export const getUpcomingMovies=async()=>{
    try{
        const response=await api.get("/movie/upcoming")
        return response.data
    }catch(error){
        console.error("Error in fetchng upcoming movies",error)
    }
}