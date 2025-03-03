import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/roots";
import {UserRowContextProvider} from "./context/userRowContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserRowContextProvider>
    <RouterProvider router={router} />
  </UserRowContextProvider>
);
