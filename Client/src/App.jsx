/* eslint-disable no-unused-vars */
import React from "react";

import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import LoginPage from "./routes/loginPage/loginPage";
import AdminPage from "./routes/adminPage/adminPage";


function App() {
  return (
    <div className="backgrounds">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />}>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;