import sadRobot from "../Images/sadRobot.jpg";

export const NotFound = () => {
  return (
    <div>
      <img alt="Sad robot" src={sadRobot}></img>
      <h1>I could't find this page...</h1>
    </div>
  );
};
