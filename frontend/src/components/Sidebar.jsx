import { useState } from "react";

function Sidebar({ setFilteredData, data }) {
  const [colorFilter, setColorFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleChangeInCategory = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleChangeInColors = (event) => {
    setColorFilter(event.target.value);
  };

  const handleFilterClick = () => {
    let newdata;
    if (colorFilter === "all" && categoryFilter === "all") {
      setFilteredData(data);
      return;
    } else if (colorFilter === "all") {
      newdata = data.filter((item) => item.category === categoryFilter);
    } else if (categoryFilter === "all") {
      newdata = data.filter((item) => item.color === colorFilter);
    } else {
      newdata = data.filter(
        (item) => item.category === categoryFilter && item.color === colorFilter
      );
    }
    setFilteredData(newdata);
  };

  return (
    <div className="flex flex-col gap-6 md:flex-col md:w-[180px] md:gap-8">
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Category</p>
        <select
          name="selectCategory"
          id="selectCategory"
          onChange={handleChangeInCategory}
          className="mt-1 p-2 w-full rounded-lg focus:outline-none focus:border-coral-red dark:bg-black sm:text-sm"
        >
          <option value="">Please select</option>
          <option value="all">All Products</option>
          <option value="sneakers">Sneakers</option>
          <option value="flats">Flats</option>
          <option value="sandals">Sandals</option>
          <option value="heels">Heels</option>
        </select>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Color</p>
        <select
          name="selectColor"
          id="selectColor"
          onChange={handleChangeInColors}
          className="mt-1 p-2 w-full rounded-lg focus:outline-none focus:border-coral-red dark:bg-black sm:text-sm"
        >
          <option value="">Please select</option>
          <option value="all">All</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
      <button
        onClick={handleFilterClick}
        className="w-32 h-10 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Apply filter
      </button>
    </div>
  );
}

export default Sidebar;
