import React from "react";
import "./App.css";
import { Routers } from "./components/Routers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return <Routers />;
}

export default App;
