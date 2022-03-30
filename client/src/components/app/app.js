import React from "react";
import { Layout } from "antd";
import Header from "../header";
import Router from "../router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import функция_для_изменения_состояния from "../../reducers/reducer1";
import "./app.less";

const store = createStore(функция_для_изменения_состояния);
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Header />
            <Router />
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
