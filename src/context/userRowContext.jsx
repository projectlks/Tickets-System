import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserRowContext = createContext();

export function UserRowContextProvider({ children }) {
  const [userRow, setUserRow] = useState("developer");
  // customer
  //developer
  //admin
  return (
    <UserRowContext.Provider value={{ userRow, setUserRow }}>
      {children}
    </UserRowContext.Provider>
  );
}

UserRowContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserRowContext };
