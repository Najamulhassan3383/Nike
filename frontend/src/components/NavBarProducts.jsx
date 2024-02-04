import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaShoppingCart } from "react-icons/fa";

import Cart from "./Cart";

const NavBarProducts = ({ setFilteredData, data }) => {
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    let newdata = data.filter((item) => {
      return item.title.includes(e.target.value);
    });
    setFilteredData(newdata);
  };

  return (
    <header className=" mt-4 mb-4 flex flex-row justify-between items-center w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="gap-4">
          <div className="gap-4">
            <div className="relative ">
              <label className="sr-only" htmlFor="search">
                Search{" "}
              </label>

              <input
                className="h-10 w-full rounded-full border-none dark:bg-black pe-10 ps-4 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
                value={search}
                onChange={handleChange}
              />

              <button
                type="button"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Conditional rendering of overlay and cart */}
      {showCart && (
        <>
          <div className="fixed top-14 right-16  z-100 dark:bg-white dark:text-black bg-black rounded-xl">
            <Cart />
          </div>
        </>
      )}

      {/* Cart button */}
      <button
        className="mr-4 relative group"
        onClick={() => setShowCart(!showCart)}
      >
        <span className="absolute -top-3 text-coral-red -right-3 w-4 h-4 items-center text-[12px] bg-white rounded-full font-bold text-center justify-center hidden group-hover:block transition-all ease-in-out duration-1000">
          3
        </span>
        <FaShoppingCart />
      </button>
      {/* Theme switcher */}
      <ThemeSwitcher />
    </header>
  );
};

export default NavBarProducts;
