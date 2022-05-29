import React from "react";
import { AnimationBanner } from "./AnimationBanner";
import "./Home.css";
import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <div className="container">
      <div>
        <Navigation />
      </div>
      <main>
        <h2>Hello everyone!</h2>
        <p>
          Hier you can train your algorithms skills.
          <br />
          Why do you need this?
          <br />
          Oh, there are 3 cases for that:
        </p>
        <ul>
          <li>
            You are just a green beginner in Javascript and often understand
            nothing
          </li>
          <li>
            You can't get over job interview. Especially this goddamn life
            coding
          </li>
          <li>
            You code too slowly and have to google again and again, even if the
            task is simple
          </li>
        </ul>
      </main>
      <div className="container-banner">
        <AnimationBanner />
      </div>
    </div>
  );
};
