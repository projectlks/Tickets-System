import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import useRole from "../hooks/useRole";

const Layout = () => {
  const [isShow, setIsShow] = useState(true);
  const [showAlert, setShowAlert] = useState(() => {
    return localStorage.getItem("showAlert") !== "false"; // Get stored value
  });

  const { userRole } = useRole();

  useEffect(() => {
    const handleResize = () => setIsShow(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        localStorage.setItem("showAlert", "false"); // Save state in localStorage
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      {/* Alert Box */}
      {showAlert && (
        <div
          className={`w-fit absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
            showAlert ? "top-1 opacity-100" : "-top-[100px] opacity-0"
          }`}
        >
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Successfully logged in as <strong>{userRole}</strong>.
          </Alert>
        </div>
      )}

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsShow(!isShow)}
        className=" cursor-pointer fixed top-6 right-6 bg-indigo-100 p-2  rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div className="w-full h-screen flex overflow-x-hidden">
        <div
          className={` ${
            isShow ? "w-[250px] absolute lg:static" : "w-0"
          } transition-all `}
        >
          <SideBar isShow={isShow} />
        </div>
        <div
          className={` ${
            isShow ? "w-[calc(100%-250px)]" : "w-full"
          } flex-1 transition-all  `}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
