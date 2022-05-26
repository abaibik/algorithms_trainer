import React from "react";
import { AnimationBanner } from "./AnimationBanner";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="container-banner">
        <AnimationBanner />
      </div>
    </div>
  );
};
