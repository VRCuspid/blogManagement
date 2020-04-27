import React from "react";
import { Menu } from "antd";
import { MenuRoute } from "@/router/router.config";
import { Link } from "react-router-dom";
import "./index.scss";
const { SubMenu } = Menu;
class MenuList extends React.Component {
  render() {
    const leafkey = location.hash.slice(1)
    const menukey = leafkey.split('/')[1]
    return (
      <Menu defaultOpenKeys={[menukey]} selectedKeys={[leafkey]} theme="dark" className="menu-list" mode="inline">
        {MenuRoute.map((item) => {
          return item.children
            ? this.createSubMenu(item)
            : this.createLeafMenu(item);
        })}
      </Menu>
    );
  }
  createSubMenu(data) {
    return (
      <SubMenu key={data.path} title={data.name}>
        {data.children &&
          data.children.map((item) => {
            return this.createLeafMenu(item);
          })}
      </SubMenu>
    );
  }
  createLeafMenu(data) {
    return (
      <Menu.Item key={data.path}>
        <Link to={data.path}>{data.name}</Link>
      </Menu.Item>
    );
  }
}
export default MenuList;
