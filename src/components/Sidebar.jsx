import { headerLogo } from "../assets/images/index.js";
import SideBarContainer from "./SideBarContainer.jsx";
import { categories, colors, price } from "../constants/index.js";
function Sidebar({ setCategoryFilter, setColorFilter, setPriceFilter }) {
  return (
    <div className=" flex flex-row   lg:flex-col  gap-4 w-full lg:w-[170px]">
      <div className="w-full flex justify-start mb-2 items-center">
        <img src={headerLogo} alt="logo" width={130} />
      </div>
      <div>
        <p className="text-xl font-montserrat font-bold">Category</p>
        <SideBarContainer data={categories} setFilter={setCategoryFilter} />
      </div>
      <div>
        <p className="text-xl font-montserrat font-bold">Price</p>
        <SideBarContainer data={price} setFilter={setPriceFilter} />
      </div>
      <div>
        <p className="text-xl font-montserrat font-bold">Color</p>
        <SideBarContainer data={colors} setFilter={setColorFilter} />
      </div>
    </div>
  );
}

export default Sidebar;
