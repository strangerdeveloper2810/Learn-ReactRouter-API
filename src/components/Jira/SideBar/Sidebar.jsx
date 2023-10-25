import React, { useState } from "react";
import {
  BarsOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons/lib/icons";

import { Layout, Menu } from "antd";
const { Sider } = Layout;
const Sidebar = (props) => {
  const [state, setState] = useState({
    collapsed: false,
  });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={state.collapsed}
      style={{ height: "100%" }}
    >
      <div className="text-end pe-2" onClick={toggle}>
        <BarsOutlined
          style={{ cursor: "pointer", color: "#fff", fontSize: 25 }}
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <PlusOutlined style={{ fontSize: 20 }} />,
            label: "Create issue",
          },
          {
            key: "2",
            icon: <SearchOutlined style={{ fontSize: 20 }} />,
            label: "Search",
          },
        ]}
      />
    </Sider>
  );
};

export default React.memo(Sidebar);
