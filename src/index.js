import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "Papyrus",
//  textAlign: "center",
color: "#ff6600"
};

const App = () => (
  <div style={styles}>
    <Hello name="Gabe" />
    <h1>Start editing to see some magic happen :3 {"\u2728"}</h1>
  </div>
);

render(<App />, document.getElementById("root"));
