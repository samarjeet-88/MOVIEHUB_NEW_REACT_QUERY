import React from "react";
import { useFavouriteMovies } from "../../context/FavouriteMovieContext";
import FavouriteMovieItem from "./FavouriteMovieItem";

function FavouriteSection() {
  const { movies } = useFavouriteMovies(); 
  return (
    <div className="w-[90%] m-auto mt-6">
      {movies?.length > 0 ? (
        <>
          <h1 className="font-monoTrust text-white text-2xl mb-6">
            FAVOURITE MOVIES / TV SHOWS
          </h1>

          <ul
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              xl:grid-cols-6
              gap-6
              pb-10
            "
          >
            {movies.map((id) => (
              <FavouriteMovieItem key={id} id={id} />
            ))}
          </ul>
        </>
      ) : (
        <h1 className="text-white text-2xl mt-10 text-center font-bold">
          NO FAVOURITE MOVIES YET...
        </h1>
      )}
    </div>
  );
}

export default FavouriteSection;
