import * as XLSX from "xlsx";
import PropTypes from "prop-types";

export default function ExcelDownloadBtn({ tickets, selectedTickets }) {
  const downloadSelectedTicketsAsExcel = () => {
    if (selectedTickets.length === 0) {
      alert("Please select at least one ticket to download.");
      return;
    }

    const selected = tickets.filter((ticket) =>
      selectedTickets.includes(ticket.id)
    );
    const worksheet = XLSX.utils.json_to_sheet(selected);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Selected Tickets");
    XLSX.writeFile(workbook, "selected_tickets.xlsx");
  };

  return (
    <>
      <i
        className="cursor-pointer bg-gray-200 hover:bg-indigo-100 hover:text-indigo-600 aspect-square w-[40px] h-auto p-2 rounded-md"
        onClick={downloadSelectedTicketsAsExcel}
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
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </i>
    </>
  );
}

ExcelDownloadBtn.propTypes = {
  tickets: PropTypes.array.isRequired,
  selectedTickets: PropTypes.array.isRequired,
};
