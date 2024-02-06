import { useContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { CartContext } from "@/context/CartContext";

const MobileMenuBar = ({ isOpen, search, handleChange }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "flex " : "hidden"
      } w-full px-6 py-4 dark:text-white `}
    >
      <div className="flex flex-col items-center w-full gap-y-3 ">
        <div className="relative w-10/12 m-auto  md:w-3/5 shadow-md rounded-full">
          <label className="sr-only" htmlFor="search">
            Search{" "}
          </label>

          <input
            className="h-10 w-full rounded-full border-none focus:border-none dark:bg-black pe-10 ps-4 text-sm shadow-sm "
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
        <a
          className="my-2   transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
          href="#"
        >
          Home
        </a>
        <a
          className="my-2  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
          href="#"
        >
          Shop
        </a>
        <a
          className="my-2  transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
          href="#"
        >
          Contact
        </a>
        <a
          className="my-2  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
          href="#"
        >
          About
        </a>
        <div className="flex justify-center  w-6 h-6 items-center mb-4 md:mr-4 md:mb-0 md:block group">
          <a
            className="relative  transition-colors duration-300 transform  hover:text-gray-600 dark:hover:text-gray-300"
            href="#"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute hidden -top-2 -right-1 w-4 h-4 group-hover:flex justify-center items-center  text-xs text-white bg-blue-500 rounded-full">
              {cartItems.length}
            </span>
          </a>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default MobileMenuBar;
