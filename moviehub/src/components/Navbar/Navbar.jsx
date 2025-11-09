import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  const style =
    "hover:underline hover:cursor-pointer transition-colors duration-300 hover:text-white";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-[90%] pt-8 pb-4 m-auto md:flex gap-10 justify-between items-center">
      <h1 className="text-white font-momoSignature text-3xl tracking-wide">
        MOVIE<span className="text-red-500">HUB</span>
      </h1>
      <ul className="hidden md:flex gap-8 font-monoTrust text-lg text-gray-400">
        <NavLink to="/" className="active:text-red-500 active:underline">
          <li className={style}>HOME</li>
        </NavLink>
        <NavLink to="/movie">
          <li className={style}>MOVIES</li>
        </NavLink>
        <NavLink to="/tvshow">
          <li className={style}>TV SHOW</li>
        </NavLink>
        <li className={style}>FAVOURITES</li>
      </ul>
      <div className="hidden md:block w-[30%] relative">
        <CiSearch className="absolute text-2xl right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors duration-300" />
        <input
          type="text"
          placeholder="Search your movie..."
          className="w-full bg-transparent border border-gray-500 focus:border-red-500 outline-none rounded-full pl-5 pr-12 py-2 text-gray-300 text-lg placeholder-gray-500 focus:placeholder-gray-400 transition-all duration-300"
        />
      </div>
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden text-3xl text-gray-300 cursor-pointer"
        onClick={(e) => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>
      {menuOpen && (
        <div className="abs w-full bg-[#111] border-t border-gray-800 md:hidden z-50 ">
          <ul className="flex flex-col items-center gap-6 py-6 font-monoTrust text-lg text-gray-400">
            <NavLink to="/">
              <li className={style}>HOME</li>
            </NavLink>
            <NavLink to="/movie">
              <li className={style}>MOVIES</li>
            </NavLink>
            <NavLink to="/tvshow">
              <li className={style}>TV SHOW</li>
            </NavLink>
            <li className={style}>FAVOURITES</li>
            <div className="w-[80%] relative mt-2">
              <CiSearch className="absolute text-2xl right-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border border-gray-500 focus:border-red-500 outline-none rounded-full pl-5 pr-12 py-2 text-gray-300 text-lg placeholder-gray-500 transition-all duration-300"
              />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
