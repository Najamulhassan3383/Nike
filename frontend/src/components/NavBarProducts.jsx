const NavBarProducts = ({ search, setSearch }) => {
  return (
    <header className="bg-gray-50 mt-4 mb-4">
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
        <div className=" gap-4">
          <div className="flex items-center gap-4">
            <div className="relative ">
              <label className="sr-only" htmlFor="search">
                Search{" "}
              </label>

              <input
                className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
    </header>
  );
};

export default NavBarProducts;
