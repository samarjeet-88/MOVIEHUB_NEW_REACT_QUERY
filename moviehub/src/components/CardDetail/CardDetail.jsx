import { useQuery } from "@tanstack/react-query";
import fallBackPoster from "../../assets/image_not_found.png";
import React from "react";
import { useParams } from "react-router-dom";
import { getCardDetail, getCreditsDetail } from "../../api/CardDetail";

function CardDetail() {
  const { id, type } = useParams();

  const {
    data: item,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["carddetail", id, type],
    queryFn: () => getCardDetail(id, type),
  });

  const {
    data: credit,
    isLoading: isCreditLoading,
    error: creditError,
  } = useQuery({
    queryKey: ["creditdetail", id, type],
    queryFn: () => getCreditsDetail(id, type),
  });

  if (isLoading || isCreditLoading) return <p>Loading...</p>;
  if (error || creditError)
    return <p className="text-white text-2xl">DETAILS NOT AVAILABLE.</p>;

  const backdropImage = item?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
    : fallBackPoster;

  const posterImage = item?.poster_path
    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
    : fallBackPoster;

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={backdropImage}
          alt={item?.title || item?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/85 to-transparent"></div>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[90%] flex flex-col md:flex-row gap-10 items-center md:items-end">
          <img
            src={posterImage}
            alt={item?.title || item?.name}
            className="w-40 sm:hidden md:block md:w-60 lg:w-72 rounded-xl shadow-2xl border border-gray-700"
          />
          <div className="max-w-3xl text-center md:text-left space-y-4 ">
            <h1 className="text-3xl md:text-5xl font-bold  ">
              {item?.title || item?.name}
            </h1>

            {item?.tagline && (
              <p className="text-gray-300 italic text-lg md:text-xl">
                {item.tagline}
              </p>
            )}

            {item?.overview && (
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {item.overview}
              </p>
            )}
            <div className="flex flex-wrap gap-5 text-gray-300 text-sm md:text-lg font-semibold mt-2">
              {item?.release_date && (
                <p>
                  <span className="text-white font-bold">Release:</span>{" "}
                  {item.release_date}
                </p>
              )}
              {item?.runtime && (
                <p>
                  <span className="text-white font-bold">Runtime:</span>{" "}
                  {item.runtime} min
                </p>
              )}
            </div>
            {item?.genres && (
              <div className="flex flex-wrap gap-3 mt-3">
                {item.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-red-600 px-4 py-2 rounded-2xl text-sm font-semibold"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}
            <button className="mt-4 font-bold bg-green-600 px-6 py-3 rounded-lg hover:bg-green-800 transition-all hover:cursor-pointer">
              ADD TO FAVOURITE
            </button>
          </div>
        </div>
      </div>
      {credit?.cast?.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 pb-16 mt-10">
          <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {credit.cast.slice(0, 12).map((actor) => (
              <div
                key={actor.cast_id || actor.id}
                className="text-center bg-gray-900 p-3 rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : fallBackPoster
                  }
                  alt={actor.name}
                  className="w-28 h-40 object-cover rounded-lg mx-auto mb-2"
                />
                <p className="font-semibold text-sm">{actor.name}</p>
                <p className="text-gray-400 text-xs">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetail;
