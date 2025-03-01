import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function SearchBox({ setTickets, tickets }) {
  const [searchWords, setSearchWords] = useState("");
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    setNewArray([...tickets]);
  }, []);

  useEffect(() => {
    if (searchWords === "") {
      setTickets(newArray);
    } else {
      const searchText = searchWords.toLowerCase().trim();
      setTickets(
        newArray.filter((ticket) =>
          ticket.title.toLowerCase().includes(searchText)
        )
      );
    }
  }, [searchWords, setTickets, newArray]);

  const updateArray = (searchText) => {
    setTickets(
      newArray.filter((ticket) =>
        ticket.title.toLowerCase().includes(searchText)
      )
    );
  };

  return (
    <div className="relative">
      <i className={`absolute transform top-1/2 -translate-y-1/2 left-3 ${searchWords ? 'text-indigo-600' : 'text-[#ACB2B1]'}`}>
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </i>

      <input
        value={searchWords}
        onChange={(e) => {
          setSearchWords(e.target.value);
          updateArray(e.target.value.toLowerCase().trim());
        }}
        type="text"
        placeholder="Search by Title"
        className="parent block w-[400px] px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
}

SearchBox.propTypes = {
  setTickets: PropTypes.func.isRequired,
  tickets: PropTypes.array.isRequired,
};
