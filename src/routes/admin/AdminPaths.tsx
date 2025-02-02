import AdminLayout from "../../components/layout/AdminLayout";
import ManageOrders from "../../pages/admin/ManageOrders";
import ManageProducts from "../../pages/admin/ManageProducts";
import ManageUsers from "../../pages/admin/ManageUsers";
import Profile from "../../pages/coustomer/Profile";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "",
    element: <AdminLayout />,
    children: [
      {
        name: "Manage Orders",
        path: "manage-orders",
        element: <ManageOrders />,
      },
      {
        name: "Manage Products",
        path: "manage-products",
        element: <ManageProducts/>,
      },
      {
        name: "Manage Users",
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        name: "Profile",
        path: "profile",
        element: <Profile />,
      },
    ],
  },
 
];
