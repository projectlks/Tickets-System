import { useState } from "react";
import BackBtn from "../components/BackBtn";
import CreateAccountForm from "./CreateAccountForm";

// Sample accounts data
const initialAccounts = [
  { id: 1, name: "John Doe", email: "john@example.com", row: "customer" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", row: "customer" },
  { id: 3, name: "Alice Brown", email: "alice@example.com", row: "customer" },
];

export default function AccountsTable() {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [isShow, setIsShow] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);

  // Handle Add Account button click
  const handleAddAccount = () => {
    setIsShow(true);
  };

  // Handle Edit button click
  const handleEditAccount = (account) => {
    setEditingAccount(account);
    setIsShow(true);
  };

  // Handle Delete button click
  const handleDeleteAccount = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  // Handle Close Form button click
  const handleCloseForm = () => {
    setIsShow(false);
    setEditingAccount(null); // Reset editing account on close
  };

  return (
    <>
      <BackBtn />
      <div className="flex justify-between items-center p-10">
        <h1 className="text-3xl font-bold">Accounts</h1>
        <button
          onClick={handleAddAccount}
          className="flex items-center bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-600"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Account
        </button>
      </div>

      <div className="px-6 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["ID", "Name", "Email", "Row", "Actions"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {accounts.map((account) => (
              <tr key={account.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-sm">{account.id}</td>
                <td className="px-6 py-4 text-sm">{account.name}</td>
                <td className="px-6 py-4 text-sm">{account.email}</td>
                <td className="px-6 py-4 text-sm">{account.row}</td>
                <td className="px-6 py-4 text-sm flex space-x-3">
                  <button
                    onClick={() => handleEditAccount(account)}
                    className="cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAccount(account.id)}
                    className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isShow && (
        <CreateAccountForm
          setIsShow={setIsShow}
          handleCloseForm={handleCloseForm}
          editingAccount={editingAccount}
          setAccounts={setAccounts}
        />
      )}
    </>
  );
}
