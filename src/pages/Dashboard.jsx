import { Bar } from "react-chartjs-2";

import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import HistoryItem from "../components/HistoryItem";

import StatusIcon from "../components/StatusIcon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const data = {
    labels: ["All", "Pending", "Resolved", "Open", "Closed"],
    datasets: [
      {
        label: "High",
        data: [350, 80, 200, 50, 20],
        backgroundColor: "rgba(239, 68, 68, 0.5)", // bg-red-500 equivalent
      },
      {
        label: "Medium",
        data: [600, 150, 350, 70, 30],
        backgroundColor: "rgba(234, 179, 8, 0.5)", // bg-yellow-500 equivalent
      },
      {
        label: "Low",
        data: [900, 100, 700, 80, 20],
        backgroundColor: "rgba(34, 197, 94, 0.5)", // bg-green-500 equivalent
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: { title: { display: true, text: "Ticket Status Overview" } },
  };

  return (
    <section className=" w-full min-h-screen flex">
      <div className="flex-1 bg-gray-100 p-6">
        {/* for Admin */}
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="rounded-xl h-[100px] border border-gray-400 flex flex-col justify-between p-6">
            <h3 className="text-md font-semibold">All</h3>

            <h1 className="text-2xl font-bold">1200</h1>
          </div>

          {["Pending", "Resolved", "Open", "Closed"].map((status, idx) => (
            <div
              key={status}
              className="rounded-xl h-[100px] border border-gray-400 flex flex-col justify-between p-6"
            >
              <div className="flex items-center space-x-2">
                <StatusIcon status={status.toLowerCase()} />
                <h3 className="text-md font-semibold">{status}</h3>
              </div>
              <h1 className="text-2xl font-bold">
                {[300, 900, 500, 700][idx]}
              </h1>
            </div>
          ))}
        </div>

        <div className="bg-white my-5 p-10">
          <span className="block relative w-[90%]  mx-auto mb-10">
            <Bar data={data} options={options} />
          </span>
        </div>

        <div className="border  rounded-xl">
          <div className="flex justify-between p-5">
            <h3 className="font-bold">Recent</h3>
            <button
              className="hover:text-indigo-600 cursor-pointer font-semibold "
              onClick={() => navigate("/tickets-assignment")}
            >
              View All
            </button>
          </div>
          {[...Array(4)].map((_, idx) => (
            <HistoryItem key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
