import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserRowContext = createContext();

export function UserRowContextProvider({ children }) {
  const [userRow, setUserRow] = useState("customer");
  // customer
  //developer
  return (
    <UserRowContext.Provider value={{ userRow, setUserRow }}>
      {children}
    </UserRowContext.Provider>
  );
}

UserRowContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
