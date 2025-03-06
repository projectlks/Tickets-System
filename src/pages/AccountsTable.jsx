import CreateAccountForm from "./CreateAccountForm";
import { useState } from "react";
import useRole from "../hooks/useRole";

export default function AccountsTable() {
  const [isShow, setIsShow] = useState(false);
  const [editAccount, setEditAccount] = useState(null);
  const [deleteId, setDeleteID] = useState(null);

  const accounts = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Developer" },
    {
      id: 3,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Customer",
    },
  ];

  const [data, setData] = useState(accounts);
  const { userRole } = useRole();

  const handleDelete = (id) => {
    setData(data.filter((account) => account.id !== id));
  };

  const handleEdit = (account) => {
    setEditAccount(account);
    setIsShow(true);
  };

  return (
    <>
      <div className="p-16">
        <div className="flex justify-between mb-3">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Total Accounts : {data.length}
          </h2>
          <button
            onClick={() => {
              setEditAccount(null); // Reset editAccount for adding a new account
              setIsShow(true);
            }}
            className="cursor-pointer flex h-fit  space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md"
          >
            <i>
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
            </i>
            <p>Add Account</p>
          </button>
        </div>
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
            <tr>
              <th className="py-4 px-5 text-left">ID</th>
              <th className="py-4 px-5 text-left">Name</th>
              <th className="py-4 px-5 text-left">Email</th>
              <th className="py-4 px-5 text-left">Role</th>
              <th className="py-4 px-5 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((account) => (
              <tr key={account.id} className="hover:bg-gray-100 transition">
                <td className="py-4 px-5 text-[14px]">{account.id}</td>
                <td className="py-4 px-5 text-[14px]">{account.name}</td>
                <td className="py-4 px-5 text-[14px]">{account.email}</td>
                <td className="py-4 px-5 text-[14px]">{account.role}</td>
                <td className="py-4 px-5 text-[14px] flex items-center space-x-3">
                  <button
                    onClick={() => handleEdit(account)}
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

                  {userRole === "Administrator" && (
                    <button
                      onClick={() => setDeleteID(account.id)}
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
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isShow && (
        <CreateAccountForm
          setIsShow={setIsShow}
          setData={setData}
          editMode={!!editAccount}
          existingData={editAccount}
        />
      )}

      {deleteId && (
        <section className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-50">
          <span
            onClick={() => setDeleteID(null)}
            className="w-full h-full bg-black opacity-40 absolute top-0 left-0"
          ></span>
          <div className="bg-white p-8 rounded-2xl shadow-lg z-50 w-[90%] sm:w-[450px] max-w-md">
            <h2 className="text-2xl font-bold text-gray-900">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Are you sure you want to delete this account? This action cannot
              be undone.
            </p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setDeleteID(null)}
                className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(deleteId);
                  setDeleteID(null);
                }}
                className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
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
