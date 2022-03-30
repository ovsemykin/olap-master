import React from "react";
import { Select } from "antd";

function handleChange(value) {
  console.log(`selected ${value}`);
}

const Company = () => {
  return (
    <>
      <Select
        defaultValue="1"
        onChange={handleChange}
        style={{ width: "100%" }}
        size="small"
      >
        <Select.OptGroup label="Мои компании">
          <Select.Option value="1">Компания 1</Select.Option>
          <Select.Option value="2">Компания 2</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="Доверены мне">
          <Select.Option value="3">Доверенная компания 1</Select.Option>
        </Select.OptGroup>
      </Select>
    </>
  );
};
export default Company;
