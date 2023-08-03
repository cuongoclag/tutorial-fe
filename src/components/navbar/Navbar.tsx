import {
  SettingOutlined,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";

const Navbar = () => {
  return (
    <div className="px-[40px] py-[10px] ml-[250px] flex justify-between items-center">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex items-center gap-[20px]">
        <SearchOutlined />
        <div className="relative flex">
          <BellOutlined />
          <span className="bg-red-500 text-white w-[16px] h-[16px] rounded-[50%] absolute top-[-10px] right-[-10px] flex items-center justify-center text-[12px]">
            1
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <img
            src=""
            alt=""
            className="w-[26px] h-[26px] rounded-[50%] object-cover"
          />
          <span>Jane</span>
        </div>
        <SettingOutlined />
      </div>
    </div>
  );
};

export default Navbar;
