import SuperAdminDashboard from "../pages/DashboardMeta/SuperAdminDashboard";

export const superAdminRoutePaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <SuperAdminDashboard />,
  },
  // {
  //   name: "ProductInfo",
  //   children: [
  //     {
  //       name: "New Product",
  //       path: "create-bike",
  //       element: <CreateBike />,
  //     },
  //   ],
  // },
  // {
  //   name: "Sales Management",
  //   children: [
  //     {
  //       name: "Bike History",
  //       path: "total-history",
  //       element: <BikeTotalSaleHistory />,
  //     },
  //   ],
  // },
  // {
  //   path: "editAndDuplicated/:id",
  //   element: <EditAndDuplicate />,
  // },
];
