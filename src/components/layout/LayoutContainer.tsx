
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SideBar from "../sidebar/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const LayoutContainer = () => {
    return (
        <Layout className="bg-main-bg">
          <Navbar />
          <Layout className="bg-main-bg">
          <Sider width={250} style={{ backgroundColor: 'transparent', padding: '30px 20px', marginLeft: '20px', position: 'fixed', top: 0 }}>
            <SideBar />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }} className="bg-main-bg ml-[270px]">
            <Content className="m-0 min-h-screen">
              <Outlet />
            </Content>
          </Layout>
          </Layout>
        </Layout>
      )
}

export default LayoutContainer

