export default function AccountsTable() {
    const accounts = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 3, name: "Alice Brown", email: "alice@example.com" },
    ];
  
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Accounts Table</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id}>
                <td className="border border-gray-300 p-2">{account.id}</td>
                <td className="border border-gray-300 p-2">{account.name}</td>
                <td className="border border-gray-300 p-2">{account.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  