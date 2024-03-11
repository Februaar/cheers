import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import TotalPage from "./pages/total";
import CafePage from "./pages/cafe";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/total" element={<TotalPage />} />
        <Route path="/cafe" element={<CafePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
