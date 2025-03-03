import { useMemo } from "react";

const usePriorityClass = (priority) => {
  return useMemo(() => {
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
  }, [priority]);
};

export default usePriorityClass;
