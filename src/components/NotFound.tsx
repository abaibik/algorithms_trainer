import sadRobot from "../Images/sadRobot.jpg";
import { Navigation } from "./Navigation";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="container">
      <nav>
        <Navigation />
      </nav>
      <main>
        <div className="polaroid">
          <img alt="Sad robot" src={sadRobot}></img>
          <p>I could't find this page...</p>
        </div>
      </main>
    </div>
  );
};
