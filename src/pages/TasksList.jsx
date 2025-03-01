import {  useState } from "react";
import Backbtn from "../components/Backbtn";
import { useNavigate } from "react-router-dom";

// Importing demo images for status representation

export default function TasksList() {
  const [tasks] = useState([
    {
      ticket_id: 1,
      title: "Fix Bug",
      description: "Fix the login bug",
      priority_id: "low",
      email: "user1@example.com",
      phone: "123-456-7890",
      status: "Open",
      assigned_to: "John Doe",
      created_date: "2023-09-25",
      updated_date: "2023-10-05",
      due_date: "2023-10-10",
      has_error: true, // Indicates if this task has an error or issue
    },
    {
      ticket_id: 2,
      title: "Update Docs",
      description: "Update the API documentation",
      priority_id: "high",
      email: "user2@example.com",
      phone: "987-654-3210",
      status: "Resolved",
      assigned_to: "Jane Smith",
      created_date: "2023-09-28",
      updated_date: "2023-10-07",
      due_date: "2023-10-15",
      has_error: false, // No errors, task is resolved
    },
  ]);
  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "bg-blue-500";
      case "in progress":
        return "bg-orange-500";
      case "closed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Backbtn />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl text-center font-bold mb-4 text-gray-800">
          Tasks List
        </h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 text-gray-700 text-sm uppercase whitespace-nowrap">
              <tr>
                <th className="py-4 px-5 text-left">Ticket ID</th>
                <th className="py-4 px-5 text-left">Title</th>
                <th className="py-4 px-5 text-left">Description</th>
                <th className="py-4 px-5 text-left">Priority</th>
                <th className="py-4 px-5 text-left"> Requester Email</th>
                <th className="py-4 px-5 text-left"> Requester Phone</th>
                <th className="py-4 px-5 text-left">Status</th>
                <th className="py-4 px-5 text-left">Created Date</th>

                <th className="py-4 px-5 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.ticket_id}
                  className="hover:bg-gray-100 transition"
                >
                  <td className="py-4 px-5 text-[14px]">{task.ticket_id}</td>
                  <td className="py-4 px-5 text-[14px]">{task.title}</td>
                  <td className="py-4 px-5 text-[14px]">{task.description}</td>
                  <td className="py-4 px-5">
                    <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                      <span
                        className={`block w-2 h-2 rounded-full ${getPriorityClass(
                          task.priority_id.toLowerCase()
                        )}`}
                      />
                      <p>{task.priority_id}</p>
                    </div>
                  </td>

                  <td className="py-4 px-5 text-[14px]">{task.email}</td>
                  <td className="py-4 px-5 text-[14px] whitespace-nowrap">
                    {task.phone}
                  </td>
                  {/* <td className="py-4 px-5 text-[14px]">{task.status}</td> */}

                  <td className="py-4 px-5">
                    <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                      <span
                        className={`block w-2 h-2 rounded-full ${getStatusClass(
                          task.status.toLowerCase()
                        )}`}
                      />
                      <p>{task.status}</p>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[14px]">{task.created_date}</td>
               

                  <td className="py-4 px-5 text-[14px] flex items-center space-x-3">
                    <button
                      onClick={() => navigate("/tickets-detial")}
                      
                    className="cursor-pointer flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition">
                      View
                    </button>

                    <button className="cursor-pointer  flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium   text-black transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
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
