import { createBrowserRouter, RouterProvider } from "react-router";
import CaseListPage from "@presentation/pages/CaseListPage";
import CaseDetailPage from "@presentation/pages/CaseDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CaseListPage />,
  },
  {
    path: "/case/:id",
    element: <CaseDetailPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
