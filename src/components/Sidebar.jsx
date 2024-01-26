import { headerLogo } from "../assets/images/index.js";
import SideBarContainer from "./SideBarContainer.jsx";
import { categories, colors, price } from "../constants/index.js";
function Sidebar() {
  return (
    <div className=" ">
      <div className="">
        <img src={headerLogo} alt="logo" width={220} height={220} />
      </div>
      <div>
        <p className="text-xl font-montserrat font-bold">Category</p>
        <SideBarContainer data={categories} />
      </div>
      <div>
        <p className="text-xl font-montserrat font-bold">Price</p>
        <SideBarContainer data={price} />
      </div>
      <div>
        <p className="text-xl font-montserrat font-bold">Color</p>
        <SideBarContainer data={colors} />
      </div>
    </div>
  );
}

export default Sidebar;
