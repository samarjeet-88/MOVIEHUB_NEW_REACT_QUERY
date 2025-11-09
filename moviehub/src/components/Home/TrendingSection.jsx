import React, { useRef } from "react";
import { getTrendingMovies } from "../../api/TrendingMovie";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

function TrendingSection() {
  const slideIconStyle = "text-white text-4xl hover:text-gray-400 transition";
  const trendingMovieQuery = useQuery({
    queryKey: ["trendingmovie"],
    queryFn: getTrendingMovies,
  });
//   console.log(trendingMovieQuery.data)
  const listRef = useRef(null);
  const scrollLeft = () => {
    listRef.current.scrollBy({
      left: -500,
      behaviour: "smooth",
    });
  };
  const scrollRight = () => {
    listRef.current.scrollBy({
      left: 500,
      behaviour: "smooth",
    });
  };
  return (
    <>
      <div className="w-[90%] m-auto p-4">
        {trendingMovieQuery.isLoading ? (
          <div>
            <h1 className="text-2xl text-red-500">LOADING...</h1>
          </div>
        ) : (
          <div className="w-full relative">
            <h1 className="font-monoTrust text-red-600 text-2xl mb-3 mt-3">
              TRENDING MOVIES
            </h1>
            <button
              className="hover:cursor-pointer absolute right-0 top-0 -translate-x-10 "
              onClick={scrollLeft}
            >
              <CiCircleChevLeft className={slideIconStyle} />
            </button>
            <button
              className="hover:cursor-pointer absolute right-0 top-0"
              onClick={scrollRight}
            >
              <CiCircleChevRight className={slideIconStyle} />
            </button>
            <ul
              className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
              ref={listRef}
            >
              {trendingMovieQuery.data?.results?.map((movie, idx) => (
                <li key={idx} className="snap-start shrink-0 w-40 ">
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default TrendingSection;
