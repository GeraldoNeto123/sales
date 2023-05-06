import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../error-page";
import NewTransaction from "../pages/NewTransaction";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/transactions/new",
      element: <NewTransaction />
    },
  ]);

  return <RouterProvider router={router} />;
}
