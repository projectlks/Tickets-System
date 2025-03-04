import { useContext } from "react";
import { UserRoleContext } from "../context/userRoleContext";

const useRow = () => {
  const { userRole, setUserRole } = useContext(UserRoleContext);

  return { userRole, setUserRole };
};

export default useRow;
