import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </BrowserRouter>
  );
};
