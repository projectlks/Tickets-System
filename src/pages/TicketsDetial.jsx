import BackBtn from "../components/BackBtn";

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
      <BackBtn />
      <div className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl p-10">
          <h1 className="text-4xl font-semibold text-indigo-700 text-center mb-8">
            Ticket Details
          </h1>

          {/* Title & Status */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {ticket.title}
            </h2>
            <span className="bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium">
              {ticket.status}
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 text-lg">{ticket.description}</p>
          </div>

          {/* Ticket Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div>
                  <strong className="text-gray-600">Ticket ID:</strong>
                  <p className="text-gray-700">{ticket.ticket_id}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <strong className="text-gray-600">Priority:</strong>
                  <p className="text-gray-700">{ticket.priority_id}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <strong className="text-gray-600">Category:</strong>
                  <p className="text-gray-700">{ticket.category_id}</p>
                </div>
              </div>


              <div className="flex items-center space-x-3">
                <div>
                  <strong className="text-gray-600">Tags:</strong>
                  <p className="text-gray-700">{ticket.tag}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div>
                  <strong className="text-gray-600">Requester Email:</strong>
                  <p className="text-gray-700">{ticket.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <strong className="text-gray-600">Requester Phone:</strong>
                  <p className="text-gray-700">{ticket.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <strong className="text-gray-600">Department:</strong>
                  <p className="text-gray-700">{ticket.department_id}</p>
                </div>
              </div>

             
            </div>
          </div>

          {/* Date Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
          <div className="mb-8">
            <strong className="text-gray-600">Due Date:</strong>
            <p className="text-gray-700">
              {new Date(ticket.due_date).toLocaleDateString()}
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 flex justify-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Ticket Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
