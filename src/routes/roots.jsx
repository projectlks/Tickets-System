import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import TicketsAssignment from "../pages/TicketsAssignment";
import TasksList from "../pages/TasksList";
import TicketsDetail from "../pages/TicketsDetail";
import AccountsTable from "../pages/AccountsTable";
import CustomerTable from "../pages/CustomerTable";
import SignUp from "../pages/SignUpForm";
import AgentDashBoard from "../components/AgentDashBoard";

const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  // Admin Routes (Inside Layout)
  {
    path: "/",
    element: <Layout />, // This wraps all admin pages with the sidebar
    children: [
      { path: "/agent-dashboard", element: <AgentDashBoard /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/tasks-list", element: <TasksList /> },
      { path: "/tickets-assignment", element: <TicketsAssignment /> },
      { path: "/tickets-detail", element: <TicketsDetail /> },
      { path: "/accounts-table", element: <AccountsTable /> },
      { path: "/customer-table", element: <CustomerTable /> },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
