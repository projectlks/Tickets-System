import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import HistoryItem from "../components/HistoryItem";
import SideBar from "../components/SideBar";

export default function Dashboard() {
  const [isShow, setIsShow] = useState(true);
  const data = {
    labels: [
      "All ",
      "Pending ",
      "Resolved ",
      "Open ",
      "Closed ",
    ],
    datasets: [
      {
        label: "",
        data: [1201, 300, 900, 500, 700],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ticket Status Overview",
      },
    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="border border-[#E6E7E9] w-full  min-h-[100vh] flex">
        <SideBar isShow={isShow} />

        <i
          onClick={() => {
            setIsShow(!isShow);
          }}
          className="fixed z-30 lg:hidden block top-6 right-6  cursor-pointer bg-indigo-200 hover:bg-indigo-100 hover:text-indigo-600 aspect-square w-[40px] h-auto p-2 rounded-md"
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
        </i>

        <div className="h-full w-full lg:w-[calc(100%-250px)]">
          <div className="h-fit w-full bg-[#F3F4F6] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
            <span className="rounded-xl  h-[100px] border border-gray-400 py-3 flex flex-col justify-between px-6">
              <h3 className="text-md text-gray-700 font-semibold ">
                All 
              </h3>
              <h1 className="text-2xl text-gray-900 font-bold ">1,200</h1>
            </span>
            <span className="rounded-xl  h-[100px] border border-gray-400 py-3 flex flex-col justify-between px-6">
              <h3 className="text-md text-gray-700 font-semibold ">
                Pending 
              </h3>
              <h1 className="text-2xl text-gray-900 font-bold ">300</h1>
            </span>
            <span className="rounded-xl  h-[100px] border border-gray-400 py-3 flex flex-col justify-between px-6">
              <h3 className="text-md text-gray-700 font-semibold ">
                Resolved 
              </h3>
              <h1 className="text-2xl text-gray-900 font-bold ">900</h1>
            </span>
            <span className="rounded-xl  h-[100px] border border-gray-400 py-3 flex flex-col justify-between px-6">
              <h3 className="text-md text-gray-700 font-semibold ">
                Open 
              </h3>
              <h1 className="text-2xl text-gray-900 font-bold ">500</h1>
            </span>
            <span className="rounded-xl  h-[100px] border border-gray-400 py-3 flex flex-col justify-between px-6">
              <h3 className="text-md text-gray-700 font-semibold ">
                Closed 
              </h3>
              <h1 className="text-2xl text-gray-900 font-bold ">700</h1>
            </span>
          </div>

          {/* testing chart */}

          <div className="w-full flex flex-col md:flex-row gap-5 p-6">
            <div className="w-full md:w-1/2">
              <div className="relative w-full md:h-full">
                <Bar data={data} options={options} />
              </div>
            </div>

            <div className="w-full  md:w-1/2 border border-gray-400  rounded-xl">
              <span className="flex justify-between items-center mb-3   p-5 ">
                <h3 className="font-bold">Recent </h3>

                <p
                  className="cursor-pointer"
                  onClick={() => navigate("/-assignment")}
                >
                  View All
                </p>
              </span>

              <div className="">
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
