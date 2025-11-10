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


export const getSearchDetail=async(searchTerm)=>{
    try{
        const response=await api.get(`/search/movie`,{
            params:{
                query:searchTerm,
                page:1,
            }
        })
        return response.data
    }catch(error){
        console.log("Error in fetching seach term",error)
    }
}