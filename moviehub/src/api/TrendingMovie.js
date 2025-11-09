import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;
const BASE_URL=import.meta.env.VITE_BASEURL

const api = axios.create({
  baseURL: BASE_URL,
  params:{
    api_key:API_KEY
  }
});


export const getTrendingMovies=async()=>{
    try{
        const response=await api.get("/trending/all/day")
        return response.data
    }catch(error){
        console.error("Error Fetching trending movies",error)
    }
}