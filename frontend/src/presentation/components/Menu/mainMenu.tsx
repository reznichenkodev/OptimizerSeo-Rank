import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: (
      <a href="./meta" target="_self" rel="noopener noreferrer">
        Meta
      </a>
    ),
    key: "meta",
  },
  {
    label: (
      <a href="./links" target="_self" rel="noopener noreferrer">
        Link
      </a>
    ),
    key: "links",
  },
  {
    label: (
      <a href="./indexed" target="_self" rel="noopener noreferrer">
        Index
      </a>
    ),
    key: "indexed",
  },
  {
    label: (
      <a href="./time" target="_self" rel="noopener noreferrer">
        Time
      </a>
    ),
    key: "time",
  },
];

const MainMenu: React.FC = () => {
  const [current, setCurrent] = useState("meta-page");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    setCurrent(path);
  }, [location]);

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MainMenu;
