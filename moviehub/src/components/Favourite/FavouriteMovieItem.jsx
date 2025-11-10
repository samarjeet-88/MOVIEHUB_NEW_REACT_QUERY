import React from "react";
import { getFavouriteMovie } from "../../api/favouriteMovieDetail";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../Card/MovieCard";

function FavouriteMovieItem({ id }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["favourite-movie", id],
    queryFn: () => getFavouriteMovie(id),
  });

  if (isLoading) {
    return (
      <div className="w-full h-64 bg-gray-800 animate-pulse rounded-xl"></div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-64 bg-red-900 text-center text-white rounded-xl flex items-center justify-center">
        Error loading
      </div>
    );
  }

  return (
    <li className="w-full">
      <MovieCard movie={data} mediatype="movie" />
    </li>
  );
}

export default FavouriteMovieItem;
