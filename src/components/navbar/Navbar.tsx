import {
  SettingOutlined,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Popover } from "antd";
import { useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate()
  const profile = useAppSelector((state: any) => state.auth.profile)

  const logout = () => {
    localStorage.clear
    navigate('/login')
    toast.success('Đăng xuất thành công')
  }

  const content = (
    <p onClick={logout} className="cursor-pointer">Đăng xuất</p>
  )

  return (
    <div className="px-[40px] py-[10px] ml-[250px] flex justify-between items-center">
      <Breadcrumb style={{ margin: "16px 0" }} items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} />
      <div className="flex items-center gap-[20px]">
        <SearchOutlined />
        <div className="relative flex">
          <BellOutlined />
          <span className="bg-red-500 text-white w-[16px] h-[16px] rounded-[50%] absolute top-[-10px] right-[-10px] flex items-center justify-center text-[12px]">
            1
          </span>
        </div>
        <Popover className="flex items-center gap-[10px] cursor-pointer" placement="bottomRight" trigger="click" content={content}>
          <img
            src=""
            alt=""
            className="w-[26px] h-[26px] rounded-[50%] object-cover"
          />
          <span>{profile?.firstName}</span>
        </Popover>
        <SettingOutlined />
      </div>
    </div>
  );
};

export default Navbar;
