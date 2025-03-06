import { useState } from "react";
import SearchBox from "../components/SearchBox";
import SortBtn from "../components/SortBtn";
import FilterBtn from "../components/FilterBtn";
import ExcelDownloadBtn from "../components/ExcelDownloadBtn";
import TicketsTable from "../components/TicketsTable";

export default function TicketsAssignment() {
  const initialTickets = [
    {
      id: 1,
      title: "Fix login issue",
      description: "Users are unable to log in with their credentials.",
      priority: "High",
      status: "open",
      assignedTo: null,
      createdBy: "John Doe",
      startDate: "2023-10-01",
    },
    {
      id: 2,
      title: "Update dashboard UI",
      description: "Revamp the UI to align with the new design system.",
      priority: "Medium",
      status: "closed",
      assignedTo: "John",
      createdBy: "Jane Smith",
      startDate: "2023-10-02",
    },
    {
      id: 3,
      title: "Resolve payment gateway error",
      description: "Payment transactions are failing intermittently.",
      priority: "Low",
      status: "pending",
      assignedTo: null,
      createdBy: "Alice Johnson",
      startDate: "2023-10-03",
    },
  ];

  const [tickets, setTickets] = useState(initialTickets);
  const [filterBy, setFilterBy] = useState("");
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const pageSize = 2;

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  const sortTickets = (criteria) => {
    setTickets((prevTickets) => {
      const sortedTickets = [...prevTickets].sort((a, b) => {
        if (criteria === "priority") {
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        return a[criteria] < b[criteria]
          ? -1
          : a[criteria] > b[criteria]
          ? 1
          : 0;
      });
      return sortedTickets;
    });
  };

  const filterTickets = (criteria) => {
    setFilterBy(criteria);
  };

  const handleCheckboxChange = (ticketId) => {
    setSelectedTickets((prevSelected) =>
      prevSelected.includes(ticketId)
        ? prevSelected.filter((id) => id !== ticketId)
        : [...prevSelected, ticketId]
    );
  };

  const filteredTickets = tickets.filter((ticket) => {
    if (filterBy === "Unassigned") return ticket.assignedTo === null;
    if (filterBy !== "") return ticket.priority === filterBy;
    return true;
  });

  const paginatedData = filteredTickets.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="w-full ">
      <div className="mx-auto  mt-10 w-full p-8">
        <div className="flex justify-end items-center mb-3">
          <SearchBox setTickets={setTickets} tickets={tickets} />
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Ticket Management
          </h1>
          <div className="flex space-x-4">
            <SortBtn sortTickets={sortTickets} />
            <FilterBtn filterTickets={filterTickets} filterBy={filterBy} />
            <ExcelDownloadBtn
              tickets={tickets}
              selectedTickets={selectedTickets}
            />
          </div>
        </div>

        <div className="overflow-auto">
          <TicketsTable
            tickets={tickets}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
            handleCheckboxChange={handleCheckboxChange}
            setTickets={setTickets}
            data={paginatedData}
          />
        </div>
      </div>

      <div className="flex w-full justify-center h-fit mb-32 items-center space-x-4 mt-4">
        <i
          onClick={() => {
            if (startIndex === 0) return;
            setStartIndex((prev) => Math.max(prev - pageSize, 0));
          }}
          className="cursor-pointer bg-gray-200 hover:bg-indigo-100 hover:text-indigo-600 aspect-square w-[40px] h-auto p-2 rounded-md"
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
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </i>

        <i
          onClick={() => {
            if (startIndex + pageSize >= filteredTickets.length) return;
            setStartIndex((prev) => prev + pageSize);
          }}
          className="cursor-pointer bg-gray-200 hover:bg-indigo-100 hover:text-indigo-600 aspect-square w-[40px] h-auto p-2 rounded-md"
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
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </i>
      </div>
    </div>
  );
}
