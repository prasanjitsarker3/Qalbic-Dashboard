import { Layout, theme, Button } from "antd";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { logOut } from "../../redux/features/auth/authSlice";
import SideBar from "./SideBar";
const { Header, Content } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <Layout
        style={{
          height: "100vh",
          paddingLeft: "6px",
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      >
        <SideBar />

        <Layout>
          <Header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px",
              marginBottom: "0px",
              marginTop: "0px",
              paddingTop: "0px",
              paddingBottom: "0px",
              background: "white",
              marginLeft: "14px",
              marginRight: "14px",
              borderRadius: "8px",
            }}
          >
            <p className="pl-2 text-lg">QALBIC</p>
            <Button
              type="primary"
              danger
              onClick={handleLogout}
              className="mr-4"
            >
              logout
            </Button>
          </Header>

          <Content style={{ margin: "14px 14px 0" }}>
            <div
              // className="  h-[100vh]"
              style={{
                // padding: 24,
                minHeight: "100%",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </div>
          </Content>
          {/* <Footer
            style={{ textAlign: "center", margin: "0px", padding: "0px" }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
