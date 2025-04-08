import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}




function Home() {
  return (
    <div id="home">
      <h2>Welcome Home</h2>
    </div>
  );
}



function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
