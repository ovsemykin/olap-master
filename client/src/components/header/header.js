import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import Logo_white_short from "../../img/header/Logo_white_short.svg";
import "./header.less";
import User from "./user";
import Company from "./company";

const Header = () => {
  return (
    <Layout.Header className="header">
      <Row>
        <Col span={2}>
          <div className="logo">
            <img src={Logo_white_short} alt="OLAP-MASTER" />
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={15}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <NavLink to="/">Модели</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/process">Процессы</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/reports">Отчеты</NavLink>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <Company />
        </Col>
        <Col span={1}></Col>
        <Col span={1}>
          <User />
        </Col>
      </Row>
    </Layout.Header>
  );
};
export default Header;
