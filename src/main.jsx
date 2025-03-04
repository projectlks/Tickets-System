import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/roots";
import {UserRoleContextProvider} from "./context/userRoleContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserRoleContextProvider>
    <RouterProvider router={router} />
  </UserRoleContextProvider>
);
