import PropTypes from "prop-types";

export default function StatusIcon({ status }) {
  const statusClass = (status) => {
    switch (status.toLowerCase()) {
        case "open":
          return "bg-blue-500";
        case "pending":
          return "bg-yellow-500";
        case "resolved":
          return "bg-green-500";
        case "closed":
          return "bg-gray-500";
        default:
          return "bg-gray-500";
      }
      
  };

  return <span className={`block w-2 h-2 rounded-full ${statusClass(status)}`} />;
}

StatusIcon.propTypes = {
  status: PropTypes.string.isRequired,
};
