import React from "react";
import ReactDOM from "react-dom";
import "../Mystyling/styles.css";

const date = new Date();
const currentTime = date.getHours();
console.log(currentTime);

let greeting;

const customStyle = {};

if (currentTime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}

//ReactDOM.render(<h1 style ={myStyle} >Hello</h1>
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,

  document.getElementById("root")
);
