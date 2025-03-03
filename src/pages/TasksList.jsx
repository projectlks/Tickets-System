import { useState } from "react";

export default function TasksList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fix Bug",
      description: "Fix the login bug",
      status: "Open",
      priority: "High",
      dueDate: "2023-10-10",
      errorImages: [
        "https://via.placeholder.com/150?text=Bug1",
        "https://via.placeholder.com/150?text=Bug2",
      ],
    },
    {
      id: 2,
      title: "Update Docs",
      description: "Update the API documentation",
      status: "Pending",
      priority: "Medium",
      dueDate: "2023-10-15",
      errorImages: [
        // "https://via.placeholder.com/150?text=Error1",
        // "https://via.placeholder.com/150?text=Error2",
        // "https://via.placeholder.com/150?text=Error3",
      ],
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

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
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
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
              <th className="py-4 px-5 text-left">Error Screenshots</th>
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
                    className="px-2 py-1 text-sm font-semibold rounded-lg cursor-pointer borde"
                  >
                    <option value="Open">Open</option>
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
                <td className="py-4 px-5">
                  <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                    <span
                      className={`block w-2 h-2 rounded-full ${getPriorityClass(
                        task.priority
                      )}`}
                    />
                    <p>{task.priority}</p>
                  </div>
                </td>
                <td className="py-4 px-5 text-[14px]">{task.dueDate}</td>
                <td className="py-4 px-5">
                  <div className="flex space-x-2">
                    {task.errorImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Error ${idx + 1} for ${task.title}`}
                        className="w-12 h-12 object-cover rounded-md border shadow-sm cursor-pointer hover:scale-110 transition-transform"
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-2xl">
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected Error"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
