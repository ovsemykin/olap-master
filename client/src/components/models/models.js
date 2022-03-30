import React from "react";
import { Layout } from "antd";
import ModelsSidebar from "../modelsSidebar";
import { connect } from "react-redux";
import * as функции from "../../actions/action1";

function Models({ счетчик, убавить1, добавить1, добавитьРандом }) {
  return (
    <Layout>
      <ModelsSidebar />
      <Layout.Content style={{ margin: "16px 16px" }}>
        <h5>Контент</h5>

        <h1>{счетчик}</h1>
        <button onClick={убавить1}>-</button>
        <button onClick={добавить1}>+</button>
        <button onClick={добавитьРандом}>+рандом</button>
      </Layout.Content>
    </Layout>
  );
}

const перевестиСтэйтыВПропсы = (state) => {
  return {
    счетчик: state,
  };
};

export default connect(перевестиСтэйтыВПропсы, функции)(Models);
