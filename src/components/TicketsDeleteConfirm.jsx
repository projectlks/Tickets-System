import PropTypes from "prop-types";

export default function TicketsDeleteConfirm({ ticketId, setIsDelete, handleDelete }) {
  return (
    <section className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-50">
      {/* Background Overlay */}
      <span
        onClick={() => setIsDelete(null)} // Close the modal
        className="w-full h-full bg-black opacity-40 absolute top-0 left-0"
      ></span>

      {/* Modal */}
      <div className="bg-white p-8 rounded-2xl shadow-lg z-50 w-[90%] sm:w-[450px] max-w-md">
        <h2 className="text-2xl font-bold text-gray-900">Confirm Deletion</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Are you sure you want to delete this ticket? This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={() => setIsDelete(null)} // Close without deleting
            className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleDelete(ticketId); // Perform deletion
              setIsDelete(null); // Close the modal
            }}
            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}

TicketsDeleteConfirm.propTypes = {
  ticketId: PropTypes.number.isRequired,
  setIsDelete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
