import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";


const items: MenuProps["items"] = [
  {
    label: (
      <a href="./meta"  rel="noopener noreferrer">
        Meta
      </a>
    ),
    key: "meta",
  },
  {
    label: (
      <a href="./links"  rel="noopener noreferrer">
        Link
      </a>
    ),
    key: "links",
  },
  {
    label: (
      <a href="./indexed"  rel="noopener noreferrer">
        Index
      </a>
    ),
    key: "indexed",
  },
  {
    label: (
      <a href="./time" rel="noopener noreferrer">
        Time
      </a>
    ),
    key: "time",
  },
];


const MainMenu = ({ current, setCurrent }) => {
  const onClick: MenuProps["onClick"] = (e) => {
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
