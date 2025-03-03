import { useContext } from "react";
import { UserRowContext } from "../context/userRowContext";

const useRow = () => {
  const { userRow, setUserRow } = useContext(UserRowContext);

  return { userRow, setUserRow };
};

export default useRow;
