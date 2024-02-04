import { useState } from "react";
import { headerLogo } from "../assets/images/index.js";
import { Link } from "react-router-dom";
function Sidebar({ setFilteredData, data, filteredData }) {
  const [colorFilter, setColorFilter] = useState("all");
  const [categoryFilter, setcategoryFilter] = useState("all");
  const handleChangeInCategory = (event) => {
    let filter = event.target.value;
    setcategoryFilter(filter);
  };
  const handleChangeInColors = (event) => {
    setColorFilter(event.target.value);
  };
  const handleFilterClick = () => {
    console.log("fireing");
    let newdata;
    if (colorFilter === "all" && categoryFilter === "all") {
      console.log("here", data);
      setFilteredData(data);
      return;
    } else if (colorFilter === "all") {
      newdata = data.filter((item) => {
        return item.category === categoryFilter;
      });
    } else if (categoryFilter === "all") {
      newdata = data.filter((item) => {
        return item.color === colorFilter;
      });
    } else {
      newdata = data.filter((item) => {
        return item.category === categoryFilter && item.color === colorFilter;
      });
    }
    setFilteredData(newdata);
  };

  return (
    <div className=" grid grid-cols-1    lg:flex-col  gap-4 gap-y-9 w-full lg:w-[180px]">
      <div className="flex flex-col gap-y-2">
        <Link to="/">
          <img src={headerLogo} className="mb-2" />
        </Link>
        <p className="text-xl font-montserrat font-bold">Category</p>
        <div>
          <label
            htmlFor="selectCategory"
            className="block textl-lg font-medium "
          >
            Select Category
          </label>

          <select
            name="selectCategory"
            id="selectCategory"
            onChange={handleChangeInCategory}
            className="mt-1 p-2  w-11/12 rounded-lg focus:border-coral-red focus:border dark:bg-black  sm:text-sm"
          >
            <option value="">Please select</option>
            <option value="all">All Products</option>
            <option value="sneakers">Sneakers</option>
            <option value="flats">Flats</option>
            <option value="sandals">Sandals</option>
            <option value="heels">Heels</option>
          </select>
        </div>
      </div>
      {/* <div>
        <p className="text-xl font-montserrat font-bold">Price</p>
        <PriceFilter setFilteredData={setFilteredData} data={data} />
      </div> */}
      <div className="flex flex-col gap-y-2">
        <p className="text-xl font-montserrat font-bold">Color</p>
        <div>
          <label htmlFor="selectColor" className="block textl-lg font-medium ">
            Select Color
          </label>

          <select
            name="selectColor"
            id="selectColor"
            onChange={handleChangeInColors}
            className="mt-1 p-2  w-11/12 rounded-lg focus:border-coral-red focus:border dark:bg-black  sm:text-sm"
          >
            <option value="">Please select</option>
            <option value="all">All</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="Yellow">Yello</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleFilterClick}
        className="w-10/12 pr-2 border-2 border-coral-red py-2 rounded-full bg-coral-red text-white"
      >
        Apply filter
      </button>
    </div>
  );
}

export default Sidebar;
