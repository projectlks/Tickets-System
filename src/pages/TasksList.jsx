import { useState } from "react";
import PriorityIcon from "../components/PriorityIocn";
import { useNavigate } from "react-router-dom";
import BackBtn from "../components/BackBtn";

export default function TasksList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fix Bug",
      description: "Fix the login bug",
      status: "Open",
      priority: "High",
      dueDate: "2023-10-10",
    },
    {
      id: 2,
      title: "Update Docs",
      description: "Update the API documentation",
      status: "Pending",
      priority: "Medium",
      dueDate: "2023-10-15",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const navigate = useNavigate();

  return (
    <>
      <BackBtn />
      <div className="p-14 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Tasks List</h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
              <tr>
                <th className="py-4 px-5 text-left">Task ID</th>
                <th className="py-4 px-5 text-left">Title</th>
                <th className="py-4 px-5 text-left">Description</th>
                <th className="py-4 px-5 text-left">Status</th>
                <th className="py-4 px-5 text-left">Priority</th>
                <th className="py-4 px-5 text-left">Due Date</th>
                <th className="py-4 px-5 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-100 transition">
                  <td className="py-4 px-5 text-[14px]">{task.id}</td>
                  <td className="py-4 px-5 text-[14px]">{task.title}</td>
                  <td className="py-4 px-5 text-[14px]">{task.description}</td>
                  <td className="py-4 px-5">
                    <select
                      value={task.status}
                      onChange={(e) =>
                        handleStatusChange(task.id, e.target.value)
                      }
                      className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer  duration-300"
                    >
                      <option value="Open">Open</option>
                      <option value="Pending">Pending</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                  <td className="py-4 px-5">
                    <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                      <PriorityIcon priority={task.priority} />
                      <p>{task.priority}</p>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[14px]">{task.dueDate}</td>

                  <td className="py-4 px-5 text-[14px]">
                    <button
                      onClick={() => {
                        navigate("/tickets-detial");
                      }}
                      className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none transition duration-300"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
