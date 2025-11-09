import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;
const BASE_URL=import.meta.env.VITE_BASEURL


const api=axios.create({
    baseURL:BASE_URL,
    params:{
        api_key:API_KEY
    }
})

export const getSpecificTrendingMovies=async()=>{
    try{
        const response=await api.get("/trending/movie/day")
        return response.data
    }catch(error){
        console.error('Fetching specific trending movies failed',error)
    }
}
export const getSpecificUpcomingMovies=async()=>{
    try{
        const response=await api.get("/movie/upcoming")
        return response.data
    }catch(error){
        console.error('Fetching specific trending movies failed',error)
    }
}