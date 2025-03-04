import { useState } from "react";

import SortBtn from "../components/SortBtn"; // Import SortBtn
import SearchBox from "../components/SearchBox"; // Import SearchBox
import FilterBtn from "../components/FilterBtn"; // Import FilterBtn
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
      assignedTo: null,
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
  const [endIndex, setEndIndex] = useState(2);

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  const sortTickets = (criteria) => {
    const filteredTickets = tickets.filter((ticket) => ticket.id !== null); // Filter out deleted tickets
    const sortedTickets = [...filteredTickets].sort((a, b) => {
      if (criteria === "priority") {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return a[criteria] < b[criteria] ? -1 : a[criteria] > b[criteria] ? 1 : 0;
    });
    setTickets(sortedTickets);
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

  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto overflow-hidden mt-5 w-full p-8">
        {/* Search Box */}
        <div className="flex justify-end items-center mb-3">
          <SearchBox setTickets={setTickets} tickets={tickets} />
        </div>

        {/* Header & Action Buttons */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Ticket Management</h1>
          <div className="flex space-x-4">
            <SortBtn sortTickets={sortTickets} /> {/* Sort Button */}
            <FilterBtn filterTickets={filterTickets} /> {/* Filter Button */}
            <ExcelDownloadBtn tickets={tickets} selectedTickets={selectedTickets} /> {/* Excel Download */}
          </div>
        </div>

        {/* Table Container */}
        <div className="  overflow-auto ">
          <TicketsTable
            tickets={tickets}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
            handleCheckboxChange={handleCheckboxChange}
            setTickets={setTickets}
            filterBy={filterBy}
            startIndex={startIndex}
            endIndex={endIndex}
          />
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex w-full justify-center h-fit mb-32 items-center space-x-4 mt-4">
        {/* Previous Button */}
        <i
          onClick={() => {
            if (startIndex === 0) return;
            setStartIndex(startIndex - 2);
            setEndIndex(endIndex - 2);
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

        {/* Next Button */}
        <i
          onClick={() => {
            if (endIndex >= tickets.length) return;
            setStartIndex(startIndex + 2);
            setEndIndex(endIndex + 2);
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
