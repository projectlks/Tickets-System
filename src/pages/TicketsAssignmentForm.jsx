import PropTypes from "prop-types";

const TicketsAssignmentForm = ({
  setIsOpen,
  tickets,
  setTickets,
  ticketId,
}) => {
  const ticket = tickets.find((t) => t.id === ticketId); // Find the ticket by ID

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an updated ticket object with the form values
    const updatedTicket = {
      ...ticket,
      assignedTo: e.target.assigned_to.value,
      status: e.target.status.value,
      priority: e.target.priority.value,
    };

    // Update the tickets array with the updated ticket
    setTickets((prevTickets) =>
      prevTickets.map((t) => (t.id === ticketId ? updatedTicket : t))
    );

    setIsOpen(false); // Close the form
  };

  return (
    <section className="w-full h-screen fixed top-0 left-0 flex justify-center items-center">
      <span
        onClick={() => setIsOpen(false)}
        className="w-full h-full bg-black opacity-50 absolute top-0 left-0 z-40"
      ></span>

      <div className="p-6 z-50 relative bg-white shadow-md w-[450px] rounded-md backdrop-blur-md">
        {/* Close button */}
        <button
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-4">Assign Ticket</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          {/* Ticket ID */}
          <div className="relative">
            <label
              htmlFor="tickets_id"
              className="block text-sm font-medium text-gray-700"
            >
              Ticket ID
            </label>
            <input
              defaultValue={ticket.id || "123456"}
              type="text"
              id="tickets_id"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              readOnly
            />
          </div>

          {/* Assigned To */}
          <div className="relative">
            <label
              htmlFor="assigned_to"
              className="block text-sm font-medium text-gray-700"
            >
              Assigned to
            </label>
            <select
              id="assigned_to"
              name="assigned_to"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue={ticket.assignedTo || ""}
            >
              <option value="">Unassigned</option>
              <option value="employee_1">Employee 1</option>
              <option value="employee_2">Employee 2</option>
              {/* Add more options if needed */}
            </select>
          </div>

          {/* Status */}
          <div className="relative">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue={ticket.status || "Open"}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          {/* Priority */}
          <div className="relative">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue={ticket.priority || "Medium"}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

TicketsAssignmentForm.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  tickets: PropTypes.array.isRequired,
  setTickets: PropTypes.func.isRequired,
  ticketId: PropTypes.string.isRequired,
};

export default TicketsAssignmentForm;
