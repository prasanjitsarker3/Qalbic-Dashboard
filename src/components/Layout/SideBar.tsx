/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { verifyToken } from "../../Utlis/verifyToken";
import { sidebarItemGenerator } from "../../Utlis/sidebarItemGeneartor";
import { superAdminRoutePaths } from "../../routes/superadmin.routes";
import { adminRoutePaths } from "../../routes/admin.routes";

const userRole = {
  SUPPER_ADMIN: "SUPPER_ADMIN",
  ADMIN: "ADMIN",
};

const SideBar = () => {
  const token = useAppSelector(useCurrentToken);
  console.log();
  let user;
  if (token) {
    user = verifyToken(token);
  }
  let sidebarItems;
  switch ((user as TUser)!.role) {
    case userRole.SUPPER_ADMIN:
      sidebarItems = sidebarItemGenerator(
        superAdminRoutePaths,
        userRole.SUPPER_ADMIN
      );
      break;
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminRoutePaths, userRole.ADMIN);
      break;
    default:
      break;
  }

  return (
    <div className="">
      <Sider
        style={{ borderRadius: "8px", height: "100vh" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div>
          <h1 className="text-center text-white font-semibold tracking-widest">
            <span className=" text-yellow-600">Q</span>ALBIC
          </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          className=" uppercase"
          // @ts-ignore
          items={sidebarItems}
          //   items={sidebarItemGenerator(facultyRoutePaths, "faculty")}
        />
      </Sider>
    </div>
  );
};

export default SideBar;
