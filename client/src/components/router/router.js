import React from "react";
import { Routes, Route } from "react-router-dom";
import Reports from "../reports";
import Process from "../process";
import Models from "../models";

const Router = () => {
  return (
    <Routes>
      <Route path="/reports" element={<Reports />}></Route>
      <Route path="/process" element={<Process />}></Route>
      <Route path="/" element={<Models />}></Route>
    </Routes>
  );
};
export default Router;
