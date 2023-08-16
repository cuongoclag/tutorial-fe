import { AdminMenu } from "../../data";
import Menu, { MenuProps } from "antd/es/menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import { useEffect, useState } from "react";
const SideBar = () => {
  const navigate = useNavigate()
  const profile = useAppSelector((state: any) => state.auth.profile)
  const location = useLocation()
  const [menu, setMenu] = useState<MenuProps['items']>([])


  useEffect(() => {
    if (profile.role.roleName === 'admin') {
      setMenu(AdminMenu)
    } else {
      navigate('/login')
    }
  }, [profile])
  
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }
  return (
    <>
      <div className="flex items-center font-bold gap-[10px]">
        <img src="/img/logo.svg" alt="" />
        <span>Tutorial Software</span>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[`${location.pathname}`]}
        style={{
          height: "100%",
          borderRight: 0,
          backgroundColor: "transparent",
          marginTop: 25,
          borderTop: '1px solid #bfbfbf',
          paddingTop: 10
        }}
        items={menu}
        onClick={onClick}
      />
    </>
  );
};

export default SideBar;
