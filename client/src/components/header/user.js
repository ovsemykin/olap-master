import React from "react";
import {
  UserOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Popover, Space, Button } from "antd";
import Login from "../login";

const text = <span>Иван Иванов (администратор)</span>;

const content = (
  <div>
    <Button type="text">
      <SettingOutlined /> Настройки
    </Button>
    <br />
    <Login />
    <hr />
    <Space size="middle">
      <div>
        <InfoCircleOutlined /> О программе
      </div>
      <div>
        <QuestionCircleOutlined /> Помощь
      </div>
    </Space>
  </div>
);

const User = () => {
  return (
    <>
      <Popover
        placement="bottomRight"
        title={text}
        content={content}
        trigger="click"
      >
        <Avatar icon={<UserOutlined />} />
      </Popover>
    </>
  );
};
export default User;
