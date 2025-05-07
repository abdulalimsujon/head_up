import MainLayout from "@/layouts/MainLayout";
import ClientPage from "@/pages/ClientPage";
import EquipmentPage from "@/pages/EquipmentPage";
import GalleryPage from "@/pages/galleryPage";
import HomePage from "@/pages/HomePage";
// import SignIn from "@/pages/SignIn";

import { createBrowserRouter } from "react-router-dom";
// import AdminPrivateRoute from "./AdminPrivateRoute";
// import AdminDashboard from "@/pages/Admin/AdaminDashboard";
// import PackageTable from "@/pages/Admin/packageTable";
// import Payment from "@/pages/payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "equipment",
        element: <EquipmentPage />,
      },
      {
        path: "client",
        element: <ClientPage></ClientPage>,
      },

      // {
      //   path: "signup",
      //   element: <SignUpPage />,
      // },
      // {
      //   path: "payment",
      //   element: <Payment />,
      // },
      // {
      //   element: <AdminPrivateRoute />,
      //   children: [
      //     {
      //       path: "dashboard",
      //       element: <AdminDashboard />,
      //       children: [
      //         {
      //           path: "/dashboard/packages",
      //           element: <PackageTable />,
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
]);

export default router;
