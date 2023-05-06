import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../error-page";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
