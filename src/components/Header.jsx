// Header.jsx
import React, { useState } from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [mobileSearch, setMobileSearch] = useState(false);

  const openBag = () => {
    //handle open bag modal
  };

  const openMobileSearch = () => {
    setMobileSearch(!mobileSearch);
  };

  return (
    <header className="bg-neutral-100 py-4 text-neutral-800  drop-shadow-2xl fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-5  flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setMobileSearch(false)}>
          {" "}
          <img
            src="/white-logo.png"
            alt="Dark Logo"
            className="img-fluid block "
            width={120}
            height={120}
          />
        </Link>

        {/* Category nav */}
        <nav
          className={
            mobileSearch
              ? "flex flex-col items-center gap-5 justify-center order-3 w-full md:block md:w-auto md:order-2 "
              : "hidden md:block md:w-auto md:order-2 "
          }
        >
          {/* Barra di ricerca */}
          <form
            action="/search"
            method="get"
            className="group flex md:hidden"
            onSubmit={openMobileSearch}
          >
            <input
              type="text"
              placeholder="Cerca un prodotto"
              className="p-3 bg-neutral-50 border border-e-0 border-emerald-600 rounded-s-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
            />
            <button
              type="submit"
              className="p-3 bg-neutral-50 border border-s-0 border-emerald-600 text-emerald-600 rounded-e-md group-hover:bg-neutral-100 transition"
            >
              <FaSearch />
            </button>
          </form>
        </nav>

        {/* Ricerca e icone */}
        <div className="flex items-center justify-center order-2 gap-5 md:order-3 ">
          {/* Barra di ricerca */}
          <form action="/search" method="get" className="group md:flex  hidden">
            <input
              type="text"
              placeholder="Cerca un prodotto"
              className="p-3 bg-neutral-50 border border-e-0 border-emerald-600 rounded-s-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
            />
            <button
              type="submit"
              className="p-3 bg-neutral-50 border border-s-0 border-emerald-600 text-emerald-600 rounded-e-md group-hover:bg-neutral-100 transition"
            >
              <FaSearch />
            </button>
          </form>

          {/* Mobile search */}
          <FaSearch
            size={20}
            className={
              mobileSearch
                ? "hidden"
                : "md:hidden text-emerald-600 cursor-pointer hover:text-emerald-700 transition"
            }
            onClick={openMobileSearch}
          />

          {/* Login */}
          <Link to="/login">
            {" "}
            <FaUser
              size={20}
              className="text-emerald-600 cursor-pointer hover:text-emerald-700 transition"
            />
          </Link>

          {/* Carrello */}
          <FaShoppingBag
            onClick={openBag}
            size={20}
            className="text-emerald-600 cursor-pointer hover:text-emerald-700 transition"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
