import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <div className="w-full flex">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
