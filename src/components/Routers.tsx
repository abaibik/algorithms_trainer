import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Arrays } from "./Arrays";
import { Strings } from "./Strings";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="/strings" element={<Strings />} />
      </Routes>
    </BrowserRouter>
  );
};
