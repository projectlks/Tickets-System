import { useNavigate } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import PriorityIcon from "../components/PriorityIocn"; // Adjust the import path as needed
import StatusIcon from "../components/StatusIcon"; // Adjust the import path as needed

const tickets = [
  {
    id: 1,
    title: "Issue with login",
    description: "User unable to login with correct credentials",
    createdBy: "John Doe",
    priority: "High",
    status: "Open",
    assignedTo: 2,
    startDate: "2023-10-01",
  },
  {
    id: 2,
    title: "Page not loading",
    description: "The dashboard page is not loading for some users",
    createdBy: "Jane Smith",
    priority: "Medium",
    status: "In Progress",
    assignedTo: 1,
    startDate: "2023-10-02",
  },
];

const employees = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Brown" },
];


export default function CustomerTable() {

    
const navigate = useNavigate()
  return (
    <>
      <section className="p-16 ">
        <BackBtn />

        <div className="flex justify-end p-3">
          <button onClick={()=>navigate('/create-tickets-form')}  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 cursor-pointer">
            Create Tickets
          </button>
        </div>

        <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
            <tr>
              <th className="py-4 px-5 text-left">ID</th>

              <th className="py-4 px-5 text-left">Title</th>
              <th className="py-4 px-5 text-left">Description</th>
              {/* <th className="py-4 px-5 text-left">Requester</th> */}
              <th className="py-4 px-5 text-left">Priority</th>
              <th className="py-4 px-5 text-left">Status</th>
              <th className="py-4 px-5 text-left whitespace-nowrap">
                Assigned To
              </th>
              <th className="py-4 px-5 text-left whitespace-nowrap">
                Start Date
              </th>
              {/* <th className="py-4 px-5 text-center">Actions</th> */}
            </tr>
          </thead>

          {tickets.length > 0 ? (
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => {
                return (
                  <tr key={ticket.id} className="hover:bg-gray-100 transition">
                    <td className="py-4 px-5 text-[14px]">{ticket.id}</td>
                    <td className="py-4 px-5 text-[14px]">{ticket.title}</td>
                    <td className="py-4 px-5 text-[14px]">
                      {ticket.description}
                    </td>
                    {/* <td className="py-4 px-5 font-medium">{ticket.createdBy}</td> */}
                    <td className="py-4 px-5">
                      <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                        <PriorityIcon
                          priority={ticket.priority.toLowerCase()}
                        />
                        <p>{ticket.priority}</p>
                      </div>
                    </td>
                    {/* // className={`block w-2 h-2 rounded-full ${statusClass(ticket.status.toLowerCase())}`}  */}

                    <td className="py-4 px-5">
                      <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                        <StatusIcon status={ticket.status.toLowerCase()} />
                        <p>{ticket.status}</p>
                      </div>
                    </td>
                    <td className="py-4 px-5 first-letter:uppercase">
                      {ticket.assignedTo
                        ? employees.find((emp) => emp.id === ticket.assignedTo)
                            ?.name
                        : "Unassigned"}
                    </td>
                    <td className="py-4 px-5 text-[14px]">
                      {ticket.startDate}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td
                  colSpan="9"
                  className="py-4 px-5 text-center text-gray-500  h-40"
                >
                  No tickets found
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </section>
    </>
  );
}
