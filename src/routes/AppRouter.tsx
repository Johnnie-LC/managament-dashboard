import { createBrowserRouter, RouterProvider } from "react-router";
import CaseListPage from "@presentation/pages/CaseListPage";
import CaseDetailPage from "@presentation/pages/CaseDetailPage";
import RootLayout from "@presentation/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CaseListPage />,
      },
      {
        path: "case/:id",
        element: <CaseDetailPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
