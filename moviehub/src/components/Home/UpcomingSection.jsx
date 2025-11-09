import React, { useRef } from "react";
import { getUpcomingMovies } from "../../api/UpcomingMovie";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../Card/MovieCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

function UpcomingSection() {
  const slideIconStyle = "text-white text-4xl hover:text-gray-400 transition";
  const upcomingQuery = useQuery({
    queryKey: ["upcomingmovie"],
    queryFn: getUpcomingMovies,
    staleTime: 1000 * 60 * 60,
  });
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
      <div className="w-full ">
        {upcomingQuery.isLoading ? (
          <div>
            <h1 className="text-2xl text-red-500">UPCOMING MVIES LOADING...</h1>
          </div>
        ) : (
          <div className="w-full relative">
            <h1 className="font-monoTrust text-white text-2xl mb-3 mt-3">
              UPCOMING MOVIES / TV SHOWS
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
              {upcomingQuery.data?.results?.map((movie, idx) => (
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

export default UpcomingSection;
