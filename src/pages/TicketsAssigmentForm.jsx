import PropTypes from "prop-types";

const TicketsAssignmentForm = ({ setIsOpen, ticketId, agentId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setIsOpen(false);  // Close the form after submission
  };

  return (
    <section className="w-full h-screen fixed top-0 left-0 flex justify-center items-center">
      <span className="w-full h-full bg-black opacity-50 absolute top-0 left-0 z-[1]"></span>

      <div className="p-6 z-[2] relative bg-white shadow-md w-[450px] rounded-md backdrop-blur-md">
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
              defaultValue={ticketId || "123456"}
              type="text"
              id="tickets_id"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              readOnly
            />
          </div>

          {/* Agent ID */}
          <div className="relative">
            <label
              htmlFor="agent_id"
              className="block text-sm font-medium text-gray-700"
            >
              Agent ID
            </label>
            <input
              defaultValue={agentId || "123456"}
              type="text"
              id="agent_id"
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
            >
              <option value="employee_1">Employee 1</option>
              <option value="employee_2">Employee 2</option>
            </select>
          </div>

          {/* Priority Selection */}
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
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Status Selection */}
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
            >
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Assign
          </button>
        </form>
      </div>
    </section>
  );
};

// Prop validation using PropTypes
TicketsAssignmentForm.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  ticketId: PropTypes.string,
  agentId: PropTypes.string,
};

export default TicketsAssignmentForm;
