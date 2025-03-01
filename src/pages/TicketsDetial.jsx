export default function TicketsDetail() {
  const ticket = {
    ticket_id: 1,
    title: "Fix Bug",
    description:
      "Fix the login bug on the authentication system. Users are unable to log in after updating the system.",
    category_id: 2,
    priority_id: 3,
    request_id: 4,
    email: "user@example.com",
    phone: "123-456-7890",
    department_id: 5,
    status: "Closed",
    assigned_to: "John Doe",
    created_date: "2023-09-25",
    updated_date: "2023-10-05",
    attachment: "https://example.com/attachment.pdf",
    tag: "Urgent",
    due_date: "2023-10-10",
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
            Ticket Details
          </h1>

          {/* Title & Status */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {ticket.title}
            </h2>
            <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {ticket.status}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 text-lg">{ticket.description}</p>
          </div>

          {/* Ticket Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-id-badge text-indigo-600"></i>
                <div>
                  <strong className="text-gray-600">Ticket ID:</strong>
                  <p className="text-gray-700">{ticket.ticket_id}</p>
                </div>
              </div>

              {/* <div className="flex items-center space-x-3">
              <i className="fas fa-user text-indigo-600"></i>
              <div>
                <strong className="text-gray-600">Assigned To:</strong>
                <p className="text-gray-700">{ticket.assigned_to}</p>
              </div>
            </div> */}

              <div className="flex items-center space-x-3">
                <i className="fas fa-priority-high text-indigo-600"></i>
                <div>
                  <strong className="text-gray-600">Priority:</strong>
                  <p className="text-gray-700">{ticket.priority_id}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <i className="fas fa-list text-indigo-600"></i>
                <div>
                  <strong className="text-gray-600">Category:</strong>
                  <p className="text-gray-700">{ticket.category_id}</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-indigo-600"></i>
                <div>
                  <strong className="text-gray-600">Requester Email:</strong>
                  <p className="text-gray-700">{ticket.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-indigo-600"></i>
                <div>
                  <strong className="text-gray-600">Requester Phone:</strong>
                  <p className="text-gray-700">{ticket.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <i className="fas fa-building text-indigo-600"></i>
                <div>
                  <strong className="text-gray-600">Department:</strong>
                  <p className="text-gray-700">{ticket.department_id}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <i className="fas fa-tag text-indigo-600"></i>
                <div>
                  <strong className="text-gray-600">Tags:</strong>
                  <p className="text-gray-700">{ticket.tag}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Date Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <strong className="text-gray-600">Created Date:</strong>
              <p className="text-gray-700">
                {new Date(ticket.created_date).toLocaleDateString()}
              </p>
            </div>
            <div>
              <strong className="text-gray-600">Updated Date:</strong>
              <p className="text-gray-700">
                {new Date(ticket.updated_date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Due Date */}
          <div className="mb-6">
            <strong className="text-gray-600">Due Date:</strong>
            <p className="text-gray-700">
              {new Date(ticket.due_date).toLocaleDateString()}
            </p>
          </div>

          {/* Attachment */}
          <div className="mb-6">
            <strong className="text-gray-600">Attachment:</strong>
            {ticket.attachment ? (
              <a
                href={ticket.attachment}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                View Attachment
              </a>
            ) : (
              <p className="text-gray-600">No Attachment</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 w-full md:w-auto flex items-center justify-center space-x-2">
              <span>Edit Ticket</span>
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
          </div>
        </div>
      </div>

      <select
        id="role"
        name="role"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        required
      >
        <option value="customer">Customer</option>
        <option value="developer">Developer</option>
        <option value="admin">Admin</option>
      </select>
    </>
  );
}
