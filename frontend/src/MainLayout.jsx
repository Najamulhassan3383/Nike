import { Outlet } from "react-router-dom";
import useDarkSide from "./Hooks/UseDarkTheme";

const MainLayout = () => {
  useDarkSide();
  return (
    <div className="  dark:bg-[#000814] dark:text-white">
      <Outlet />
    </div>
  );
};

export default MainLayout;
