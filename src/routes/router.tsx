import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import { routeGenerator } from "../Utlis/routeGenerator";
import ProtectedRoute from "../components/Layout/ProtectedRoute";
import { superAdminRoutePaths } from "./superadmin.routes";
import { adminRoutePaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "SUPPER_ADMIN",
    element: (
      <ProtectedRoute role="SUPPER_ADMIN">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(superAdminRoutePaths),
  },
  {
    path: "ADMIN",
    element: (
      <ProtectedRoute role="ADMIN">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminRoutePaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
