import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSearchDetail } from "../../api/SearchDetail";
import fallBackPoster from "../../assets/image_not_found.png";

function Navbar() {
  const style =
    "hover:underline hover:cursor-pointer transition-colors duration-300 hover:text-white";

  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", query],
    queryFn: () => getSearchDetail(query),
    enabled: query.trim().length > 0,
  });

  return (
    <div className="relative w-[90%] pt-8 pb-4 m-auto md:flex gap-10 justify-between items-center">
      <NavLink to="/">
        <h1 className="text-white font-momoSignature text-3xl tracking-wide">
          MOVIE<span className="text-red-500">HUB</span>
        </h1>
      </NavLink>
      <ul className="hidden md:flex gap-8 font-monoTrust text-lg text-gray-400">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${style} ${isActive ? "text-red-500 underline" : "text-gray-400"}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/movie"
          end
          className={({ isActive }) =>
            `${style} ${isActive ? "text-red-500 underline" : "text-gray-400"}`
          }
        >
          MOVIE
        </NavLink>
        <NavLink
          to="/tvshow"
          end
          className={({ isActive }) =>
            `${style} ${isActive ? "text-red-500 underline" : "text-gray-400"}`
          }
        >
          TV SHOW
        </NavLink>
        <li className={style}>FAVOURITES</li>
      </ul>
      <div className="hidden md:block w-[30%] relative">
        {query.length === 0 ? (
          <CiSearch className="absolute text-2xl right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors duration-300" />
        ) : (
          <RxCross1 className="absolute text-2xl right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors duration-300 hover:cursor-pointer" onClick={()=>setQuery("")}/>
        )}

        <input
          type="text"
          placeholder="Search your movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent border border-gray-500 focus:border-red-500 outline-none rounded-full pl-5 pr-12 py-2 text-gray-300 text-lg placeholder-gray-500 focus:placeholder-gray-400 transition-all duration-300"
        />
        {query && (
          <div className="absolute top-[110%] left-0 w-full bg-[#111] border border-gray-700 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
            {isLoading && (
              <p className="text-center py-4 text-gray-400">Loading...</p>
            )}

            {isError && (
              <p className="text-center py-4 text-red-500">
                Error fetching results
              </p>
            )}

            {data?.results?.length > 0
              ? data.results.map((item) => {
                  const title = item.title || item.name;
                  const image = item.poster_path
                    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                    : fallBackPoster;

                  return (
                    <NavLink to={`/item/movie/${item.id}`}>
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-2 hover:bg-gray-800 cursor-pointer transition"
                      >
                        <img
                          src={image}
                          alt={title}
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="text-gray-300 text-sm">
                          <h3 className="font-semibold truncate max-w-[180px]">
                            {title}
                          </h3>
                        </div>
                      </div>
                    </NavLink>
                  );
                })
              : !isLoading &&
                query.trim().length > 0 && (
                  <p className="text-center py-4 text-gray-400">
                    No results found
                  </p>
                )}
          </div>
        )}
      </div>
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden text-3xl text-gray-300 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      {menuOpen && (
        <div className="abs w-full bg-[#111] border-t border-gray-800 md:hidden z-50">
          <ul className="flex flex-col items-center gap-6 py-6 font-monoTrust text-lg text-gray-400">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${style} ${
                  isActive ? "text-red-500 underline" : "text-gray-400"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/movie"
              end
              className={({ isActive }) =>
                `${style} ${
                  isActive ? "text-red-500 underline" : "text-gray-400"
                }`
              }
            >
              MOVIE
            </NavLink>
            <NavLink
              to="/tvshow"
              end
              className={({ isActive }) =>
                `${style} ${
                  isActive ? "text-red-500 underline" : "text-gray-400"
                }`
              }
            >
              TV SHOW
            </NavLink>
            <li className={style}>FAVOURITES</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
