import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="  dark:bg-[#000814] dark:text-white">
      <Outlet />
    </div>
  );
};

export default MainLayout;
