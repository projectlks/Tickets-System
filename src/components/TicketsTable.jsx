import PropTypes from "prop-types";
import { useState } from "react";
import TicketsAssignmentForm from "../pages/TicketsAssignmentForm";

import PriorityIcon from "./PriorityIcon";
import StatusIcon from "./StatusIcon";
import TicketsDeleteConfirm from "./TicketsDeleteConfirm";

export default function TicketsTable({
  setSelectedTickets,
  selectedTickets,
  tickets,
  setTickets,
  filterBy,
  startIndex,
  endIndex,
}) {
  const [isOpen, setIsOpen] = useState(null);
  const [isDelete, setIsDelete] = useState(null); // Updated state to hold ticket ID

  const handleCheckboxChange = (id) => {
    setSelectedTickets((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((ticketId) => ticketId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = (ticketId) => {
    // Filter out the ticket by ID
    setTickets((prevTickets) =>
      prevTickets.filter((ticket) => ticket.id !== ticketId)
    );
    setIsDelete(null); // Reset the delete confirmation
  };

  return (
    <>
      <table className="border w-full border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
          <tr>
            <th>
              <input
                className="cursor-pointer w-7"
                type="checkbox"
                onChange={(e) =>
                  setSelectedTickets(
                    e.target.checked ? tickets.map((t) => t.id) : []
                  )
                }
                checked={
                  tickets.length !== 0 &&
                  selectedTickets.length === tickets.length
                }
              />
            </th>
            <th className="py-4 px-5 text-left">Title</th>
            <th className="py-4 px-5 text-left">Description</th>
            <th className="py-4 px-5 text-left">Requester</th>
            <th className="py-4 px-5 text-left">Priority</th>
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

        {tickets.length > 0 ? (
          <tbody className="divide-y divide-gray-200">
            {(filterBy !== ""
              ? tickets.filter((item) => item.priority === filterBy)
              : tickets
            )
              .slice(startIndex, endIndex)
              .map((ticket) => {
                return (
                  <tr key={ticket.id} className="hover:bg-gray-100 transition">
                    <td className="py-4 px-5 text-[14px]">
                      <input
                        type="checkbox"
                        checked={selectedTickets.includes(ticket.id)}
                        onChange={() => handleCheckboxChange(ticket.id)}
                      />
                    </td>
                    <td className="py-4 px-5 text-[14px]">{ticket.title}</td>
                    <td className="py-4 px-5 text-[14px]">
                      {ticket.description}
                    </td>
                    <td className="py-4 px-5 font-medium">
                      {ticket.createdBy}
                    </td>
                    <td className="py-4 px-5">
                      <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                        <PriorityIcon
                          priority={ticket.priority.toLowerCase()}
                        />
                        <p>{ticket.priority}</p>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <div className="text-gray-950 items-center space-x-2 flex px-4 py-2 rounded-full text-sm font-semibold">
                        <StatusIcon status={ticket.status.toLowerCase()} />
                        <p className="whitespace-nowrap">{ticket.status}</p>
                      </div>
                    </td>
                    <td className="py-4 px-5 first-letter:uppercase">
                      {ticket.assignedTo ? ticket.assignedTo : "Unassigned"}
                    </td>
                    <td className="py-4 px-5 text-[14px]">
                      {ticket.startDate}
                    </td>
                    <td className=" ">
                      <div className="text-[14px] flex py-4 px-5 h-full items-center space-x-3">
                        {/* Edit Button */}
                        <button
                          onClick={() => setIsOpen(ticket)}
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

                        {/* Delete Button */}
                        <button
                          onClick={() => setIsDelete(ticket.id)}
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
                );
              })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td
                colSpan="9"
                className="py-4 px-5 text-center text-gray-500 h-40"
              >
                No tickets found
              </td>
            </tr>
          </tbody>
        )}
      </table>

      {isDelete && (
        <TicketsDeleteConfirm
          ticketId={isDelete}
          setIsDelete={setIsDelete}
          handleDelete={handleDelete}
        />
      )}


      {isOpen && (
        <TicketsAssignmentForm
          setIsOpen={setIsOpen}
          tickets={tickets} // Pass the tickets array
          setTickets={setTickets} // Pass the setTickets function
          ticketId={isOpen.id} // Pass the ticketId (you can use `isOpen` to get the selected ticket)
        />
      )}
    </>
  );
}

TicketsTable.propTypes = {
  setSelectedTickets: PropTypes.func.isRequired,
  selectedTickets: PropTypes.array.isRequired,
  tickets: PropTypes.array.isRequired,
  setTickets: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
  employees: PropTypes.array.isRequired,
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,
};
