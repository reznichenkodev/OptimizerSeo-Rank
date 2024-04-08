import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: (
      <a href="./meta" target="_self" rel="noopener noreferrer">
        Meta
      </a>
    ),
    key: "metaPage",
  },
  {
    label: (
      <a href="./links" target="_self" rel="noopener noreferrer">
        Link
      </a>
    ),
    key: "linksPage",
  },
  {
    label: (
      <a href="./indexed" target="_self" rel="noopener noreferrer">
        Index
      </a>
    ),
    key: "indexedPage",
  },
  {
    label: (
      <a href="./time" target="_self" rel="noopener noreferrer">
        Time
      </a>
    ),
    key: "timePage",
  },
];

const MainMenu: React.FC = () => {
  const [current, setCurrent] = useState("metaPage");

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
