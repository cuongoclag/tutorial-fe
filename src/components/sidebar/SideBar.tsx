import { menu } from "../../data";
import Menu from "antd/es/menu";
const SideBar = () => {
  return (
    <>
      <div className="flex items-center font-bold gap-[10px]">
        <img src="/img/logo.svg" alt="" />
        <span>Tutorial Software</span>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
          backgroundColor: "transparent",
          marginTop: 25,
          borderTop: '1px solid #bfbfbf',
          paddingTop: 10
        }}
        items={menu}
      />
    </>
  );
};

export default SideBar;
