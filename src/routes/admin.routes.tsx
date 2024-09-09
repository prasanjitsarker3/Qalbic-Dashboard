import Category from "../AdminRoutesPage/Category/Category";
import CreateNewProduct from "../AdminRoutesPage/Products/CreateNewProduct";
import ProductInformation from "../AdminRoutesPage/Products/ProductInformation";
import UpdateProduct from "../AdminRoutesPage/Products/UpdateProduct";
import ViewProduct from "../AdminRoutesPage/Products/ViewProduct";
import AdminDashboard from "../pages/DashboardMeta/AdminDashboard";

export const adminRoutePaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Category",
    path: "category",
    element: <Category />,
  },
  {
    name: "Products",
    path: "product",
    element: <ProductInformation />,
  },
  {
    path: "createProduct",
    element: <CreateNewProduct />,
  },
  {
    path: "product/:id",
    element: <ViewProduct />,
  },
  {
    path: "update/:id",
    element: <UpdateProduct />,
  },
];
