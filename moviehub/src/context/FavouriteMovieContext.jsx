import { createContext, useContext, useEffect,useState } from "react";



const favouriteMovieContext=createContext()

export const FavouriteMovieProvider=({children})=>{
    const [movies,setMovies]=useState(()=>{
        const stored=localStorage.getItem("favMovies")
        return stored?JSON.parse(stored):[]
    })

    useEffect(()=>{
        localStorage.setItem("favMovies",JSON.stringify(movies))
    },[movies])

    const addMovies=(newmovieid)=>{
        setMovies((prev)=>{
            if(prev.includes(newmovieid)) return prev;

            return[...prev,newmovieid]
        })
    }

    const deleteMovies=(delmovieid)=>{
        setMovies((prev)=>prev.filter((previd)=>previd!==delmovieid))
    }

    const isAlreadyPresent=(movieid)=>{
        return movies.includes(movieid)
    }

    return(
        <favouriteMovieContext.Provider value={{movies,isAlreadyPresent,addMovies,deleteMovies}}>
            {children}
        </favouriteMovieContext.Provider>
    )

}


export const useFavouriteMovies=()=>useContext(favouriteMovieContext)