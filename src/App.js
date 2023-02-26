import React from "react";
import Instructions from "./components/Instructions.js";
import Tabs from "./components/Tabs.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="block">
        <Instructions />
      </div>
      <div className="block">
        <Tabs />
      </div>
    </div>
  );
}
