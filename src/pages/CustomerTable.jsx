import StatusIcon from "../components/StatusIcon";
import { useState } from "react";
import CreateTicketForm from "./CreateTicketForm";

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
    ticketRegisterID: "1023001",
    images: [],
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
    ticketRegisterID: "1023002",
    images: [],
  },
];

const employees = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Brown" },
];

export default function CustomerTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(tickets);
  const [deleteId, setDeleteID] = useState(null);
  const [isEdit, setIsEdit] = useState(null);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.ticketRegisterID !== id));
  };

  const handleCreateTicket = (newTicket) => {
    setData((prevData) => [...prevData, newTicket]);
  };

  const handleEditTicket = (editedTicket) => {
    setData((prevData) =>
      prevData.map((ticket) =>
        ticket.ticketRegisterID === editedTicket.ticketRegisterID
          ? editedTicket
          : ticket
      )
    );
  };

  return (
    <>
      <section className="p-16">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Total Tickets: {data.length}
          </h1>
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer flex h-fit space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md"
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
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>Create Ticket</p>
          </button>
        </div>
        <div className="w-full overflow-auto ">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
              <tr>
                <th className="py-4 px-5 text-left">ID</th>
                <th className="py-4 px-5 text-left">Title</th>
                <th className="py-4 px-5 text-left">Description</th>
                <th className="py-4 px-5 text-left">Status</th>
                <th className="py-4 px-5 text-left whitespace-nowrap">
                  Assigned To
                </th>
                <th className="py-4 px-5 text-left whitespace-nowrap">
                  Start Date
                </th>
                <th className="py-4 px-5 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.length > 0 ? (
                data.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-100 transition">
                    <td className="py-4 px-5 text-[14px]">
                      {ticket.ticketRegisterID}
                    </td>
                    <td className="py-4 px-5 text-[14px]">{ticket.title}</td>
                    <td className="py-4 px-5 text-[14px]">
                      {ticket.description}
                    </td>
                    <td className="py-4 px-5">
                      <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                        <StatusIcon status={ticket.status.toLowerCase()} />
                        <p className="whitespace-nowrap">{ticket.status}</p>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      {employees.find((emp) => emp.id === ticket.assignedTo)
                        ?.name || "Unassigned"}
                    </td>
                    <td className="py-4 px-5 text-[14px] whitespace-nowrap">
                      {ticket.startDate}
                    </td>

                    {/* btn */}
                    <td className="py-4 px-5  ">
                      <div className="flex justify-center space-x-3">
                        {/* edit button */}
                        <button
                          onClick={() => {
                            setIsEdit(ticket.ticketRegisterID);
                            setIsOpen(true);
                          }}
                          className="cursor-pointer flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        >
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
                        {/* delete btn */}
                        <button
                          onClick={() => setDeleteID(ticket.ticketRegisterID)}
                          className="cursor-pointer flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition"
                        >
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="py-4 px-5 text-center text-gray-500 h-40"
                  >
                    No tickets found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {isOpen && (
        <CreateTicketForm
          setIsOpen={setIsOpen}
          setData={setData}
          data={data}
          isEdit={isEdit}
          handleCreateTicket={handleCreateTicket}
          handleEditTicket={handleEditTicket}
          setIsEdit={setIsEdit}
        />
      )}

      {deleteId && (
        <section className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-50">
          {/* Background Overlay */}
          <span
            onClick={() => setDeleteID(null)}
            className="w-full h-full bg-black opacity-40 absolute top-0 left-0"
          ></span>

          {/* Modal */}
          <div className="bg-white p-8 rounded-2xl shadow-lg z-50 w-[90%] sm:w-[450px] max-w-md">
            <h2 className="text-2xl font-bold text-gray-900">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Are you sure you want to delete this ticket? This action cannot be
              undone.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setDeleteID(null)}
                className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(deleteId);
                  setDeleteID(null);
                }}
                className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
