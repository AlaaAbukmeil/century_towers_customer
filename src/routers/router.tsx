import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/errorPage";
import Dashboard from "../components/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  }
]);

export default router;
