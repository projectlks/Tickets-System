import PropTypes from "prop-types";

const PriorityIcon = ({ priority }) => {
  const priorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <span className={`block w-2 h-2 rounded-full ${priorityClass(priority)}`} />
  );
};

PriorityIcon.propTypes = {
  priority: PropTypes.string.isRequired,
};

export default PriorityIcon;
