import { createContext } from "react";



const favouriteMovieContext=createContext()

export const FavouriteMovieProvider=({children})=>{
    const [movies,setMovies]=useState(()=>{
        const stored=localStorage.getItem("favMovies")
        return stored?JSON.parse(stored):[]
    })

}