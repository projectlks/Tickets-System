import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsShow(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsShow(!isShow)}
        className="lg:hidden fixed top-6 right-6 bg-indigo-200 p-2 rounded-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="w-full h-screen flex overflow-x-hidden">
        <div className="w-[250px]">
          <SideBar isShow={isShow} />
        </div>
        <div className="flex-1 w-[calc(100%-250px)] ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
// style={{ marginLeft: isShow ? "250px" : "0" }}
