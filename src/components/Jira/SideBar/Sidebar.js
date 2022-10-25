import {
  BarsOutlined,
  PlusOutlined,
  SearchOutlined  
} from "@ant-design/icons/lib/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
const { Sider } = Layout;
export default function Sidebar(props) {
  const [state, setState] = useState({
    collapsed: false,
  });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  return (
    <div>
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

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<PlusOutlined style={{ fontSize: 20 }} />}>
            <span className="mb-2">Create issue</span>
          </Menu.Item>
          <Menu.Item key="2" icon={<SearchOutlined style={{ fontSize: 20 }} />}>
            Search
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}
