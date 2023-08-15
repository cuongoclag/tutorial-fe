import { menu } from "../../data";
import Menu, { MenuProps } from "antd/es/menu";
import { useLocation, useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation();

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
