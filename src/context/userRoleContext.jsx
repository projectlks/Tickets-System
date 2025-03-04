import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserRoleContext = createContext();

export function UserRoleContextProvider({ children }) {
  const [userRole, setUserRole] = useState("Administrator");
  // Administrator
  // SuperVisor
  // Agent
  // Customer

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}

UserRoleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserRoleContext };
