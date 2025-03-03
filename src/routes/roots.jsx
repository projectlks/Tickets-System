import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import TicketsAssigment from "../pages/TicketsAssigment"; // Import the new component

import TasksList from "../pages/TasksList";
import TicketsDetail from "../pages/TicketsDetial";
import AccountsTable from "../pages/AccountsTable";
import CustomerTable from "../pages/CustomerTable";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true, // Set the default route
  },
  {
    path: "/admin-dashboard",
    element: <Dashboard />,
  
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/tickets-assignment",
    element: <TicketsAssigment />, // Add the new route
  },
  // {
  //   path: "/tickets-assignment-form",
  //   element: <TicketsAssignmentForm />, // Add the new route
  // },
  // {
  //   path: "/create-tickets-form",
  //   element: <CreateTicketForm />, // Add the new route
  // },
  
  {
    path: "/tasks-list",
    element: <TasksList />, // Add the new route
  },
  {
    path: "/tickets-detial",
    element: <TicketsDetail />, // Add the new route
  },
  {
    path: "/accounts-table",
    element: <AccountsTable />, // Add the new route

  },
  {
    path: "/customer-table",
    element: <CustomerTable />, // Add the new route

  },
  {
    path: "*",
    element: <div>404 Not Found</div>, // Add the error route
  },
 
]);

export default router;
