import React from "react";
import fallBackPoster from "../../assets/image_not_found.png";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function MovieCard({ movie,mediatype }) {
  const pStyle = "text-white font-bold";
  return (
    <>
      <Link to={`/item/${mediatype}/${movie.id}`}>
        <div className="flex flex-col gap-2 w-full hover:scale-[110%] transition ease-in-out duration-300 cursor-pointer ">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : fallBackPoster
            }
            alt={movie.title}
            className="w-full h-60"
          />
          <div>
            <div className="flex mb-3 gap-3">
              <p className={pStyle}>&#11088; {movie.vote_average.toFixed(1)}</p>
              <p className={pStyle}>
                {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
              </p>
            </div>
            <h2 className="text-white text-lg font-monoTrust wrap-break-word">
              {movie.title || movie.name}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
