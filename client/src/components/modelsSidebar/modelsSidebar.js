import React from "react";
import { Layout, Menu } from "antd";
import { PlusOutlined, PlusSquareOutlined } from "@ant-design/icons";
import "./modelsSidebar.less";

class ModelsSidebar extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        className="sider"
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PlusOutlined />}>
            новый справочник
          </Menu.Item>
          <Menu.Item key="2" icon={<PlusSquareOutlined />}>
            новая модель
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default ModelsSidebar;
