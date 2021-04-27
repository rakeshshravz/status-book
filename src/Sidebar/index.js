import React, { useState } from "react";
import { SidebarContainer, MenuBox, MenuIcon, MenuLabel } from "./style";
import DashboardIcon from "../Images/svg/DashboardIcon";
import StatusIcon from "../Images/svg/StatusIcon";
import TeamIcon from "../Images/svg/TeamIcon";
import CompanyIcon from "../Images/svg/CompanyIcon";

const menus = [
  {
    label: "Dashboard",
    key: "DASHBOARD",
    isActive: true,
    icon: "DashboardIcon",
  },
  {
    label: "Status",
    key: "STATUS",
    isActive: false,
    icon: "StatusIcon",
  },
  {
    label: "Team",
    key: "TEAM",
    isActive: false,
    icon: "TeamIcon",
  },
  {
    label: "Company",
    key: "COMPANY",
    isActive: false,
    icon: "CompanyIcon",
  },
];

const renderIcon = (icon) => {
  switch (icon) {
    case "DashboardIcon":
      return <DashboardIcon />;
    case "StatusIcon":
      return <StatusIcon />;
    case "TeamIcon":
      return <TeamIcon />;
    case "CompanyIcon":
      return <CompanyIcon />;
    default:
      return <DashboardIcon />;
  }
};

const Sidebar = () => {
  const [menuList, setMenuList] = useState(menus);

  const setActiveMenu = (menukey) => {
    const tempMenuList = menus.map((menu) => {
      if (menu.key === menukey) {
        return { ...menu, isActive: true };
      } else {
        return { ...menu, isActive: false };
      }
    });
    setMenuList(tempMenuList);
  };

  return (
    <SidebarContainer>
      {menuList.map((menu) => {
        return (
          <MenuBox
            isActive={menu.isActive}
            onClick={() => setActiveMenu(menu.key)}
          >
            <MenuIcon>{renderIcon(menu.icon)}</MenuIcon>
            <MenuLabel>{menu.label}</MenuLabel>
          </MenuBox>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
