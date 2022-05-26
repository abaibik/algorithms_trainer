import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
